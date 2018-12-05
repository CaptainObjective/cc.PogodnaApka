import { get } from "https";

class Weather {
    constructor() {
        console.log('Weather loaded')

        // TODO: na wzór tego utworzyć atrybuty które moga się przydać, w zalezności od tego co jest w API ofc
        this.temp;      // temperatura, do wyboru jednostki Kelvin(domoślna), Celsiusza, Farenheita
        this.condition; // grupa parametrow (Rain, Snow, Extreme)
        this.windspeed; // prędkość wiatry
        this.windDeg;   // kierunek wiatru
        this.rain;      // wielkosc opadow dla ostatnich 1 - 3 h
        this.clouds;    // 
        this.snow;      // wielkosc opadow sniegu dla ostatnich 1 - 3 h 
        this.id;        // id miasta ( do nastepnego wyszukania np. po id)
        this.name;      // nazwa miasta
        this.cod;       
    }

    getweatherByCityName(cityName){
        let url = `api.openweathermap.org/data/2.5/weather?q=${cityName}`;
        fetch(url).then(r => r.json).then(data => console.log(data));
    }

    getweatherByCoordinates(lat,lon){
        let url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
        fetch(url).then(r => r.json).then(data => console.log(data));
    }

    query() {
        // TODO wykonanie zapytania do API i przypisania odpowiedzi do atrybutów
        // Na razie testowo w
        this.getweatherByCityName('London');

    }
}

export default Weather;