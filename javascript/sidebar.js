document.addEventListener("DOMContentLoaded", function () {
    const sidebarCaller = document.getElementById("sidebarCaller");
    const pathDepth = parseInt(sidebarCaller.getAttribute("data-depth"), 10);
    
    // Generate the relative path prefix
    let pathPrefix = "";
    for (let i = 0; i < pathDepth; i++) {
        pathPrefix += "../";
    }
    
    document.getElementById("sidebar-container").innerHTML = `
        <aside class="sidebar">           
            <nav class="navigation">
                <ul id="dynamic-sidebar-links"></ul>
            </nav>
            <footer>
                <p>September 2025</p>
            </footer>
        </aside>
    `;

    // Now dynamically populate the sidebar links
    const sections = document.querySelectorAll('.sidebar-section');  // Select all elements with class "sidebarSection"
    const sidebarLinksContainer = document.getElementById("dynamic-sidebar-links"); // The <ul> element to hold links

    // Loop through each section with the class "sidebar-section" to create a sidebar link for each
    sections.forEach(section => {
        const title = section.getAttribute('sidebar-section-title');  // Get the title of the section using the "data-title" attribute
        const pageLink = section.getAttribute('page-link');  // Get the title of the section using the "data-title" attribute
        const link = document.createElement("li");  // Create a new <li> element for the link
        link.innerHTML = `<a href="${pageLink}">${title}</a>`;  // Create the link inside the <li>
        sidebarLinksContainer.appendChild(link);  // Append the link to the sidebar
    });
});
