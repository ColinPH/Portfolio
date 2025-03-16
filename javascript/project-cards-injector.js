document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("project-cards-container");

    console.log("before")
    console.log(projectsData);
    console.log("after")
    
    // Loop through projects and create HTML for each card
    projectsData.forEach(project => {
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
