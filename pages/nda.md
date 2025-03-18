---
layout: default
title: Confidentiality Agreement
permalink: /nda/
---

<section class="section">
  <div class="tesla-pattern"></div>
  <div class="container">
    <div class="center-title">
      <h2 class="section-title">Confidentiality Agreement</h2>
    </div>
    <p style="text-align: center; max-width: 800px; margin: 0 auto 36px; font-size: 18px;">
    </p>
    
    <div id="nda-form-container">
      <form id="nda-form" class="nda-form">
        <div class="form-group">
          <label for="fullName">Full Legal Name *</label>
          <input type="text" id="fullName" name="fullName" required>
        </div>
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="company">Organization/Company *</label>
          <input type="text" id="company" name="company" required>
        </div>
        <div class="form-group">
          <label for="position">Position/Title *</label>
          <input type="text" id="position" name="position" required>
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number *</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required>
        </div>
        
        <div class="nda-content">
          <h3>Non-Disclosure Agreement</h3>
          
          <p>This Non-Disclosure Agreement (the "Agreement") is entered into between Carbon Custodians Pty Ltd ("Company") and the individual identified above ("Recipient").</p>
          
          <h4>1. Definition of Confidential Information</h4>
          <p>For purposes of this Agreement, "Confidential Information" means any information disclosed by the Company to Recipient, either directly or indirectly, in writing, orally or by inspection of tangible objects, including without limitation: the Company's pyrolysis technology, engineering specifications, design techniques, production processes, research and development information, business strategies, financial information, marketing plans, customer and supplier information, and other technical and business information which is either marked as "confidential" or would reasonably be understood to be confidential given the nature of the information and the circumstances of disclosure.</p>
          
          <h4>2. Recipient's Obligations</h4>
          <p>Recipient agrees:</p>
          <p>(a) to hold the Confidential Information in strict confidence;</p>
          <p>(b) not to disclose such Confidential Information to any third parties;</p>
          <p>(c) not to use any Confidential Information for any purpose except to evaluate and engage in discussions concerning potential business relationships with the Company; and</p>
          <p>(d) to take reasonable precautions to prevent unauthorized disclosure of such Confidential Information, including, without limitation, using at least the same degree of care that Recipient uses to protect its own confidential information.</p>
          
          <h4>3. Term</h4>
          <p>The obligations of Recipient under this Agreement shall survive until such time as all Confidential Information disclosed hereunder becomes publicly known and made generally available through no action or inaction of Recipient.</p>
          
          <h4>4. Governing Law</h4>
          <p>This Agreement shall be governed by and construed in accordance with the laws of Queensland, Australia, without reference to conflict of laws principles.</p>
          
          <h4>5. Statutory Declaration</h4>
          <p>I solemnly and sincerely declare that I understand and agree to abide by the terms of this confidentiality agreement, and I acknowledge that this declaration is true and correct, and I make it with the understanding and belief that a person who makes a false declaration is liable to the penalties of perjury.</p>
        </div>
        
        <div class="form-group">
          <div class="signature-container">
            <label for="signature">Digital Signature *</label>
            <canvas id="signatureCanvas" width="600" height="200"></canvas>
            <input type="hidden" id="signature" name="signature">
            <button type="button" id="clearSignature" class="btn secondary-btn">Clear Signature</button>
          </div>
        </div>
        
        <div class="form-group">
          <label class="checkbox-container">
            <input type="checkbox" id="agreeTerms" name="agreeTerms" required>
            <span class="checkmark"></span>
            I have read, understand, and agree to the terms of this Confidentiality Agreement and Statutory Declaration *
          </label>
        </div>
        
        <div class="form-group">
          <button type="submit" class="btn" id="submit-nda">Submit Agreement</button>
        </div>
      </form>
    </div>
    
    <div id="nda-success" style="display: none;">
      <div class="success-message">
        <i class="fas fa-check-circle" style="font-size: 48px; color: var(--emerald-primary); margin-bottom: 18px;"></i>
        <h3>Agreement Successfully Submitted</h3>
        <p id="confirmation-message">Thank you for completing the confidentiality agreement. Your submission has been recorded.</p>
        <p>Verification Code: <span id="verification-code" style="font-weight: bold; font-family: monospace;"></span></p>
        <p>Please show this screen to a Carbon Custodians representative.</p>
      </div>
    </div>
  </div>
