// function tab_handlers() {
//     const tabSkills = document.querySelector("#tab-skills");
//     const tabExperiences = document.querySelector("#tab-experiences");
//     const tabOthers = document.querySelector("#tab-others");

//     tabSkills.addEventListener("click", () => {
//         init_tab_description("skills");
//     }
//     );
//     tabExperiences.addEventListener("click", () => {
//         init_tab_description("experiences");
//     }
//     );
//     tabOthers.addEventListener("click", () => {
//         init_tab_description("others");
//     }
//     );
// }

async function init_tab_description(tab) {
    try{
        const response = await fetch("../data/tab-descriptions.json");
        let description = await response.json();

        // TODO: manage several descriptions.
        switch(tab){
            case "skills":
                description = description.skills;
                break;
            case "experiences":
                description = description.experiences;
                break;
            case "others":
                description = description.others;
                break;
            default:
                description = description.skills;
                break;
        }

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

        const skillContainer = document.querySelector(".skill-container");
        skillContainer.appendChild(descriptionDiv);

    }catch(error){
        console.log(error);
    }
}

async function init_skills() {
    init_tab_description("skills");
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

// tab_handlers();
init_skills();
