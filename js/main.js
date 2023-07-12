async function init_skills() {
    console.log("init()");

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
  
init_skills();