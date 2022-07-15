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

    // pilot status
    if (validateInput(pilot.value) === "Not a Number") {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`;
    } else if (validateInput(pilot.value) === "Is a Number") {
        alert("Pilot name cannot contain a number. Please try again.");
        return;
    }

    // copilot status
    if (validateInput(copilot.value) === "Not a Number") {
        list.style.visibility = "visible";
        copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch.`;
    } else if (validateInput(copilot.value) === "Is a Number") {
        alert("Copilot name cannot contain a number. Please try again.");
        return;
    }

    // checks fuel level and updates status list
    if (fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch.";
        status.innerHTML = "Shuttle not ready for launch.";
        status.style.color = "red";
    } else if (validateInput(fuelLevel.value) === "Not a Number") {
        alert("Invalid fuel level. Please try again.");
    } else {
        list.style.visibility = "visible";
    }

    // checks cargo mass level and updates list
    if (cargoMass.value > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too high for launch.";
        status.innerHTML = "Shuttle not ready for launch.";
        status.style.color = "red";
    } else if (validateInput(cargoMass.value) === "Not a Number") {
        alert("Invalid cargo mass. Please try again.")
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
