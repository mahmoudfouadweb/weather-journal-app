/* Global Variables */

// Personal API Key for OpenWeatherMap API
const apiKey = "566c9ff97bfc96be30227785b9abadb2";
// get the generate button by id
const genButton = document.getElementById('generate');
// 
const server = 'http://localhost:8000';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

/* Function called by event listener */
const zippy = async () => {
    const zipCode = document.getElementById('zip').value;
        // Function to GET Web API Data
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`);
        // convert data to json
        const data = await res.json();
        const temp = data.main.temp;
        console.log(data);

        await fetch('/weather', {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: newDate,
                temp: temp,
                feelings: feelings
            })
        });
}
// Event listener to add function to existing HTML DOM element
genButton.addEventListener('click', zippy);

/* Function to POST data */
// app.post( '',(res,req) => {

// });

/* Function to GET Project Data */
// app.get( '',(res,req) => {

// });
