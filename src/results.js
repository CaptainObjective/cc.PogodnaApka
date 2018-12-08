
let icon = document.getElementById("icon");
let mainbar = document.getElementById("mainbar");
let mainPressure = document.getElementById("mainPressure");
let mainHumidity = document.getElementById("mainHumidity");
let windSpeed = document.getElementById("windSpeed");
let clouds = document.getElementById("clouds");
let rain1h = document.getElementById("rain1h");
let snow1h = document.getElementById("snow1h");

class Results {
    constructor() {
        console.log('Results loadedb nevovnfenvenvevno')
    }
    refresh(weather) {
        // TODO: Podmiana tego co siedzi w html w oparciu o właściwosci otrzymanego obiektu

        icon = `< i class = "${icon} icon" >< /i>`; // zmienna ma się ładnie podmieniać aby ładowała się stosowna ikona semantic
        mainbar.innerHTML = weather.mainTemp && weather.cityName; //odświeżenie temp + nazwy miasta
        mainPressure.innerHTML = weather.mainPressure + "hPa";
        mainHumidity.innerHTML = weather.mainHumidity + "%";
        windSpeed.innerHTML = weather.windSpeed + "km/h";
        clouds.innerHTML = weather.clouds + "%";
        rain1h.innerHTML = weather.rain1h + "%";
        snow1h.innerHTML = weather.snow1h + "%";
    }
}

export default Results;