window.addEventListener("load", function () {
    // Hide the preloader
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0"; // Fade out effect
    preloader.style.transition = "opacity 0.5s ease";
  
    // After fade-out, remove preloader from DOM
    setTimeout(() => {
        preloader.style.display = "none"; // Remove the preloader
        document.getElementById("main-content").style.display = "block"; // Show the main content
    }, 500); // Matches the fade-out transition time
  });
  



 // Get the main link and sub-links container
 const mainLink = document.querySelector('.main-link');
 const subLinks = document.querySelector('.sub-links');

 // Add click event to the main link
 mainLink.addEventListener('click', (event) => {
   event.preventDefault(); // Prevent the default link behavior
   mainLink.style.display = 'none'; // Hide the main link
   subLinks.style.display = 'block'; // Show the sub-links
 });

 // Add click event to the document to reset the state
 document.addEventListener('click', (event) => {
   // Check if the clicked element is outside the main or sub links
   if (!event.target.closest('li')) {
     mainLink.style.display = 'block'; // Show the main link
     subLinks.style.display = 'none'; // Hide the sub-links
   }
 });




// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to trigger animation when elements are scrolled into view
function triggerAnimationsOnScroll() {
    const blackline2 = document.querySelector('.blackline2');
    const aboutusH3 = document.querySelector('.aboutus h3');
    
    if (isInViewport(blackline2)) {
        blackline2.classList.add('inst');
    }
    
    if (isInViewport(aboutusH3)) {
        aboutusH3.classList.add('inst');
    }
}

// Listen for scroll events
window.addEventListener('scroll', triggerAnimationsOnScroll);

// Trigger animations on initial load in case the elements are already in view
document.addEventListener('DOMContentLoaded', triggerAnimationsOnScroll);






document.addEventListener("DOMContentLoaded", () => {
    const photoCards = document.querySelectorAll(".photo-card");

    // Create an Intersection Observer to detect when elements enter the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate"); // Add animation class when in view
            } else {
                entry.target.classList.remove("animate"); // Remove class when out of view (optional)
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Observe each photo card
    photoCards.forEach((card) => observer.observe(card));
});



document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".redline, .blackbelt");

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate"); // Add animation class when in view
            } else {
                entry.target.classList.remove("animate"); // Remove class when out of view (optional)
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Observe each element
    elements.forEach((el) => observer.observe(el));
});



document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".groupphoto");

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");  // Add animation class when in view
            } else {
                entry.target.classList.remove("animate");  // Remove class when out of view (optional)
            }
        });
    }, { threshold: 0.1 });  // Trigger when 10% of the element is visible

    // Observe each element
    elements.forEach((el) => observer.observe(el));
});




// Animate elements on scroll (text and photo boxes)
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(
      ".aboutus p, .aboutus h2, .aboutus h3, .aboutus img, .box, .blackbelt, .groupphoto"
    );
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    animatedElements.forEach((el) => observer.observe(el));
  });