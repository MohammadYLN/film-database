const addMovieBtn = document.querySelector('head button');
const addMovieModal = document.getElementById('add-modal');
const cancelAddMovieBtn = document.querySelector('.btn--passive');
const confirmAddMovieBtn = document.querySelector('btn--danger');
const backDrop = document.getElementById('backdrop');
const userInputs = document.querySelectorAll('input');


const toggleBackDrop = function(){
    backDrop.classList.toggle('visible');
}

const toggleMovieModal = function(){
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();
}

