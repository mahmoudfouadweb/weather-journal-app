/* Global Variables */

// Personal API Key for OpenWeatherMap API
const apiKey = "566c9ff97bfc96be30227785b9abadb2";
// get the generate button by id
const genButton = document.getElementById("generate");
// full server location
const server = "http://localhost:8000/";
// current date
const dateId = document.getElementById("date");
// api temp
const tempId = document.getElementById("temp");
// user feeling
const contentId = document.getElementById("content");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

/* Function called by event listener after click */
const zippy = async () => {
  const zipCode = document.getElementById("zip").value;
  const content = document.getElementById("feelings").value;
  // Function to GET Web API Data
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`
  );
  // convert data to json
  const data = await res.json();
  const temp = data.main.temp;
  // function to post data
  await fetch(`${server}weather`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: newDate,
      temp: temp,
      content: content,
    }),
  });
  // function to GET project data to front-end
  const serverCall = await fetch(`${server}data`, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // convert data to json
  const end = await serverCall.json();

  console.log("serverCall", end);
  // updating UI by imported server data to html
  async function updateUI() {
    const response = await fetch(`${server}data`);
    try {
      response.json().then((data) => {
        dateId.innerHTML = `date : ${data.date}`;
        tempId.innerHTML = `temp : ${data.temp}`;
        contentId.innerHTML = `feeling : ${data.content}`;
      });
    } catch (error) {
      console.log(error);
    }
  }
  // call the function
  updateUI();
};
// Event listener to add function to existing HTML DOM element
genButton.addEventListener("click", zippy);
