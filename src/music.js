class Music {

    refresh({
        weatherID
    }) {

        let key_word_current = weatherID; // pobieranie odpowiedniego weatherID z API określającego warunek pogodowy do zmiennej

        let spotify = document.getElementById('spotify');
        let source = document.createElement('source');
        let source_current; // deklaracja zmiennej, która będzie podmieniać src tła 
        // switch src muzyki w zaleznosci od weatherID
        switch (key_word_current) {
            case 800: // clear
                source_current = 'https://open.spotify.com/embed/track/1PCovxh1enX1NPfaLt4YWG';
                break;
            case 801: // cloudy
            case 802:
            case 803:
            case 804:
                source_current = 'https://open.spotify.com/embed/track/3ww7sj1QovjTsGAjnHpiPU';
                break;
            case 500: // rain
            case 501:
            case 511:
            case 520:
            case 300:
            case 301:
            case 302:
            case 310:
            case 311:
            case 312:
            case 313:
            case 314:
            case 321:
                source_current = 'https://open.spotify.com/embed/track/113v1MA9MTShy98uCz37nO';
                break;
            case 502: // heavy rain
            case 503:
            case 504:
            case 521:
            case 522:
            case 531:

                source_current = 'https://open.spotify.com/embed/track/4rhcqdXTzNX9uZRZybj3UP';
                break;
            case 600: // snow
            case 601:
            case 602:
            case 611:
            case 612:
            case 615:
            case 616:
            case 620:
            case 621:
            case 622:

                source_current = 'https://open.spotify.com/embed/track/2IprIjGNRlj3TfqUWCAo0C';

                break;
            case 200: // thunder
            case 201:
            case 202:
            case 210:
            case 211:
            case 212:
            case 221:
            case 230:
            case 231:
            case 232:

                source_current = 'https://open.spotify.com/embed/track/3mr584ZFSkZrWja9kJAzlb';

                break;
            default:
                source_current = 'https://open.spotify.com/embed/track/1PCovxh1enX1NPfaLt4YWG';

        }

        spotify.setAttribute('src', source_current); // nadajemy atrybut src spotify o wartości zmiennej source_current
        spotify.appendChild(source); // Jednak inaczej to wygląda w przypadku Spotify należałoby stworzyć iframe nie src, do Poprawki (zmieniłem na appendChild tylko by nie generowalo błędu)

    }
}

export default Music;