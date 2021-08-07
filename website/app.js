/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
// my API from OpenWeatherMap.com
const APIkey = '566c9ff97bfc96be30227785b9abadb2';
// set full url from OpenWeatherMap.com
// get the generate button by id
const genButton = document.getElementById('generate');

genButton.addEventListener('click', () => {
    const zipCode = document.getElementById('zip').value;
    const urlZip = `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${APIkey}&units=imperial`;
    let res = fetch(urlZip);
    // test res
    console.log(res); 
});
