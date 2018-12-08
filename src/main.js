import Background from './background';
import Results from './results';
import Search from './search';
import Weather from './weather';
import Music from './music';

console.log('main.js loaded');

const background = new Background;
const results = new Results;
const search = new Search;
const weather = new Weather;
const music = new Music;

const refresh_city = () => {

    search.checkInput();
    weather.query();
    background.refresh(weather);
    results.refresh(weather);
    search.refresh(weather);
    music.refresh (weather); 
    // TODO: Jak bartek zrobi to trzeba będzie obsłużyć loadery
}

const loaded = (e) => {
    // Co ma się zadziać na stronie po załadowaniu
    // TODO: Pobranie lokalizacji i wywowałanie funkcji
    refresh_city();
}

window.addEventListener('load', loaded);
window.addEventListener('keypressed', refresh_city); // Trzeba to zrobić tak żeby działał tylko na enter, wskazówka jest w tetrisie :D