// import your packages here
import { fetchData, postData } from "./modules/DataMiner.js";

(() => {
    // this receives the data payload from our AJAX request, parses it (turns the returned JSON object back into a plain JavaScript object) and renders the data to our view (the markup in index.html)
    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        // loop through the JavaScript object and for each user, make a copy of the user template we find at the bottom of index.html, populate it with the user's data, and put that fresh copy in the users section in index.html

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = `images/${data[user].avatar}.jpg`;
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].role;
            currentUserText[4].textContent = data[user].nickname;

            // add this new user to the view
            userSection.appendChild(currentUser);
        }

        console.log(data);
    }

    fetchData("../DataSet.json").then(data => handleDataSet(data)).catch(err => { console.log(err); });

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
    
    }

    buttons.forEach(button => button.addEventListener("click", changeDisplay));
    

    // fetching the database 
    fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => {console.log(err)});
})();