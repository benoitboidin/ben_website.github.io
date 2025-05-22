// Minimal JS for mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Expandable Bento Boxes
document.addEventListener('DOMContentLoaded', () => {
  const expandableBoxes = document.querySelectorAll('.expandable-box');

  expandableBoxes.forEach(box => {
    // No casting needed in JS, but be mindful that properties might not exist if selectors are wrong.
    const titleElement = box.querySelector('.bento-box-title');
    const summaryPara = box.querySelector('.bento-box-summary'); // Get the summary paragraph
    const contentDiv = box.querySelector('.bento-box-content');
    // @ts-ignore - Accessing dataset, which is standard but might show TS warning in JS context
    const contentUrl = box.dataset.contentUrl; 
    let contentFetched = false;

    if (titleElement && contentDiv && contentUrl) { // summaryPara can be optional
      // @ts-ignore - Accessing style, which is standard but might show TS warning in JS context
      titleElement.style.cursor = 'pointer'; // Make title look clickable
      titleElement.addEventListener('click', async () => {
        if (!contentFetched) {
          try {
            const response = await fetch(contentUrl);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const htmlText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            const pageMainContent = doc.querySelector('.page-container'); // Or 'main' or specific content div
            
            if (pageMainContent) {
              // Clone and append children to avoid moving original script/style tags from head
              Array.from(pageMainContent.children).forEach(child => {
                contentDiv.appendChild(child.cloneNode(true));
              });
            } else {
              contentDiv.innerHTML = '<p>Could not load content.</p>';
            }
            contentFetched = true;
          } catch (error) {
            console.error('Error fetching content:', error);
            contentDiv.innerHTML = '<p>Error loading content. Please try again later.</p>';
          }
        }
        // Toggle visibility by only toggling the class
        box.classList.toggle('expanded');

        // The CSS will handle display of contentDiv and summaryPara based on .expanded class
      });
    }
  });
});
