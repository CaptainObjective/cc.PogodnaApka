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
    refresh_city();
}

window.addEventListener('load', loaded);
document.getElementById('loupe').addEventListener('click', refresh_city);
document.getElementById('search').addEventListener('keypress', (e) => e.key == 'Enter' && refresh_city());

window.addEventListener('keypressed', refresh_city);

export { display_response };

