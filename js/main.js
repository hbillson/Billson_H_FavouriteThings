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
           // currentThingText[3].textContent = data[thing].MP3_URLS;

        /*    let songURLS = data[thing].MP3_URLS.split(',');
            let playerSRC = document.querySelectorAll(".msource");
            let players = document.querySelectorAll(".player");
            console.log(playerSRC);
            console.log(players);

            if (data[thing].MP3_URLS) {
                currentThingText[3].classList.remove("hidden");
                currentThingText[3].classList.add("showing");

                if(currentThingText[3].classList.contains("showing")) {
                        for (var i = 0; i < songURLS.length; i++) {
                           // console.log(playerSRC[i]);
                            let thisSong = playerSRC[i];
                            thisSong.src = songURLS[i];
                          }
                }
             
            }  */
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
        //thingSection.appendChild(dataArray[index]);

       // let newData =  thingSection.replaceChild(dataArray[index], currentData);
      //  if (!thingSection.children.length == 0) {
    //        thingSection.replaceChild(dataArray[index], currentData);
      //  } else {
       //     thingSection.appendChild(dataArray[index]);
      //  }
    }
    // functions to control the display 

   /* function backClicked() {
        console.log("clicked the back button!", "\n");
    }

    function nextClicked() {
        console.log("clicked the next button!", "\n");
    }*/

    buttons.forEach(button => button.addEventListener("click", changeDisplay));

    // fetching the database 
    fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => {console.log(err)});
})();