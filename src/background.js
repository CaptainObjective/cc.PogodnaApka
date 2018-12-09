// TO DO: 
// 2. replace w spotify

class Background {

    refresh({
        weatherID,
        sunset,
        sunrise
    }) {
        let key_word_current = weatherID; // pobieranie odpowiedniego weatherID z API określającego warunek pogodowy do zmiennej 

        let video = document.getElementById('video-background');
        let source = document.createElement('source');
        let source_current; // deklaracja zmiennej, która będzie podmieniać src tła 
        let d = new Date();
        let hour = d.getHours(); // pobranie godziny z systemu
        
        if (hour < sunset && hour > sunrise) // switch tla, jesli mamy dzien 
        //dzien
        {

            switch (key_word_current) {
                case 800: // clear
                    source_current = 'https://player.vimeo.com/external/214473752.hd.mp4?s=d1d8e4139ab340522a13c44701fcd5a0a593083b&profile_id=119&oauth2_token_id=57447761&download=1';
                    break;
                case 801: // cloudy
                case 802:
                case 803:
                case 804:
                    source_current = 'https://player.vimeo.com/external/214473586.hd.mp4?s=5baf5b37e130a7b73cc8538fa2f77a39ff577ff3&profile_id=119&oauth2_token_id=57447761&download=1';
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
                    source_current = 'https://player.vimeo.com/external/121353826.hd.mp4?s=ac8848d3e87178f63f4c66c39e9a4a6b4db21924&profile_id=119&oauth2_token_id=57447761&download=1';
                    break;
                case 502: // heavy rain
                case 503:
                case 504:
                case 521:
                case 522:
                case 531:

                    source_current = 'https://player.vimeo.com/external/122626677.hd.mp4?s=2dded1e892724fadf077bb60862d9ccba65314e6&profile_id=113&oauth2_token_id=57447761&download=1';
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

                    source_current = 'https://player.vimeo.com/external/210744027.hd.mp4?s=3b213fa305d8ac5bd2b38a6663d7d50e3b006759&profile_id=119&oauth2_token_id=57447761&download=1';

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

                    source_current = 'https://player.vimeo.com/external/291718076.hd.mp4?s=c45c1735a98e2e7b7f0cb67ebcae5393cf82003a&profile_id=175&oauth2_token_id=57447761&download=1';

                    break;
                default:
                    source_current = 'https://player.vimeo.com/external/288484037.hd.mp4?s=c8a840414fc4792144c9be81687413c31e663acb&profile_id=172&oauth2_token_id=57447761&download=1';

            }
        }
        //noc 
        else {
            switch (key_word_current) {
                case 800: // clear
                    source_current = 'https://player.vimeo.com/external/188556988.hd.mp4?s=106d9a5c0f8e447266a80368c25e2fb704479fdc&profile_id=174&oauth2_token_id=57447761&download=1';
                    break;
                case 801: // cloudy
                case 802:
                case 803:
                case 804:
                    source_current = 'https://player.vimeo.com/external/194101912.hd.mp4?s=cb67b5c9336541e8f25b8e7075681e26bdf6de44&profile_id=119&oauth2_token_id=57447761&download=1';
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
                    source_current = 'https://player.vimeo.com/external/205660397.hd.mp4?s=204c151f8023e564c122fcc80d6f02c07f27b37c&profile_id=119&oauth2_token_id=57447761&download=1';
                    break;
                case 502: // heavy rain
                case 503:
                case 504:
                case 521:
                case 522:
                case 531:

                    source_current = 'https://player.vimeo.com/external/205660397.hd.mp4?s=204c151f8023e564c122fcc80d6f02c07f27b37c&profile_id=119&oauth2_token_id=57447761&download=1';
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

                    source_current = 'https://player.vimeo.com/external/191381877.hd.mp4?s=d1f420d131fd7fdf6cfbe28e77b62da206afc90b&profile_id=119&oauth2_token_id=57447761&download=1';

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

                    source_current = 'https://player.vimeo.com/external/122626677.hd.mp4?s=2dded1e892724fadf077bb60862d9ccba65314e6&profile_id=113&oauth2_token_id=57447761&download=1';

                    break;
                default:
                    source_current = 'https://player.vimeo.com/external/188556988.hd.mp4?s=106d9a5c0f8e447266a80368c25e2fb704479fdc&profile_id=174&oauth2_token_id=57447761&download=1';

            }
        }

        source.setAttribute('src', source_current); // nadajemy atrybut src o wartości zmiennej source_current
        video.replaceChild(source, video.childNodes[0]);
        video.load();
        video.play();

    }
}

export default Background;