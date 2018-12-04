class Search {
    constructor() {
        console.log('Search loaded')
        this.city = "Wrocław";
    }
    checkInput() {
        // TODO: uchwyt do inputa który sprawdzi aktualną wartość i przypisze do this.city
    }


    refresh(weather) {
        // TODO: Podmiana tego co siedzi w inpucie w oparciu o właściwosci otrzymanego obiektu
        // 'Ubierz się ciepło bo pizdzi' ~ K. Jaskulska 2018
        console.log('test');
    }

    loading(isLoading) {
        // Można łatwo zrobić prosty loader który na chwile zamieni się z ikonką lupy
        // https://semantic-ui.com/elements/loader.html
    }
}


export default Search;