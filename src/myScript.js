// These three creation methods will create the required elements for each iteration of the JSON file, to automate creation of HTML content. 
// Aiming to improve the modularity of the code-base and readability.

function createNameElement(topic){
    const nameElement = document.createElement("div");
    nameElement.className = "departName";
    nameElement.textContent = topic;
    return nameElement;
}

function createDescriptionElement(topic){
    const descriptionElement = document.createElement("p");
    descriptionElement.hidden = true; // Used to hide the element, as web-page looked over populated on intial load. 
    descriptionElement.textContent = topic;
    descriptionElement.classList = 'hiddenClass' // Class to associate hidden elements with.
    return descriptionElement;
}


function createImageElement(topic){
    const imgElement = document.createElement("img");
    imgElement.src = topic;
    imgElement.hidden = true; 
    imgElement.style.width = '600px';
    imgElement.style.height = '300px';
    imgElement.classList = 'hiddenClass'
    return imgElement;
}


// Method for iterating over the topics inside the JSON file, to improve modularity and code readability by reducing repitition. 

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


// These two functions will process two independent pieces of data, the first 4 topics and the rest. 
// When initially looking over the JSON object, they appeared to have differing semantic meanings so I wished to split them up individually.
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

// Uses the data from the JSON file, uses it as an argument for the two 'process' methods to dynamically display required JSON data.
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

// Once DOM loaded, call fetch function. 
document.addEventListener("DOMContentLoaded", (event) => {
    fetchData();
});

// Searching for a name value, as it's an easy metric for the user to search for. 
// To do: Lowercase check
// To do: Apply hidden values. 
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