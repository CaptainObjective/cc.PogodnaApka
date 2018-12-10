import Results from "./results";

class Search {
    constructor() {
        console.log('Search loaded')
        this.city = "Wrocław";
        this.czyTip = false; // sprawdza czy w results jest już wyświetlone jakies info dla uzytkownika
    }

    checkInput() {
        //TODO: uchwyt do inputa który sprawdzi aktualną wartość i przypisze do this.city
        let miasto = document.querySelector('input');
        if ((miasto.value).trim()) { // gdy wpisane miasto nie jest pustym stringiem to podstaw je pod this.city
            this.city = miasto.value;
            console.log(this.city);
            return true;
        }
    }

    refresh(weather) {
        // TODO: info dla użytkownika na podstawie pogody
        let tip;

        console.log(weather.cityName, weather.mainTemp, weather.clouds);
        if (weather.mainTemp > 24) {
            if (weather.clouds < 20) {
                tip = "Ciesz się upalnym i słonecznym dniem!";
                return tip;
            }
            else if(weather.clouds>=20 && weather.clouds <= 50) {
                tip = "To będzie upalny dzień. Spodziewaj się jednak zachmurzeń.";
                return tip;
            }
            else{
                tip="To będzie upalny dzień. Spodziewaj się jednak dużego zachmurzenia."
                return tip;
            }
        }

        else if (weather.mainTemp <= 24 && weather.mainTemp >= 17) {
            if (weather.clouds < 20) {
                tip = "Ciesz się ciepłym i słonecznym dniem!";
                return tip;
            }
            else if(weather.clouds >=20 && weather.clouds <=50) {
                tip = "To będzie ciepły dzień. Spodziewaj się jednak zachmurzeń.";
                return tip;
            }
            else{
                tip = "To będzie ciepły dzień. Spodziewaj się jednak dużego zachmurzenia."
                return tip;
            }
        }

        else if (weather.mainTemp < 17 && weather.mainTemp >= 10) {
            if (weather.clouds < 20) {
                tip = "Przed tobą słoneczny i umiarkowanie ciepły dzień.";
                return tip;
            }
            else if(weather.clouds>=20 && weather.clouds<=50){
                tip = "Przed tobą umiarkowanie ciepły dzień. Spodziewaj się jednak zachmurzeń.";
                return tip;
            }
            else{
                tip = "Przed tobą umiarkowanie ciepły dzień. Spodziewaj się jednak dużego zachmurzenia."
                return tip;
            }
        }

        else {
            if (weather.clouds < 20) {
                tip = "Przed tobą chłodny dzień. Ubierz się ciepło.";
                return tip;
            }
            else if(weather.clouds>=20 && weather.clouds <=50) {
                tip = "To będzie chłodny i pochmurny dzień. Ubierz się ciepło.";
                return tip;
            }
            else{
                tip = "Przed tobą chłodny i bardzo pochmurny dzień. Ubierz się ciepło.";
                return tip;
            }
        }
    }

    showTip(tip) {
        // dodaje info dla uzytkownika do results

        let finalTip;
        let text;
        finalTip = document.createElement("H4"); // stworzenie naglowka
        text = document.createTextNode(tip);
        finalTip.appendChild(text); // dodanie info(tekstu) do naglowka
        let tipresult = document.querySelector('#tipresult');

        if (this.czyTip == false) {
            tipresult.appendChild(finalTip); // dodanie naglowka do results
        }

        else {
            tipresult.removeChild(tipresult.children[0]); // usuniecie nieaktualnego naglowka
            tipresult.appendChild(finalTip); // aktualizacja nagłowka
        }

        this.czyTip = true; // informuje, ze zaszło juz dodanie info do results
    }


    loading(){

        let lupa = document.querySelector('#loupe');
        lupa.className = "ui tiny active loader"; //podmiana na lupy na ikonke loadera
        lupa.style.left = "97%";

        setTimeout(function () {
            lupa.className = "search icon"; // po 0.5s powrot do ikonki lupy
            lupa.style.left = "";
        }, 500)
    }
}

export default Search;