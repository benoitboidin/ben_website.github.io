async function init() {
    const response = await fetch("../data/skills.json");
    const skills = await response.json();
}
