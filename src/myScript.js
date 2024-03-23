function createNameElement(topic){
    const nameElement = document.createElement("div");
    nameElement.className = "departName";
    nameElement.textContent = topic;
    return nameElement;
}


function iterateOverTopics(topics, container){
    topics.forEach((topic) => {
        const nameElement = createNameElement(topic.name);
        container.appendChild(nameElement);
    });
    return topics;
}

async function processUniversityInfo(topics){
    const generalInfoContainer = document.getElementById("generalInfo");
    const generalTopics = topics.slice(0, 4); // Slicing the first 4-topics as they seem to have a different semantic meaning from the rest. 
    iterateOverTopics(generalTopics, generalInfoContainer);
    return generalTopics;
} 


async function fetchData(){
    try {
        const response = await fetch("OpenDay.json");
        const data = await response.json();
        // console.log(data); Quick check if data has pulled through from JSON file. 
        await processUniversityInfo(data.topics);
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