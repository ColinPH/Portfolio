document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("project-cards-container");
    const filter = container.getAttribute("project-tag");

    container.innerHTML = ''; // Clear the current project cards

    projectsData.forEach(project => {
        // Check if the project has the filter in its categories list
        if (filter && !project.categories.includes(filter)) {
            return; // Skip this project if it doesn't match the filter
        }

        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="project-link">View Project</a>
            `;
        container.appendChild(card);
    });
});
