// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(testInput)) {
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let status = document.getElementById("launchStatus");
    let list = document.getElementById("faultyItems"); 

    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`;
    copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch.`;

    // validating that pilot and copilot are strings; cargo and fuel are numbers
    if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All fields are required!");
    } else if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number") {
        alert("Name cannot contain number. Please try again.");
    } else if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number") {
        alert("Must contain numbers only. Please try again.");
    }

    // checks fuel level and updates status list
    if (fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch.";
        status.innerHTML = "Shuttle not ready for launch.";
        status.style.color = "red";
    } else {
        list.style.visibility = "visible";
    }

    // checks cargo mass level and updates list
    if (cargoLevel.value > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too high for launch.";
        status.innerHTML = "Shuttle not ready for launch.";
        status.style.color = "red";
    } else {
        list.style.visibility = "visible";
    }

    // executes if shuttle is ready for launch
    if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
        list.style.visibility = "visible";
        status.innerHTML = "Shuttle is ready for launch.";
        status.style.color = "green";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
