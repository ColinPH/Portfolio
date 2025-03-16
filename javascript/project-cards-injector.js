document.addEventListener("DOMContentLoaded", function () {
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
        
        // Generate tags dynamically
        const roleTagElements = project.roleTags.map(role => {
            return `<span class="tag-role">${role}</span>`;
        });
        const competenceTagElements = project.competenceTags.map(tech => {
            return `<span class="tag-tech">${tech}</span>`;
        });
        const allTagElements = roleTagElements.concat(competenceTagElements);
        const tags = allTagElements.join("");

        card.innerHTML = `   
                <a href="${project.link}" class="project-card">
                    <img src="${project.thumbnail}" alt="${project.imageAlt}" class="project-thumbnail-img">
                    <div class="project-info">
                        <p class="project-description">${project.description}</p>
                        <div class="tags-group">
                            ${tags}
                        </div>
                    </div>
                </a>
            `;
        container.appendChild(card);
    });
});
