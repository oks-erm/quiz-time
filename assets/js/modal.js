const modal = document.getElementById('modal-wrapper');
const playAgain = document.getElementById('play-again');

// Open modal
export function openModal() {
    // show modal
    modal.classList.add('show');
 
    //set event listener to the Play again button
    if (playAgain.getAttribute('data-listener') !== 'true') {
        playAgain.addEventListener('click', (e) => window.location.assign('funfact.html'));
        playAgain.setAttribute('data-listener', 'true');
    };
}