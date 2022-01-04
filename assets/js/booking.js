const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// seave selected movie index and price

// function setMovieData(movieIndex,movie) {
//     localStorage.setItem('seletedMovieIndex',movieIndex);
//     localStorage.setItem('selectedMoviePrice',moviePrice);
// }

// update total and count 

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length
     count.innerHTML = selectedSeatsCount;
     total.innerHTML = selectedSeatsCount * ticketPrice;

}

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
    }

    updateSelectedCount() 
})