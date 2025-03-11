document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Modal functionality
    const setupModal = function(triggerSelector, modalId, closeId) {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.getElementById(modalId);
        const closeBtn = document.getElementById(closeId);
        
        if (!triggers.length || !modal || !closeBtn) return;
        
        triggers.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    };

    // Set up each modal
    setupModal('#contact-btn, #contact-btn-2, #nav-contact-btn', 'contact-modal', 'close-contact-modal');
    setupModal('#privacy-btn', 'privacy-modal', 'close-privacy-modal');
    setupModal('#terms-btn', 'terms-modal', 'close-terms-modal');
    setupModal('#faq-btn', 'faq-modal', 'close-faq-modal');

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });
            
            // Add timestamp and email recipient
            formDataObject.timestamp = new Date().toISOString();
            formDataObject.recipient = "legacy@carboncustodians.au";
            
            console.log("Form submission data:", formDataObject);
            
            // For now, show a success message
            alert('Thank you for your message! We will get back to you soon.');
            document.getElementById('contact-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#contact-modal' || 
                this.getAttribute('href') === '#privacy-modal' || 
                this.getAttribute('href') === '#terms-modal' || 
                this.getAttribute('href') === '#faq-modal') {
                return;
            }
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});