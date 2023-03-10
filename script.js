

// HOLDS THE INFORMATION FOR THE API KEY AND HOST
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '647d198430mshadc1e5f70dbdd11p150f7djsn7b636b157f5b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

let input;
// ADDING EVENT LISTENER TO BUTTON CLICK
document.getElementById("inputBtn").addEventListener('click', () => getWeather());
const textbox = document.getElementById('searchInput');

textbox.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        if (document.getElementById('searchInput').value === "") {

        } else {
            inputBtn.click()
            console.log('Enter key pressed!');
        }
    }
});


// BELOW WILL GET THE CURRENT TIME AND FORMAT IT TO THE TIME SO IT DOESN'T SHOW SECONDS
let time = new Date();
const option = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
};

const timeString = time.toLocaleTimeString([], option);


// VARIABLES TO HOLD THE DATA FROM THE API AND SEARCH FIELD
let currentTemp, currentHumidity, windSpeed, windDirection, cityName, stateName, condition, iconSrc;
// FETCH FUNTION TO GET INFO FOR THE LOCATION FROM THE API AND FUNCTION THAT ONCLICK CALLS TO START THE SEARCH
function getWeather() {
    const element = document.getElementById('appData');
    element.innerHTML = "";
    input = document.getElementById("searchInput").value;
    console.log("this ran")
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${input}`, options)
        .then(response => response.json())
        .then(function (response) {
            console.log(response);
            currentTemp = response.current.temp_f;
            console.log(currentTemp)
            console.log(response.current.temp_f)
            console.log(response)
            currentHumidity = response.current.humidity;
            windDirection = response.current.wind_dir;
            windSpeed = response.current.wind_mph;
            cityName = response.location.name;
            stateName = response.location.region;
            condition = response.current.condition.text;
            iconSrc = response.current.condition.icon;
            displayWeather();
        }).then()
        .catch(err => console.error(err));



}

// FUNTION TO DRAW OUT THE WEATHER DATA RETURNED BY THE API
function displayWeather() {
    document.getElementById('appData')

    $('#appData').prepend(
        `
        <div class="row justify-content-center">
           
    <div class = "bg-dark text-light border border-dark border-1 shadow text-center vh-100">
    <h2>Current Weather for ${cityName}, ${stateName}</h2>
    <img src="${iconSrc}" class="img-thumbnail border border-1 shadow">
    <h6 class="lead">${time.toLocaleTimeString()}</h6>
    <h6 class="lead">Current Conditions ${condition}</h6>
    <h6 class="lead">Temp ${currentTemp}ºF</h6>
    <h6 class="lead">Humidity ${currentHumidity}%</h6>
    <h6 class="lead">Wind "${windDirection}" at ${windSpeed}mph</h6>
    </div>
    


    `   )
}