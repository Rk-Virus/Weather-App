// File: script.js
const getWeather = async function (city) {
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '634ae0c072msh70c3396f455a0b1p1794ffjsnc9d8e186b57a',
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        temperature.innerHTML = (Math.round((result.main.temp - 273.2)*10)/10) + "°C";
        weatherDesc.innerHTML = result.weather[0].main;
        cityLocation.innerHTML = result.name + ", " + result.sys.country;
        weatherIcon.src = "https://openweathermap.org/img/wn/" + result.weather[0].icon + "@4x.png";
        humidity.innerHTML = result.main.humidity + "%";
        wind.innerHTML = result.wind.speed + " Km/h";
        feelsLike.innerHTML = (Math.round((result.main.feels_like - 273.2)*10)/10) + "°C";
        pressure.innerHTML = result.main.pressure + " hPa";
        visibility.innerHTML = result.visibility / 1000 + " Km";
    } catch (error) {
        console.error(error);
    }
}


//search weather 
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const city = searchField.value;
    getWeather(city);
})


// on first load with default city
window.onload = getWeather("Delhi");