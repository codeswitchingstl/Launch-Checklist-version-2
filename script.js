// Write your JavaScript code here!
window.addEventListener("load", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
    let list = document.getElementById("faultyItems");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    // let status = document.getElementById("launchStatus");  
        event.preventDefault();
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);

    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       // check parameters with where function is declared
       addDestinationInfo(planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   });
   
});