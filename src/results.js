let weatherIcon = document.getElementById("icon");
let mainbar = document.getElementById("mainbar");
let mainPressure = document.getElementById("mainPressure");
let mainHumidity = document.getElementById("mainHumidity");
let windSpeed = document.getElementById("windSpeed");
let windDeg = document.getElementById("windDeg");
let clouds = document.getElementById("clouds");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");

class Results {
    constructor() {
        console.log('Results')
    }
    refresh(weather) {

        let icon;
        switch (weather.weatherDescription) {
            case "clear sky":
                icon = "01d"
                break;
            case "fewclouds":
                icon = "02d"
                break;
            case "scattered clouds":
                icon = "03d"
                break;
            case "broken clouds":
                icon = "04d"
                break;
            case "shower rain":
                icon = "09d"
                break;
            case "rain":
                icon = "10d"
                break;
            case "thunderstorm":
                icon = "11d"
                break;
            case "snow":
                icon = "13d"
                break;
            case "mist":
                icon = "50d"
                break;
            case "haze":
                icon = "50d"
                break;
            default:
                icon = "01d"

        }
        console.log(icon);

        weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png` // zmienna

        //TODO: fcja sprawdzająca czy jest już po zachodzie ( w zależności )
        // "Od wschodu/zachodu minęło"  przed zachodem/po zachodzie
        // "Do zachodu/wschodu został"

        const currDate = new Date();
        let isAfterSunset = (currDate > weather.sunset);
        

        let degree = Math.round(weather.mainTemp); 
        mainbar.innerHTML = `${degree}&#8451  ${weather.cityName}`; //temp + miasto
        mainPressure.innerHTML = `Ciśnienie: ${weather.mainPressure} hPa`; //ciśnienie
        mainHumidity.innerHTML = `Wilgotność powietrza: ${weather.mainHumidity}%`; //wilgotność
        windSpeed.innerHTML = `Prędkość wiatru: ${weather.windSpeed} m/s`; //wiaterek
        windDeg.innerHTML = `Kierunek wiatru: ${weather.windDeg} deg`; //wiaterek kierunek
        clouds.innerHTML = `Zachmurzenie: ${weather.clouds}%`; //zachmurzenie
        sunrise.innerHTML = `Wschód słońca:   ${weather.sunrise.toLocaleTimeString()}`; //wschód słońca
        //todo: Od wschodu minęło / do wschodu zostało
        sunset.innerHTML = `Zachód słońca:  ${weather.sunset.toLocaleTimeString()}`; //zachód słońca
        //todo Do zachodu zostało / od zahodu minęło

    }
}

export default Results;