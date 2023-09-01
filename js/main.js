function tab_handlers() {
    const skills = document.getElementById("tab-skills");
    const experiences = document.getElementById("tab-experiences");
    const others = document.getElementById("tab-others");
    const menuToggle = document.getElementById("menu-toggle");

    skills.addEventListener("click", () => {
        init("skills");
        menuToggle.checked = false;
    }
    );
    experiences.addEventListener("click", () => {
        init("experiences");
        menuToggle.checked = false;
    }
    );
    others.addEventListener("click", () => {
        init("others");
        menuToggle.checked = false;
    }
    );
    console.log("Deployement test (GitHub Actions).");
}

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

        const descriptionText = document.createElement("p");
        descriptionText.classList.add("description-text");
        descriptionText.textContent = description.text;

        descriptionDiv.appendChild(descriptionTitle);
        descriptionDiv.appendChild(descriptionText);

        const skillContainer = document.querySelector(".content-container");
        skillContainer.appendChild(descriptionDiv);

    }catch(error){
        console.log(error);
    }
}

function contentSkills(content) {
    for (const skill of content) {
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
        const contentContainer = document.querySelector(".content-container");
        contentContainer.appendChild(skillDiv);
        skillDiv.appendChild(skillImg);
        skillDiv.appendChild(skillTitle);
        skillDiv.appendChild(skillDescription);
    }
}

function contentExperiences(content) {
    for (const experience of content) {
        const experienceDate = document.createElement("div");
        experienceDate.classList.add("experience-div");
        
        const descriptionDate = document.createElement("p");
        descriptionDate.classList.add("experience-date");
        descriptionDate.textContent = experience.date;
        const experienceTitle = document.createElement("h3");
        experienceTitle.classList.add("experience-title");
        experienceTitle.textContent = experience.title;    
        const experienceDescription = document.createElement("p");
        experienceDescription.classList.add("experience-description");
        experienceDescription.textContent = experience.description;

        const contentContainer = document.querySelector(".content-container");
        contentContainer.appendChild(experienceDate);
        experienceDate.appendChild(descriptionDate);
        experienceDate.appendChild(experienceTitle);
        experienceDate.appendChild(experienceDescription);
    }
}

function contentOthers(content) {
    for (const others of content) {
        const othersDiv = document.createElement("div");
        othersDiv.classList.add("others-div");

        const othersTitle = document.createElement("h3");
        othersTitle.classList.add("others-title");
        othersTitle.textContent = others.title;
        const othersDescription = document.createElement("p");
        othersDescription.classList.add("others-description");
        othersDescription.textContent = others.description;
        const othersLink = document.createElement("a");
        othersLink.classList.add("others-link");
        othersLink.textContent = others.link;
        othersLink.href = others.link;

        const contentContainer = document.querySelector(".content-container");
        contentContainer.appendChild(othersDiv);
        othersDiv.appendChild(othersTitle);
        othersDiv.appendChild(othersDescription);
        othersDiv.appendChild(othersLink);
    }
}


async function init(tab) {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "";
    init_tab_description(tab);
    try{
        const response = await fetch("../data/" + tab + ".json");
        const content = await response.json();

        switch(tab){
            case "skills":
                contentSkills(content);
                break;
            case "experiences":
                contentExperiences(content);
                break;
            case "others":
                contentOthers(content);
                break;
            default:
                contentSkills(content);
                break;
        }

    }catch(error){
        console.log(error);
    }
}

// tab_handlers();
const tab = "skills";
init(tab);
tab_handlers();