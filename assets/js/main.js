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

    // Dropdown menu handling for mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    if (window.innerWidth <= 768) {
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            });
        });
    }
    
    // Fix anchor links for sections on the homepage when on other pages
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
            // Only change non-modal links
            if (link.getAttribute('href').startsWith('#') && 
                !link.getAttribute('href').includes('modal') && 
                !link.classList.contains('modal-trigger')) {
                link.setAttribute('href', '/index.html' + link.getAttribute('href'));
            }
        }
    });

    // Setup FAQ toggle functionality
    const setupFaqToggle = function() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        if (!faqItems.length) return;
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            
            if (question && answer && toggle) {
                question.addEventListener('click', function() {
                    // Close all other answers
                    document.querySelectorAll('.faq-answer.active').forEach(activeAnswer => {
                        if (activeAnswer !== answer) {
                            activeAnswer.classList.remove('active');
                            activeAnswer.parentElement.querySelector('.faq-toggle').classList.remove('active');
                        }
                    });
                    
                    // Toggle current answer
                    answer.classList.toggle('active');
                    toggle.classList.toggle('active');
                });
            }
        });
    };

    // IMPROVED MODAL FUNCTIONALITY
    // Universal modal opener function
    const openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.error(`Modal with ID ${modalId} not found`);
            return;
        }
        
        console.log(`Opening modal: ${modalId}`);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Special handling for FAQ modal
        if (modalId === 'faq-modal') {
            setupFaqToggle();
        }
    };
    
    // Universal modal closer function
    const closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    // Set up all modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const modalId = modal.id;
        const closeBtn = document.getElementById(`close-${modalId}`);
        
        // Add click outside to close
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modalId);
            }
        });
        
        // Add close button functionality
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                closeModal(modalId);
            });
        }
    });
    
    // Handle all modal triggers using class approach
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get modal ID from data attribute or href
            const modalId = this.getAttribute('data-modal') || 
                           this.getAttribute('href').replace('#', '');
            
            openModal(modalId);
        });
    });
    
    // For backward compatibility, also handle the original ID-based approach
    const setupOriginalModalButtons = function(triggerSelector, modalId) {
        const triggers = document.querySelectorAll(triggerSelector);
        if (!triggers.length) return;
        
        triggers.forEach(btn => {
            if (!btn.classList.contains('modal-trigger')) { // Skip if already handled by new approach
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    openModal(modalId);
                });
            }
        });
    };
    
    // Set up legacy modal buttons
    setupOriginalModalButtons('#contact-btn, #contact-btn-2, #nav-contact-btn, #contact-btn-about, #contact-btn-ag, #contact-btn-disaster, #contact-btn-carbon, #contact-btn-pfas, #contact-btn-waste, #contact-btn-i5, #contact-btn-3', 'contact-modal');
    setupOriginalModalButtons('#privacy-btn:not(.modal-trigger)', 'privacy-modal');
    setupOriginalModalButtons('#terms-btn:not(.modal-trigger)', 'terms-modal');
    setupOriginalModalButtons('#faq-btn:not(.modal-trigger)', 'faq-modal');

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
            closeModal('contact-modal');
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Skip modal links
        if (anchor.getAttribute('href').includes('modal') || 
            anchor.classList.contains('modal-trigger')) {
            return;
        }
        
        anchor.addEventListener('click', function (e) {
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
    
    // Add debugging logs for modal triggers
    console.log('Modal triggers found:', document.querySelectorAll('.modal-trigger').length);
    document.querySelectorAll('.modal-trigger').forEach(trigger => {
        console.log('Modal trigger:', trigger.textContent.trim(), 'for modal:', trigger.getAttribute('data-modal') || trigger.getAttribute('href'));
    });
});