async function init_tab_description() {
    try{
        const response = await fetch("../data/tab-descriptions.json");
        const description = await response.json();

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description-div");

        const descriptionTitle = document.createElement("h2");
        descriptionTitle.classList.add("description-title");
        descriptionTitle.textContent = description.title;
        console.log(description.title);

        const descriptionText = document.createElement("p");
        descriptionText.classList.add("description-text");
        descriptionText.textContent = description.text;
        console.log(description.text);

        descriptionDiv.appendChild(descriptionTitle);
        descriptionDiv.appendChild(descriptionText);

        const decsriptionContainer = document.querySelector(".description-container");
        decsriptionContainer.appendChild(descriptionDiv);

    }catch(error){
        console.log(error);
    }
}

async function init_skills() {
    init_tab_description();
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
            const skillTitle = document.createElement("h3");
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

  
init_skills();
