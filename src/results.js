class Results {
    constructor() {
        console.log('Results loaded')
    }
    refresh({cityName, mainTemp}) {
        // TODO: Podmiana tego co siedzi w html w oparciu o właściwosci otrzymanego obiektu
        // console.log(cityName);
        let handler = document.getElementById('mainbar');
        handler.innerHTML = `${cityName} ${mainTemp} &#8451`
    }
}

export default Results;