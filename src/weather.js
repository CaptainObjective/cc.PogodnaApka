import {
    display_response
} from './main'
class Weather {
    constructor() {
        console.log('Weather loaded')

        // TODO: na wzór tego utworzyć atrybuty które moga się przydać, w zalezności od tego co jest w API ofc
        this.cityName; // nazwa miasta - kiedy byśmy chcieli zwróć po wyszukaniu przez lon, lat na przykład
        this.countryCode; // kod kraju ie. GP,JP
        this.sunrise; // czas wschodu słońca
        this.sunset; // czas zachodu słońca

        this.mainTemp; // temperatura, K
        this.mainPressure; // ciśnienie stmosferyczne - nad poziomeme morze lub nad powierzchnią ziemi
        this.mainHumidity; // wilgotność powietrza, %
        this.mainTempMin; // minimalna temperatura w danym momencie - różnić się może od głównej temperatury dla dużych miast(opcjonalne)
        this.mainTempMax; // maksymalna temperatura w danym momencie - różnić się może od głównej temperatury dla dużych miast(opcjonalne)

        this.weatherID; // id danej pogody
        this.weatherMain; // grupa parametrow (Rain, Snow, Extreme)
        this.weatherDescription; // opis pogody in english
        this.weatherIcon; // 

        this.windSpeed; // prędkość wiatru,  m/s
        this.windDeg; // kierunek wiatru,  deg(meteorological)[whatever that is]

        this.clouds; // zachmurzenie , %

        this.lon; // szerokość geograficzna
        this.lat; // długość geogragiczna
    }

    getWeatherByCityName(cityName) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&&units=metric&APPID=86677a0c14bfe5ca97291ba315d620e6`;
        fetch(url).then(r => r.json()).then(data => {
            console.log(data)

            this.cityName = data.name;
            this.countryCode = data.sys.country;
            this.sunrise = data.sys.sunrise;
            this.sunset = data.sys.sunset;
            this.mainTemp = data.main.temp;
            this.mainPressure = data.main.pressure;
            this.mainHumidity = data.main.humidity;
            this.mainTempMin = data.temp_min;
            this.mainTempMax = data.temp_max;

            this.weatherID = data.weather[0].id;
            this.weatherMain = data.weather[0].main;
            this.weatherDescription = data.weather[0].description;
            this.weatherIcon = data.weather[0].icon;
            this.windSpeed = data.wind.speed;
            this.windDeg = data.wind.deg;

            this.clouds = data.clouds.all;

            this.lon = data.coord.lon;
            this.lat = data.coord.lat;
            display_response();
        });
    }

    getWeatherByCityID(cityID) {
        let url = `https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=86677a0c14bfe5ca97291ba315d620e6`;
        fetch(url).then(r => r.json).then(data => console.log(data));
    }

    getweatherByCoordinates(lat, lon) {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
        fetch(url).then(r => r.json).then(data => console.log(data));
    }

    query(city) {
        // TODO wykonanie zapytania do API i przypisania odpowiedzi do atrybutów
        // Na razie testowo w
        this.getWeatherByCityName(city);
        // this.getWeatherByCityID();
        // this.getWeatherByCityNameAjax();

    }
}

export default Weather;