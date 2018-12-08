import Results from "./results";

class Search {
    constructor() {
        console.log('Search loaded')
        this.city = "Wrocław";
        this.czyTip = false; // sprawdza czy w results jest już wyświetlone jakies info dla uzytkownika
    }

    // $('input').on('change', _ =>{
    //
    // });

    checkInput() {
        //TODO: uchwyt do inputa który sprawdzi aktualną wartość i przypisze do this.city
        let miasto = document.querySelector('input');
        if ((miasto.value).trim()) { // gdy wpisane miasto nie jest pustym stringiem to podstaw je pod this.city
            this.city = miasto.value;
            return true;
        }
    }

    refresh(temp, rain, snow, clouds) {
        // TODO: info dla użytkownika na podstawie pogody
        let tip;

        if (temp > 24) {
            if (rain == 0) {
                if (clouds < 0.2) {
                    tip = "Ciesz się upalnym i słonecznym dniem!";
                } else {
                    tip = "To będzie upalny dzień. Spodziewaj się jednak zachmurzeń.";
                }
                return tip;
            } else if (rain < 0.2) {
                tip = "To będzie upalny dzień. Spodziewaj się jednak niewielkich opadów deszczu.";
                return tip;
            } else {
                tip = "To będzie upalny dzień. Weź jednak ze sobą parasol."
                return tip;
            }

        } else if (temp <= 24 && temp >= 17) {
            if (rain == 0) {
                if (clouds < 0.2) {
                    tip = "Ciesz się ciepłym i słonecznym dniem!";
                } else {
                    tip = "To będzie ciepły dzień. Spodziewaj się jednak zachmurzeń.";
                }
                return tip;
            } else if (rain < 0.2) {
                tip = "To będzie ciepły dzień. Spodziewaj się jednak niewielkich opadów deszczu.";
                return tip;
            } else {
                tip = "To będzie ciepły dzień. Weź jednak ze sobą parasol."
                return tip;
            }
        } else if (temp < 17 && temp >= 10) {
            if (rain == 0) {
                if (clouds < 0.2) {
                    tip = "Przed tobą słoneczny i umiarkowanie ciepły dzień";
                } else {
                    tip = "Przed tobą umiarkowanie ciepły dzień. Spodziewaj się jednak zachmurzeń.";
                }
                return tip;
            } else if (rain < 0.2) {
                tip = "To będzie umiarkowanie ciepły dzień. Spodziewaj się jednak niewielkich opadów deszczu.";
                return tip;
            } else {
                tip = "To będzie umiarkowanie ciepły dzień. Weź jednak ze sobą parasol."
                return tip;
            }
        } else {
            if (rain == 0 && snow == 0) {
                if (clouds < 0.2) {
                    tip = "Ubierz się ciepło";
                } else {
                    tip = "To będzie chłodny i pochmurny dzień. Ubierz się ciepło.";
                }
                return tip;
            } else if ((rain < 0.2 && rain > 0) && (snow < 0.2 && snow > 0)) {
                tip = "Przed tobą chłodny dzień i niewielkie opady deszczu ze śniegiem. Ubierz się ciepło!";
                return tip;
            } else if (rain >= 0.2 && snow >= 0.2) {
                tip = "Przed tobą chłodny dzień i opadu deszczu ze śniegiem. Ubierz się ciepło i weź parasol!";
                return tip;
            } else {
                if (rain > snow) {
                    tip = "Przed tobą chłodny dzień i opady deszczu. Ubierz się ciepło i weź parasol!";
                } else {
                    tip = "Przed tobą chłodny dzień i opady śniegu. Ubierz się ciepło!";
                }
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
        let results = document.querySelector('#results');

        if (this.czyTip == false) {
            results.appendChild(finalTip); // dodanie naglowka do results
        } else {
            results.removeChild(results.children[2]); // usuniecie nieaktualnego naglowka
            results.appendChild(finalTip); // aktualizacja nagłowka
        }

        this.czyTip = true; // informuje, ze zaszło juz dodanie info do results
    }


    loading(isLoading) {

        if (isLoading) {
            let lupa = document.querySelector('#lupa');
            lupa.className = "ui small active loader"; //podmiana na lupy na ikonke loadera
            lupa.style.left = "90%";

            setTimeout(function () {
                lupa.className = "inverted circular search link icon"; // po 0.5s powrot do ikonki lupy
                lupa.style.left = "";
            }, 500)
        }
    }
}

export default Search;