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
})


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



const galleryItems = document.querySelectorAll('.gallery-item');
const totalItems = galleryItems.length;
let currentIndex = 2; // Start with the center image (index starts at 0)
let autoplayInterval;

// Function to update the gallery positions
function updateGallery() {
  galleryItems.forEach((item, index) => {
    item.classList.remove(
      'gallery-item-1',
      'gallery-item-2',
      'gallery-item-3',
      'gallery-item-4',
      'gallery-item-5'
    );
  });

  // Dynamically assign classes based on currentIndex
  galleryItems[getCircularIndex(currentIndex - 2)].classList.add('gallery-item-1');
  galleryItems[getCircularIndex(currentIndex - 1)].classList.add('gallery-item-2');
  galleryItems[getCircularIndex(currentIndex)].classList.add('gallery-item-3');
  galleryItems[getCircularIndex(currentIndex + 1)].classList.add('gallery-item-4');
  galleryItems[getCircularIndex(currentIndex + 2)].classList.add('gallery-item-5');
}

// Utility function to handle circular indexing
function getCircularIndex(index) {
  return (index + totalItems) % totalItems;
}

// Autoplay function
function autoplay() {
  currentIndex = getCircularIndex(currentIndex + 1);
  updateGallery();
}

// Click event listener to bring an image to the center
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    updateGallery();
  });
});

// Start autoplay
function startAutoplay() {
  autoplayInterval = setInterval(autoplay, 2000); // 3 seconds
}

// Pause autoplay on hover
document.querySelector('.gallery-container').addEventListener('mouseenter', () => {
  clearInterval(autoplayInterval);
});

// Resume autoplay on mouse leave
document.querySelector('.gallery-container').addEventListener('mouseleave', startAutoplay);

// Initialize the gallery
updateGallery();
startAutoplay();




// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to reset the animation by setting the initial state
function resetAnimation(element) {
  element.style.opacity = '0';
  element.style.transform = 'translateX(-100%)'; // Start off-screen again
}

// Function to trigger the animation on scroll
function animateOnScroll() {
  const subtitle = document.querySelector('.subtitle');
  const blackline = document.querySelector('.blackline');
  const subtitle2 = document.querySelector('.subtitle2');
  const blackline2 = document.querySelector('#blackline');

  // Check and animate .subtitle when it comes into the viewport
  if (isInViewport(subtitle)) {
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateX(0)'; // Slide in
  } else {
      resetAnimation(subtitle); // Reset when out of view
  }

  // Check and animate .blackline when it comes into the viewport
  if (isInViewport(blackline)) {
      blackline.style.opacity = '1';
      blackline.style.transform = 'translateX(0)'; // Slide in
  } else {
      resetAnimation(blackline); // Reset when out of view
  }

  // Check and animate .subtitle2 when it comes into the viewport
  if (isInViewport(subtitle2)) {
      subtitle2.style.opacity = '1';
      subtitle2.style.transform = 'translateX(0)'; // Slide in
  } else {
      resetAnimation(subtitle2); // Reset when out of view
  }

  // Check and animate #blackline when it comes into the viewport
  if (isInViewport(blackline2)) {
      blackline2.style.opacity = '1';
      blackline2.style.transform = 'translateX(0)'; // Slide in
  } else {
      resetAnimation(blackline2); // Reset when out of view
  }
}

// Add scroll event listener to trigger animation when scrolled
window.addEventListener('scroll', animateOnScroll);

// Run on page load to check if elements are already in view
window.addEventListener('load', animateOnScroll);






  document.addEventListener("DOMContentLoaded", () => {
    const slide = document.querySelector(".custom-carousel-wrapper #carouselSlide");
    const images = slide.querySelectorAll("img");
    const dotsContainer = document.querySelector(".custom-carousel-wrapper #dotsContainer");
    const prevBtn = document.querySelector(".custom-carousel-wrapper .prev");
    const nextBtn = document.querySelector(".custom-carousel-wrapper .next");
    let currentIndex = 0;

    // Create dots dynamically
    for (let i = 0; i < images.length; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    }

    const updateCarousel = () => {
      const width = images[0].clientWidth;
      slide.style.transform = `translateX(-${currentIndex * width}px)`;

      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    };

    const autoSlide = () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    };

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    setInterval(autoSlide, 3000);
    window.addEventListener("resize", updateCarousel);
  });




  document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(
      ".subtext1, .subtextlist ul, .his h3, .his ul, .his img"
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
      { threshold: 0.1 }
    );

    elementsToAnimate.forEach((el) => observer.observe(el));
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
