// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
      
    // Change icon
    const icon = mobileMenuBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
    else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
            
    // Toggle aria-expanded attribute
      const isExpanded = navMenu.classList.contains('active');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
});
        
// Close menu when clicking a link
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  ink.addEventListener('click', function() {
    navMenu.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });
});
}
    
// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.style.padding = '10px 0';
    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } 
  else {
    header.style.padding = '20px 0';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});
    
// Fix for iOS viewport height
function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
    
setVH();
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);
    
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');

    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition - headerHeight - 20,
        behavior: 'smooth'
      });
    }
  });
});
    
// Add loading animation for cards
const cards = document.querySelectorAll('.skill-card, .journey-card, .project-card, .overview-card, .feature-item');
    
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }
  });
}, { threshold: 0.1 });
    
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
  });
    
// Form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
    // Save to database via backend API
    const response = await fetch("https://rlmelato-myportfolio.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Message sent successfully!");
      contactForm.reset();
    } 
    else {
      console.error("Database error:", data.message);
      alert("Message saved in database, but something went wrong.");
    }
    } 
    catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  });
}
    
// Update current year in copyright
const yearSpan = document.querySelector('.copyright');

if (yearSpan) {
  yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', new Date().getFullYear());
}
});