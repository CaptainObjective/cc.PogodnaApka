import Background from './background';
import Music from './music';
import Results from './results';
import Weather from './weather';
import Search from './search';

console.log('main.js loaded');
const background = new Background;
const results = new Results;
const search = new Search;
const weather = new Weather;
const music = new Music;

// let content = fetch("db/city.list.json")
// .then( r => r.json)
// .then( cityList => cityList.map(city => {
//     {name: city.name}
// }))
// .then( result => console.log(result));


// ROZPAKOWYWANIE JSONA do Tablicy tylko z nazwami miast - do wyszukiwania / podpowiadania w searchu

// let content = $.getJSON("city.list.json", data => {
//     data.map( city => {
//         return {name: city.name}
//     })
// });

let content = content = [{
        title: 'Andorra'
    },
    {
        title: 'United Arab Emirates'
    },
    {
        title: 'Afghanistan'
    },
    {
        title: 'Antigua'
    },
    {
        title: 'Anguilla'
    },
    {
        title: 'Albania'
    },
    {
        title: 'Armenia'
    },
    {
        title: 'Netherlands Antilles'
    },
    {
        title: 'Angola'
    },
    {
        title: 'Argentina'
    },
    {
        title: 'American Samoa'
    },
    {
        title: 'Austria'
    },
    {
        title: 'Australia'
    },
    {
        title: 'Aruba'
    },
    {
        title: 'Aland Islands'
    },
    {
        title: 'Azerbaijan'
    },
    {
        title: 'Bosnia'
    },
    {
        title: 'Barbados'
    },
    {
        title: 'Bangladesh'
    },
    {
        title: 'Belgium'
    },
    {
        title: 'Burkina Faso'
    },
    {
        title: 'Bulgaria'
    },
    {
        title: 'Bahrain'
    },
    {
        title: 'Burundi'
    }
];

const refresh_city = () => {

    console.log('They see me rolling I am Searching')
    search.checkInput();
    weather.query(search.city);

}

const display_response = () => {
    results.refresh(weather);
    console.log(weather);
    background.refresh(weather);
    // search.showTip(search.refresh(weather.mainTemp, weather.mainHumidity, data.clouds.all));
    music.refresh(weather);
    // TODO: Jak bartek zrobi to trzeba będzie obsłużyć loadery
}

const loaded = (e) => {
    // Co ma się zadziać na stronie po załadowaniu
    // TODO: Pobranie lokalizacji i wywowałanie funkcji
    // if (navigator.geolocation) {
    //     // navigator.geolocation.getCurrentPosition();
    //     // console.log(navigator);
    //     console.log(navigator.geolocation.getCurrentPosition((p) => p)); // <--Tu jest problem 
    //     refresh_city();
    // }
    // else {
    //     console.log("Geolocation is not allowed");
    //     refresh_city();
    // }
    $('.input')
        .transition({
            animation: 'swing down in',
            duration: '3s',
        });

    refresh_city();
    console.log(content);
    $('.ui.search').search({
        source: content
    });

}

window.addEventListener('load', loaded);
document.getElementById('loupe').addEventListener('click', refresh_city);
document.getElementById('search').addEventListener('keypress', (e) => e.key == 'Enter' && refresh_city());

window.addEventListener('keypressed', refresh_city);

export {
    display_response
};