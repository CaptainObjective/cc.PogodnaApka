
let weatherIcon = document.getElementById("icon");
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
        // weather.cityName = "Wroclaw";
        // weather.mainTemp = 100;
        // weather.mainPressure = 1000;
        // weather.mainHumidity = 2;
        // weather.windSpeed = 56;
        // weather.clouds = 2;
        // weather.rain1h = 33;
        // weather.snow1h = 33;
        // weather.weatherIcon = "snowflake";

        // const icon = [sun, snow, rain, cloud]; //sprawdzić nazwy ikon w API

        // switch(weather.weatherIcon){
        //     case sun:
        //         weather.weatherIcon = "sun"
        //     break;
        //     case snow:
        //         weather.weatherIcon = "snowflake"
        //      break;
        //      case rain:
        //          weather.weatherIcon = "umbrella"
        //      break;
        //      case cloud:
        //          weather.weatherIcon = "cloud"
        //          break;
        // }

        weatherIcon = `< i class = "${weather.weatherIcon} icon" >< /i>`; // zmienna ma się ładnie podmieniać aby ładowała się stosowna ikona semantic
        mainbar.innerHTML = `${weather.mainTemp}&#8451  ${weather.cityName}`; //temp + miasto
        mainPressure.innerHTML = `Ciśnienie: ${weather.mainPressure} hPa`; //ciśnienie
        mainHumidity.innerHTML = `Wilgotność powietrza: ${weather.mainHumidity}%`; //wilgotność
        windSpeed.innerHTML = `Prędkość wiatru: ${weather.windSpeed} m/s`; //wiaterek
        clouds.innerHTML = `Zachmurzenie: ${weather.clouds}%`; //zachmurzenie
        rain1h.innerHTML = `Opady deszczu w przeciągu 1h: ${weather.rain1h}%`; //deszcz 1h
        snow1h.innerHTML = `Opady śniegu w przeciągu 1h: ${weather.snow1h}%`; //śnieg 1h





    }
}

export default Results;