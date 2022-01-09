var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta')

for (let button of selectPlanButtons) {
    button.addEventListener('click', function() {
        // modal.style.display = 'block';
        backdrop.style.display = 'block';
        modal.classList.add('open');
        setTimeout( () => {
            backdrop.classList.add("open");
        }, 10);
    })
}

if( noButton ) {
    noButton.addEventListener('click', () => {
        closeModal();
    })
}

backdrop.addEventListener('click', () => {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open__mobile-nav');
    closeModal();
})

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
    mobileNav.classList.add('open__mobile-nav');
    setTimeout( () => {
        backdrop.classList.add("open");
    }, 10);
})

function closeModal() {
    // modal.style.display = 'none';
    
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove("open")
    setTimeout( () => {
        backdrop.style.display = 'none';
    }, 500);
}

ctaButton.addEventListener('animationstart', (event) => {
    console.log('animation started ', event);
})

ctaButton.addEventListener('animationend', (event) => {
    console.log('animation ended ', event);
})

ctaButton.addEventListener('animationiteration', (event) => {
    console.log('animation iteration ', event);
})