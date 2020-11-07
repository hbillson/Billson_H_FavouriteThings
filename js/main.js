// import your packages here
import { fetchData, postData } from "./modules/DataMiner.js";

(() => {

    let buttons = document.querySelectorAll(".button");
    let backButton = document.querySelector(".back");
    let nextButton = document.querySelector(".next");
    let dataArray = [];
    let thingSection = document.querySelector('.favthings_section'),
    thingTemplate = document.querySelector('#favthings_template').content;

    debugger;

    // stub * just a place for non-component-specific stuff    
    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function handleDataSet(data) {
        for (let thing in data) {
            let currentThing = thingTemplate.cloneNode(true),
                currentThingText = currentThing.querySelector('.favthing').children;

            currentThingText[0].textContent = data[thing].Name; 
            currentThingText[1].src = data[thing].Image_URL;
            currentThingText[2].textContent = data[thing].Description;
      
            dataArray.push(currentThing);
        }
        init();
    }

    function init() {
        let initialData = dataArray[0].cloneNode(true);
        thingSection.appendChild(initialData);
    }

    function changeDisplay(event) {
        debugger;
        var index = Array.from(buttons).indexOf(this);
        let currentContainer = thingSection.firstElementChild;
        let newData = dataArray[index].cloneNode(true);
        thingSection.replaceChild(newData, currentContainer);

    buttons.forEach(button => button.addEventListener("click", changeDisplay));

    // fetching the database 
    fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => {console.log(err)});
})();