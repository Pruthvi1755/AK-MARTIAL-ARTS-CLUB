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







 const mainLinks = document.querySelectorAll('.main-link');

  mainLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // prevent # jump
      event.stopPropagation(); // stop click from reaching document

      // First close all sub-links
      document.querySelectorAll('.sub-links').forEach(sub => {
        sub.style.display = 'none';
      });

      // Then open only the clicked one
      const subLinks = this.nextElementSibling;
      subLinks.style.display = 'block';
    });
  });

  // Listen for clicks anywhere in document
  document.addEventListener('click', function() {
    document.querySelectorAll('.sub-links').forEach(sub => {
      sub.style.display = 'none';
    });
  });
