import Background from './background';
import Results from './results';
import Search from './search';
import Weather from './weather';

console.log('main.js loaded');

const background = new Background;
const results = new Results;
const search = new Search;
const weather = new Weather;

const refresh_city = () => {

    search.checkInput();
    weather.query(search.city);
    background.refresh(weather);
    results.refresh(weather);
    search.refresh(weather);
    // TODO: Jak bartek zrobi to trzeba będzie obsłużyć loadery
}

const loaded = (e) => {
    // Co ma się zadziać na stronie po załadowaniu
    // TODO: Pobranie lokalizacji i wywowałanie funkcji
    refresh_city();

    //Listener na inpucie sprawdzający cały czas wpisany value i wyszukujący - podpowiadający pierwsze 5 - 10 miast ułożone w kolejnośći alfabetycznej
    $('input').on('change', e =>{

        console.log(e.currentTarget);

        fetch("../db/city.list.json")
                        .then( r => r.json() )
                        .then( cityList => clityList.filter( city => city.name))
    });
}

window.addEventListener('load', loaded);

window.addEventListener('keyup', e => { // keyup - chcemy, zeby tylko raz nam złapał enter
     e = e || window.event;

     if(e.keydown == '13'){
         refresh_city();
     }
}); // Trzeba to zrobić tak żeby działał tylko na enter, wskazówka jest w tetrisie :D