</section>

<style>
.nda-form {
  max-width: 800px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 27px;
}

.form-group label {
  display: block;
  margin-bottom: 9px;
  font-weight: 500;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"] {
  width: 100%;
  padding: 12px 18px;
  border-radius: 6px;
  border: 2px solid var(--carbon-gray);
  background: var(--tesla-dark);
  color: var(--tesla-light);
  font-size: 16px;
}

.nda-content {
  background: var(--carbon-gray);
  padding: 27px;
  border-radius: 9px;
  margin-bottom: 27px;
  max-height: 300px;
  overflow-y: auto;
}

.nda-content h3 {
  margin-bottom: 18px;
  color: var(--emerald-primary);
}

.nda-content h4 {
  margin-top: 18px;
  margin-bottom: 9px;
  color: var(--emerald-primary);
}

.signature-container {
  margin-bottom: 18px;
}

#signatureCanvas {
  background-color: white;
  border-radius: 6px;
  margin-bottom: 9px;
  width: 100%;
  height: 200px;
  cursor: crosshair;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-left: 36px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: var(--tesla-dark);
  border: 2px solid var(--carbon-gray);
  border-radius: 4px;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: var(--carbon-gray);
}

.checkbox-container input:checked ~ .checkmark {
  background-color: var(--emerald-primary);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.success-message {
  background: var(--carbon-gray);
  padding: 36px;
  border-radius: 9px;
  text-align: center;
  margin: 36px auto;
  max-width: 600px;
}

#verification-code {
  font-size: 24px;
  color: var(--emerald-primary);
  letter-spacing: 3px;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Canvas signature pad setup
  const canvas = document.getElementById('signatureCanvas');
  const signatureInput = document.getElementById('signature');
  const clearButton = document.getElementById('clearSignature');
  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  
  // Adjust canvas size to container width
  function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = 200;
    
    // Initial canvas setup
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
  }
  
  // Call resize on load
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Signature pad event listeners
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('touchstart', startDrawing);
  
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('touchmove', draw);
  
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('touchend', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
  
  clearButton.addEventListener('click', clearSignature);
  
  function startDrawing(e) {
    isDrawing = true;
    draw(e);
  }
  
  function draw(e) {
    if (!isDrawing) return;
    
    e.preventDefault();
    
    let x, y;
    
    if (e.type.includes('mouse')) {
      x = e.offsetX;
      y = e.offsetY;
    } else {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    }
    
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
  
  function stopDrawing() {
    if (isDrawing) {
      ctx.beginPath();
      isDrawing = false;
      
      // Save signature data
      signatureInput.value = canvas.toDataURL('image/png');
    }
  }
  
  function clearSignature() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "black";
    signatureInput.value = '';
  }
  
  // Form submission
  const form = document.getElementById('nda-form');
  const formContainer = document.getElementById('nda-form-container');
  const successContainer = document.getElementById('nda-success');
  const verificationCode = document.getElementById('verification-code');
  const confirmationMessage = document.getElementById('confirmation-message');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Validate signature
    if (!signatureInput.value) {
      alert('Please provide your signature before submitting.');
      return;
    }
    
    // Collect form data
    const formData = new FormData(form);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });
    
    // Add timestamp
    formDataObj.timestamp = new Date().toISOString();
    
    // Generate unique verification code
    const code = generateVerificationCode();
    formDataObj.verificationCode = code;
    
    try {
      // Send data to AWS Lambda endpoint
      const response = await fetch('https://glx26fewue.execute-api.ap-southeast-2.amazonaws.com/prod/submit-nda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj)
      });
      
      if (response.ok) {
        // Show success message
        formContainer.style.display = 'none';
        successContainer.style.display = 'block';
        verificationCode.textContent = code;
        confirmationMessage.textContent = `Thank you, ${formDataObj.fullName}. Your confidentiality agreement has been recorded.`;
        
        // Scroll to the top of the page for better UX, especially on mobile
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again or contact a Carbon Custodians representative.');
    }
  });
  
  // Generate a unique verification code
  function generateVerificationCode() {
    const timestamp = new Date().getTime().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `CC-${timestamp}-${random}`;
  }
});
</script>