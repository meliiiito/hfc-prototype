/**
 * Budget Blinds - Motorized Window Shades
 * Main JavaScript functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // ===========================
  // MOBILE MENU TOGGLE
  // ===========================
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      const isOpen = menuToggle.classList.toggle('open');
      mobileNav.classList.toggle('open');
      
      // Update ARIA attribute for accessibility
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Close mobile menu when a link is clicked
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('open');
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  // ===========================
  // FAQ ACCORDION
  // ===========================
  const accordionButtons = document.querySelectorAll('.accordion__button');
  
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const panel = this.nextElementSibling;
      const isOpen = panel.classList.contains('open');
      
      // Close all other panels
      document.querySelectorAll('.accordion__panel').forEach(p => {
        p.classList.remove('open');
      });
      
      document.querySelectorAll('.accordion__button').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-expanded', 'false');
      });
      
      // Toggle current panel
      if (!isOpen) {
        panel.classList.add('open');
        this.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
  
  // ===========================
  // TESTIMONIAL SLIDER
  // ===========================
  const testimonialsTrack = document.querySelector('.testimonials__track');
  const prevBtn = document.querySelector('.testimonials__btn[data-direction="prev"]');
  const nextBtn = document.querySelector('.testimonials__btn[data-direction="next"]');
  
  if (testimonialsTrack && prevBtn && nextBtn) {
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    
    // Calculate how many testimonials to show at once based on screen size
    function getVisibleCount() {
      const width = window.innerWidth;
      if (width >= 1024) return 3;
      if (width >= 768) return 2;
      return 1;
    }
    
    function updateSlider() {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, totalTestimonials - visibleCount);
      
      // Constrain currentIndex
      currentIndex = Math.min(currentIndex, maxIndex);
      currentIndex = Math.max(currentIndex, 0);
      
      // Calculate offset
      const testimonialWidth = testimonials[0].offsetWidth;
      const gap = 24; // Should match --space-6 in CSS
      const offset = currentIndex * (testimonialWidth + gap);
      
      testimonialsTrack.style.transform = `translateX(-${offset}px)`;
      
      // Update button states
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= maxIndex;
      
      // Update button opacity for visual feedback
      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
      nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }
    
    prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
    
    nextBtn.addEventListener('click', function() {
      const visibleCount = getVisibleCount();
      const maxIndex = totalTestimonials - visibleCount;
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
      }
    });
    
    // Update on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateSlider, 250);
    });
    
    // Initialize slider
    updateSlider();
    
    // Optional: Auto-rotate testimonials every 5 seconds
    let autoRotateInterval;
    
    function startAutoRotate() {
      autoRotateInterval = setInterval(function() {
        const visibleCount = getVisibleCount();
        const maxIndex = totalTestimonials - visibleCount;
        
        if (currentIndex < maxIndex) {
          currentIndex++;
        } else {
          currentIndex = 0; // Loop back to start
        }
        updateSlider();
      }, 5000);
    }
    
    function stopAutoRotate() {
      clearInterval(autoRotateInterval);
    }
    
    // Start auto-rotation
    startAutoRotate();
    
    // Pause auto-rotation when user interacts
    prevBtn.addEventListener('click', function() {
      stopAutoRotate();
      // Restart after 10 seconds of inactivity
      setTimeout(startAutoRotate, 10000);
    });
    
    nextBtn.addEventListener('click', function() {
      stopAutoRotate();
      // Restart after 10 seconds of inactivity
      setTimeout(startAutoRotate, 10000);
    });
    
    // Pause on hover
    testimonialsTrack.addEventListener('mouseenter', stopAutoRotate);
    testimonialsTrack.addEventListener('mouseleave', startAutoRotate);
  }
  
  // ===========================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ===========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Don't prevent default for links that don't point to an actual element
      if (href === '#' || !document.querySelector(href)) {
        return;
      }
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80; // Account for sticky header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ===========================
  // FORM SUBMISSION (Newsletter)
  // ===========================
  const newsletterForm = document.querySelector('.footer__form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const zipInput = this.querySelector('input[type="text"]');
      
      if (emailInput.value && zipInput.value) {
        // In a real application, you would send this data to a server
        alert('Thank you for subscribing! We\'ll send design inspiration and exclusive offers to ' + emailInput.value);
        
        // Clear form
        emailInput.value = '';
        zipInput.value = '';
      }
    });
  }
  
});

