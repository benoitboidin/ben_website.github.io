async function init_skills() {
    try{
        const response = await fetch("../data/skills.json");
        const skills = await response.json();

        for (const skill of skills) {
            // Container for each skill.
            const skillDiv = document.createElement("div");
            skillDiv.classList.add("skill-div");
            
            // Skill elements.
            const skillImg = document.createElement("img");
            skillImg.classList.add("skill-img");
            skillImg.src = skill.img;
            const skillTitle = document.createElement("h2");
            skillTitle.classList.add("skill-title");
            skillTitle.textContent = skill.title;    
            const skillDescription = document.createElement("p");
            skillDescription.classList.add("skill-description");
            skillDescription.textContent = skill.description;

            // Add to skill container.
            const skillContainer = document.querySelector(".skill-container");
            skillContainer.appendChild(skillDiv);
            skillDiv.appendChild(skillImg);
            skillDiv.appendChild(skillTitle);
            skillDiv.appendChild(skillDescription);
        }
    }catch(error){
        console.log(error);
    }
}

async function init_experiences() {
    try{
        const response = await fetch("../data/experiences.json");
        const experiences = await response.json();

        for (const experience of experiences) {
            // Container for each experience.
            const experienceDiv = document.createElement("div");
            experienceDiv.classList.add("experience-div");

            // Experience elements.
            const experienceImg = document.createElement("img");
            experienceImg.classList.add("experience-img");
            experienceImg.src = experience.img;
            const experienceTitle = document.createElement("h2");
            experienceTitle.classList.add("experience-title");
            experienceTitle.textContent = experience.title;
            const experienceDescription = document.createElement("p");
            experienceDescription.classList.add("experience-description");
            experienceDescription.textContent = experience.description;

            // Add to experience container.
            const experienceContainer = document.querySelector(".experience-container");
            experienceContainer.appendChild(experienceDiv);
            experienceDiv.appendChild(experienceImg);
            experienceDiv.appendChild(experienceTitle);
            experienceDiv.appendChild(experienceDescription);
        }
    }catch(error){
        console.log(error);
    }
}
  
init_skills();
