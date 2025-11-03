/**
 * PRACTICAL PROMPTING - MAIN JAVASCRIPT
 * ======================================
 * Handles interactive functionality for the homepage
 * Primary Function: FAQ Accordion
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * FAQ ACCORDION FUNCTIONALITY
     * Allows users to click FAQ questions to reveal/hide answers
     */
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    /**
     * SMOOTH SCROLL FOR ANCHOR LINKS
     * Enhances user experience for in-page navigation
     */
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply smooth scroll for actual anchor links (not just "#")
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    /**
     * CTA BUTTON CLICK TRACKING
     * Optional: Add analytics or tracking events here
     */
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Log the click event (you can add Google Analytics or other tracking here)
            console.log('CTA Button Clicked:', this.textContent);
            
            // You can add custom tracking code here
            // Example: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': 'Fix My Prompts' });
        });
    });
    
    /**
     * LAZY LOADING FOR IMAGES
     * Improves page load performance
     */
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
    
    /**
     * SCROLL ANIMATIONS
     * Add fade-in effects as elements come into view (optional enhancement)
     */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in animation to section elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(section);
    });
    
});

/**
 * CONSOLE MESSAGE
 * Brand message for developers who inspect the site
 */
console.log('%c👋 Hey there, AI Realist!', 'font-size: 20px; font-weight: bold; color: #F95700;');
console.log('%cLike what you see? This site was built with the same systematic approach we teach.', 'font-size: 14px; color: #333333;');
console.log('%cLearn more at practicalprompting.co/sales/', 'font-size: 14px; color: #F95700;');

