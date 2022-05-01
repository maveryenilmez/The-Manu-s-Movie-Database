fetch('./assets/data/movies.json')
    // pour recupérer les objects 
    //une fois le fichier rabatrie tu fera la suite avec .then
    .then((response) => {
        return response.json(); //transforme le fichier en json
    })
    .then((datas) => {
        datas.results.forEach(element => {
            document.querySelector('main').innerHTML += 
            `<div onclick="spin(this)" class="card card-1">
                <div class="inner">
                    <div class="front" >
                        <img src="${element.poster_path}" alt="movie poster">
                    </div>
                    <div class="back" style="background-image:url('https://images.pexels.com/photos/8961886/pexels-photo-8961886.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');">
                        <div class="back-info center">
                            <h2 class="m">${element.original_title}</h2>
                            <p class="text">${element.overview}</p>
                            <p class="tmdb">TMDB ${element.vote_average}</p>
                        </div>
                    </div>
                </div>
            `
        });
    });


//POUR LES EFFECTS CARDS // TOURNER LA CARTE
let bgs = document.getElementsByClassName("bgimg");

function spin(card) {
    noSpin();
    card.classList.add("spin");
    if (card.classList.contains("card-1")) {
        bgs[0].style.opacity = 1;
    } else if (card.classList.contains("card-2")) {
        bgs[1].style.opacity = 1;
    } else if (card.classList.contains("card-3")) {
        bgs[2].style.opacity = 1;
    };
};

function noSpin() {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("spin");
    };
    for (let i = 0; i < bgs.length; i++) {
        bgs[i].style.opacity = 0;
    };
};