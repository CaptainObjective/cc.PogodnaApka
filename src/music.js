class Music {

    refresh(weather) {
        let key_word = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 511, 520, 502, 503, 504, 521, 522, 531, 600, 601, 602, 611, 612, 615, 616, 620, 621, 622, 800, 801, 802, 803, 804];

        let key_word_current = key_word[Math.floor(Math.random() * key_word.length)];

        let spotify = document.getElementById('spotify');
        let source = document.createElement('source');
        let source_current;

        switch (key_word_current) {
            case 800: // clear
                {
                    source_current = 'https://open.spotify.com/embed/track/1PCovxh1enX1NPfaLt4YWG';
                }
                break;
            case 801, 802, 803, 804: // cloudy
                {
                    source_current = 'https://open.spotify.com/embed/track/3mr584ZFSkZrWja9kJAzlb'
                }
                break;
            case 500, 501, 511, 520, 300, 301, 302, 310, 311, 312, 313, 314, 321: // rainy
                {
                    source_current = 'https://open.spotify.com/embed/track/113v1MA9MTShy98uCz37nO'
                }
                break;
            case 502, 503, 504, 521, 522, 531: // heavy rain
                {
                    source_current = 'https://open.spotify.com/embed/track/4rhcqdXTzNX9uZRZybj3UP'
                }
                break;
            case 600, 601, 602, 611, 612, 615, 616, 620, 621, 622: // snow
                {
                    source_current = 'https://open.spotify.com/embed/track/2IprIjGNRlj3TfqUWCAo0C'
                }
                break;
            case 200, 201, 202, 210, 211, 212, 221, 230, 231, 232: // thunder 
                {
                    source_current = 'https://open.spotify.com/embed/track/3mr584ZFSkZrWja9kJAzlb'
                }
                break;
            default:
                {
                    source_current = 'https://open.spotify.com/embed/track/1PCovxh1enX1NPfaLt4YWG';
                }

        }

        // nadaj atrybut src o wartości zmiennej source_current
        spotify.setAttribute('src', source_current);
        spotify.appendChild(source);

        // console.log(source_current);

    }
}

export default Music;