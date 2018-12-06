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

    getWeatherByCityName(cityName){
        let url = `https://www.api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=86677a0c14bfe5ca97291ba315d620e6`;
        fetch(url).then(r => r.json).then(data => console.log(data));
    }

    getWeatherByCityNameAjax(){
        //przykładowe zamyptanie porownawcze z AJAXA dla London,uk    ...nie działa:(
        $.ajax({
            method: 'GET',
            url: `https://www.api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=86677a0c14bfe5ca97291ba315d620e6`,
            dataType: 'json',
        }).done(r => {
            console.log(r);
        }).fail( error => {
            console.log(error);
        });
    }

    getweatherByCoordinates(lat,lon){
        let url = `https://www.api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
        fetch(url).then(r => r.json).then(data => console.log(data));
    }

    query() {
        // TODO wykonanie zapytania do API i przypisania odpowiedzi do atrybutów
        // Na razie testowo w
        // this.getWeatherByCityName('London');
        this.getWeatherByCityNameAjax();

    }
}

export default Weather;