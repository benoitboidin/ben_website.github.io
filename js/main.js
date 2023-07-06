async function init() {
    console.log("init()");

    try{
        const response = await fetch("../data/skills.json");
        const skills = await response.json();

        for (const skill of skills) {
            const skillDiv = document.createElement("div");
            skillDiv.classList.add("skill-div");
            
            const skillImg = document.createElement("img");
            skillImg.classList.add("skill-img");
            skillImg.src = skill.img;

            const skillTitle = document.createElement("h2");
            skillTitle.classList.add("skill-title");
            skillTitle.textContent = skill.title;
            
            const skillDescription = document.createElement("p");
            skillDescription.classList.add("skill-description");
            skillDescription.textContent = skill.description;

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
  
init();