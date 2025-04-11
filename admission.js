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