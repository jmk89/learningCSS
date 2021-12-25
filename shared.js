var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');

console.dir(selectPlanButtons);

for (let button of selectPlanButtons) {
    button.addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}

noButton.addEventListener('click', () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
})