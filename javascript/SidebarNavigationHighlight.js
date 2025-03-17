//This script handles the highlighting of the sidebar elements when the user scrolls through the content.
//The purpose is to help the user know where they are within the vertical structure

// Get all sections and navigation links
const sections = document.querySelectorAll('section');

// Function to check the visibility of a section in the middle of the viewport
function checkSectionVisibility() {
    let currentSection = '';
    let maxProportion = 0;
    
    // Loop through all sections
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();  // Get the position and size of the section
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight; // Height of the viewport

        // Calculate the part of the section that is visible
        const visibleHeight = Math.max(0, Math.min(viewportHeight, rect.bottom) - Math.max(0, rect.top));

        // Calculate the visible proportion of the section
        const visibleProportion = visibleHeight / sectionHeight;

        // Check if the section is in the middle of the viewport
        if (visibleProportion > maxProportion) {
            maxProportion = visibleProportion;
            currentSection = section.getAttribute('id');
        }
    });

    let navLinks = document.querySelectorAll('.navigation a');
    // Highlight the matching navigation link
    navLinks.forEach((link) => {
        link.classList.remove('active'); // Remove active class from all links
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active'); // Add active class to the matching link
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', checkSectionVisibility);

// Call the function initially in case the page is already scrolled
checkSectionVisibility();