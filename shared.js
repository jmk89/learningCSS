var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

console.dir(backdrop);

for (let button of selectPlanButtons) {
    button.addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

if( noButton ) {
    noButton.addEventListener('click', () => {
        closeModal();
    })
}

backdrop.addEventListener('click', () => {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
})

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');
}