// TO DO: 
// 1. [opcjonalnie] Pobieranie czasu i na podstawie tego zmiana dzien/noc - więcej teł 
// 2. [must do] podmienić zmienną na zmienną z API - weatherID zamiast weather i key_word_current
class Background {

    refresh({ weatherID }) {
        // tablica, którą ma zastąpić info z API
        let key_word = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 511, 520, 502, 503, 504, 521, 522, 531, 600, 601, 602, 611, 612, 615, 616, 620, 621, 622, 800, 801, 802, 803, 804];

        let key_word_current = weatherID;
        // let key_word_current = key_word[Math.floor(Math.random() * key_word.length)];
        let video = document.getElementById('video-background');
        let source = document.createElement('source');
        // wartość defaultowa zmiennej, która odpowiada za src wyświetlanego tła 
        let source_current;
        //losowanie z tablicy, jaki link będzie w src tła (deszcz/śnieg/słonce,etc.)
        switch (key_word_current) {
            case 800: // clear
                source_current = 'https://player.vimeo.com/external/206536398.hd.mp4?s=6890b433df51fc5e7456fea2d025268b316fd2c9&profile_id=119&oauth2_token_id=57447761&download=1'
                break;
            case 801:
            case 802:
            case 803:
            case 804: // cloudy
                source_current = 'https://player.vimeo.com/external/214473586.hd.mp4?s=5baf5b37e130a7b73cc8538fa2f77a39ff577ff3&profile_id=119&oauth2_token_id=57447761&download=1'
                break;
            case 500:// 501, 511, 520, 300, 301, 302, 310, 311, 312, 313, 314, 321: // rain
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
                source_current = 'https://player.vimeo.com/external/121353826.hd.mp4?s=ac8848d3e87178f63f4c66c39e9a4a6b4db21924&profile_id=119&oauth2_token_id=57447761&download=1'
                break;
            case 502, 503, 504, 521, 522, 531: // heavy rain
                {
                    source_current = 'https://player.vimeo.com/external/122626677.hd.mp4?s=2dded1e892724fadf077bb60862d9ccba65314e6&profile_id=113&oauth2_token_id=57447761&download=1'
                }
                break;
            case 600, 601, 602, 611, 612, 615, 616, 620, 621, 622: // snow
                {
                    source_current = 'https://player.vimeo.com/external/210744027.hd.mp4?s=3b213fa305d8ac5bd2b38a6663d7d50e3b006759&profile_id=119&oauth2_token_id=57447761&download=1'
                }
                break;
            case 200, 201, 202, 210, 211, 212, 221, 230, 231, 232:
                {
                    source_current = 'https://player.vimeo.com/external/291718076.hd.mp4?s=c45c1735a98e2e7b7f0cb67ebcae5393cf82003a&profile_id=175&oauth2_token_id=57447761&download=1'
                }
                break;
            default:
                {
                    source_current = 'https://player.vimeo.com/external/206536398.hd.mp4?s=6890b433df51fc5e7456fea2d025268b316fd2c9&profile_id=119&oauth2_token_id=57447761&download=1'
                }

        }
        // console.log(key_word_current);
        // nadaj atrybut src o wartości zmiennej source_current
        source.setAttribute('src', source_current);
        video.replaceChild(source, video.childNodes[0]);
        video.load();
        video.play();
        // console.log(source_current);
    }
}

export default Background;
