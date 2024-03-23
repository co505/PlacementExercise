function createNameElement(topic){
    const nameElement = document.createElement("div");
    nameElement.className = "departName";
    nameElement.textContent = topic;
    return nameElement;
}

function createDescriptionElement(topic){
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = topic;
    return descriptionElement;
}


function createImageElement(topic){
    const imgElement = document.createElement("img");
    imgElement.src = topic;
    return imgElement;
}


function iterateOverTopics(topics, container){
    topics.forEach((topic) => {
        const nameElement = createNameElement(topic.name);
        const descriptionElement = createDescriptionElement(topic.description);
        const imgElement = createImageElement(topic.cover_image);
        container.appendChild(nameElement);
        nameElement.appendChild(descriptionElement);
        nameElement.appendChild(imgElement);
    });
    return topics;
}

async function processUniversityInfo(topics){
    const generalInfoContainer = document.getElementById("generalInfo");
    const generalTopics = topics.slice(0, 4); // Slicing the first 4-topics as they seem to have a different semantic meaning from the rest. 
    iterateOverTopics(generalTopics, generalInfoContainer);
    return generalTopics;
} 

async function processDepartmentInfo(topics){
    const departInfoContainer = document.getElementById("departInfo");
    const departInfoTopics = topics.slice(4);
    iterateOverTopics(departInfoTopics, departInfoContainer);
    return departInfoTopics;
}


async function fetchData(){
    try {
        const response = await fetch("OpenDay.json");
        const data = await response.json();
        // console.log(data); Quick check if data has pulled through from JSON file. 
        await processUniversityInfo(data.topics);
        await processDepartmentInfo(data.topics);
        return data;
    } catch (error){
        console.log(error);
        console.error("Oops, there was an issue retrieving data from the JSON file.")
        return null;
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    fetchData();
});

const nameSearch = document.getElementById("nameSearch");
nameSearch.addEventListener("keyup", (e) =>{
    let currentValue = e.target.value;
    let nameValue = document.querySelectorAll(".departName");
    nameValue.forEach((name) => {
        if (name.textContent.includes(currentValue)){
            name.style.display ="block";
        } else{
            name.style.display = "none";
        }
    })
})