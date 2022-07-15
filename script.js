// Write your JavaScript code here!

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    let pilot = document.querySelector("input[name=pilotName");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel");
    let cargoMass = document.querySelector("input[name=cargoMass");

    //checks if any fields in form are empty and prompts user to fill all fields
    form.addEventListener("submit", function(event) {
        if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
        };
    event.preventDefault();
    
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
});