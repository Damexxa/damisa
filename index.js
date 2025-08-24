const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
});

  
 
  AOS.init();



    window.addEventListener('scroll', checkAndStartRotation);
    window.addEventListener('load', checkAndStartRotation);

    const testimonials = document.querySelectorAll('.testimonial');
    const section = document.getElementById('testimonial-section');
    let current = 0;
    let intervalStarted = false;

    function rotateTestimonials() {
      testimonials[current].classList.remove('active');
      current = (current + 1) % testimonials.length;
      testimonials[current].classList.add('active');
    }

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function checkAndStartRotation() {
      if (isInViewport(section) && !intervalStarted) {
        intervalStarted = true;
        setInterval(rotateTestimonials, 10000); // every 10 seconds
      }
    }
