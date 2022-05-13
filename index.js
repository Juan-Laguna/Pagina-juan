const buton = document.querySelector('#buton');
const menu = document.querySelector('#menu');

buton.addEventListener('click', () => {
    console.log('click');

    menu.classList.toggle('hidden');
});


