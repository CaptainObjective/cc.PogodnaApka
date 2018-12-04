let key_word = [1, 2, 3, 4, 5, 6, 7, 8];
let key_word_current = key_word[Math.floor(Math.random() * key_word.length)];
console.log(key_word_current);
let video = document.getElementById('video-background');
let source = document.createElement('source');
let source_current = 'https://player.vimeo.com/external/206536398.hd.mp4?s=6890b433df51fc5e7456fea2d025268b316fd2c9&profile_id=119&oauth2_token_id=57447761&download=1';

switch (key_word_current) {
    case 1:
        {

        }
        break;
    case 2:
        {
            source_current = 'https://player.vimeo.com/external/214473586.hd.mp4?s=5baf5b37e130a7b73cc8538fa2f77a39ff577ff3&profile_id=119&oauth2_token_id=57447761&download=1'
        }
        break;
    case 3:
        {
            source_current = 'https://player.vimeo.com/external/121353826.hd.mp4?s=ac8848d3e87178f63f4c66c39e9a4a6b4db21924&profile_id=119&oauth2_token_id=57447761&download=1'
        }
        break;
    case 4:
        {
            source_current = 'https://player.vimeo.com/external/286339861.hd.mp4?s=2779700ff2c2ec142daae7c9209134365f3befe8&profile_id=175&oauth2_token_id=57447761&download=1'
        }
        break;
    case 5:
        {
            source_current = 'https://player.vimeo.com/external/210744027.hd.mp4?s=3b213fa305d8ac5bd2b38a6663d7d50e3b006759&profile_id=119&oauth2_token_id=57447761&download=1'
        }
        break;
    case 6:
        {
            source_current = 'https://player.vimeo.com/external/198105695.hd.mp4?s=4e38208306638b2f9c908f638bfdc3bdd777ceb9&profile_id=174&oauth2_token_id=57447761&download=1'
        }
        break;
    case 7:
        {
            source_current = 'https://player.vimeo.com/external/293913779.hd.mp4?s=4c681cbaf3ac15404c362417ca670601519b58e6&profile_id=175&oauth2_token_id=57447761&download=1'
        }
        break;
    case 8:
        {
            source_current = 'https://player.vimeo.com/external/191381877.hd.mp4?s=d1f420d131fd7fdf6cfbe28e77b62da206afc90b&profile_id=119&oauth2_token_id=57447761&download=1'
        }
        break;
}

source.setAttribute('src', source_current);
video.appendChild(source);
video.load();
video.play();