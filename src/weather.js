import {
    display_response
} from './main'
class Weather {
    constructor() {
        console.log('Weather loaded')

        // TODO: na wzór tego utworzyć atrybuty które moga się przydać, w zalezności od tego co jest w API ofc

        // ------------------------------------------ CURRENT WEATHER DATA -----------------------------------------

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


         // ------------------------------------------ 5 DAYS FORECAST -----------------------------------------

        /**
         * The 2 dim array type [[]] var contains 5 days weather forecast(3hrs weather snapshots), spltted by days
         * UNIT VALUES AS IN CURRENT WEATHER SECTION
         * 
         * i.e Weather.day[0] returns
         * clouds: {
             all: 88        
         }
         dt: 1544637600
         dt_txt: "2018-12-12 18:00:00"
         main:
             grnd_level: 1016.24
         humidity: 98
         pressure: 1016.24
         sea_level: 1037.73
         temp: -0.93
         temp_kf: -1.31
         temp_max: 0.38
         temp_min: -0.93
         snow: {
             3 h: 0.105
         }
         sys: {
             pod: "n"
         }
         weather: Array(1)
         0: {
             id: 600,
             main: "Snow",
             description: "słabe opady śniegu",
             icon: "13n"
         }
         length: 1
         wind: {
             speed: 2.57,
             deg: 1.50299
         }
         }
         *
         */
         this.day; // day[[0],[1],[2] ... [5]] ===> day[ [today] , [today+1], [today + 2] ... [today + 5]] 


        
    }

    getWeatherByCityName(cityName) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&&units=metric&lang=pl&&APPID=86677a0c14bfe5ca97291ba315d620e6`;
        fetch(url).then(r => r.json()).then(data => {

            console.log(data);
            this.cityName = data.name;
            this.countryCode = data.sys.country;

            this.sunrise = new Date(data.sys.sunrise * 1000);
            this.sunset = new Date(data.sys.sunset * 1000);

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


    query(city) {
        this.getWeatherByCityName(city);
        this.getWeatherForecast(city);

    }

    getWeatherByCityID(cityID) {
        let url = `https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=86677a0c14bfe5ca97291ba315d620e6`;
        fetch(url).then(r => r.json).then(data => console.log(data));
    }


    getweatherByCoordinates(lat, lon) {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
        fetch(url).then(r => r.json).then(data => console.log(data));
    }


    // Returnes weather forecast for 5 days(3hrs interval) for given city
    getWeatherForecast(cityName) {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=pl&units=metric&APPID=86677a0c14bfe5ca97291ba315d620e6`;
        fetch(url).then(r => r.json()).then(data => {
         
            // initialize 2dim array where we put weather data spread for days
            let day = [[]];
            let i = 0;

            // take out weather data and sort it into the 2dim array depend of day ( 3hr interval info || 00:00:00, 03:00:00 ... 21:00:00 )
            data.list.forEach( (hourlyInfo, index, list) => {
                
                day[i].push(hourlyInfo);

                if("21:00:00" === hourlyInfo.dt_txt.slice(-8) && index !== list.length-1){
                    i++;
                    day.push(new Array());
                } 
            })

            this.day = day;
        });
    }

    // sunrise(sunriseTime) {
    //     let now = new Date();
    //     this.sunrise = new Date(sunriseTime * 1000);
    //     // this.fromSunrise = Date(now - this.sunrise).toLocaleTimeString();

    // }

    // sunset(sunsetTime) {
    //     let now = new Date();
    //     this.sunset = new Date(sunsetTime * 1000);
    //     // this.toSunSet = Date(sunset - now).toLocaleTimeString();
    // }

}

export default Weather;