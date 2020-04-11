const addMovieBtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const cancelAddMovieBtn = document.querySelector('.btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const backDrop = document.getElementById('backdrop');
const userInputs = document.querySelectorAll('input');

let movies = [];

const toggleBackDrop = function(){
    backDrop.classList.toggle('visible');
}

const toggleMovieModal = function(){
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();
}

const cancelAddMovieHandler = function(){
    toggleMovieModal();
}

const backDropClickHandler = function(){
    toggleMovieModal();
}

const clearMovieInput = function(){
    for(const userInput of userInputs){
        userInput.value = '';
    }
}

const addMovieHandler = function() {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if (
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        ratingValue < 1 ||
        ratingValue > 5
    ) {
        alert('please enter valid values!');
        return;
    }
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
}


cancelAddMovieBtn.addEventListener('click',cancelAddMovieHandler);
backDrop.addEventListener('click',backDropClickHandler);
confirmAddMovieBtn.addEventListener('click',addMovieHandler);
addMovieBtn.addEventListener('click',toggleMovieModal);

