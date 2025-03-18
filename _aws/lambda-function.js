// Lambda function to process NDA form submissions
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // Log the event for debugging (can be removed in production)
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    // Parse the incoming request body
    let requestBody;
    try {
        if (event.body) {
            requestBody = JSON.parse(event.body);
        } else {
            requestBody = event;
        }
    } catch (e) {
        console.error('Error parsing request body:', e);
        return formatResponse(400, { 
            message: 'Invalid request body' 
        });
    }
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'company', 'position', 'phoneNumber', 'signature', 'verificationCode'];
    for (const field of requiredFields) {
        if (!requestBody[field]) {
            return formatResponse(400, { 
                message: `Missing required field: ${field}` 
            });
        }
    }
    
    // Ensure checkbox was checked
    if (!requestBody.agreeTerms || requestBody.agreeTerms !== 'on') {
        return formatResponse(400, { 
            message: 'You must agree to the terms to proceed' 
        });
    }
    
    // Prepare item for DynamoDB
    const timestamp = new Date().toISOString();
    const item = {
        id: requestBody.verificationCode, // Use verification code as primary key
        fullName: requestBody.fullName,
        email: requestBody.email,
        company: requestBody.company,
        position: requestBody.position,
        phoneNumber: requestBody.phoneNumber,
        agreementTimestamp: timestamp,
        ipAddress: event.requestContext?.identity?.sourceIp || 'unknown',
        userAgent: event.requestContext?.identity?.userAgent || 'unknown',
        verificationCode: requestBody.verificationCode
    };
    
    // Store signature image separately for better performance
    // The base64 signature data can be large
    const signatureItem = {
        id: `${requestBody.verificationCode}-signature`,
        verificationCode: requestBody.verificationCode,
        signature: requestBody.signature,
        timestamp: timestamp
    };
    
    try {
        // Save main record
        await docClient.put({
            TableName: process.env.DYNAMODB_TABLE,
            Item: item
        }).promise();
        
        // Save signature record
        await docClient.put({
            TableName: process.env.DYNAMODB_TABLE,
            Item: signatureItem
        }).promise();
        
        // Return success response
        return formatResponse(200, {
            message: 'NDA submission successfully recorded',
            verificationCode: requestBody.verificationCode
        });
    } catch (error) {
        console.error('Error saving to DynamoDB:', error);
        return formatResponse(500, {
            message: 'Error processing your submission'
        });
    }
};

// Helper function to format HTTP response
function formatResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Allow CORS (update for production)
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'OPTIONS,POST'
        },
        body: JSON.stringify(body)
    };
}