(function(){
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    console.log(sliders);

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add) =>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimony__body--show');
    }
})();


const menu = document.querySelector('.menu');
const email = document.querySelector('.email');

menu.addEventListener('clik', function(){
    email.classList.toggle('show');
});

window.addEventListener('clik', function(event){
    if(!menu.contains(event.target) && !email.contains(event.target)){
        email.classList.remove('show');
    }
});

/* const menuButton = document.getElementById('menuButton');
const popupMenu = document.getElementById('popupMenu');

// Función para mostrar/ocultar el menú
menuButton.addEventListener('click', function() {
  popupMenu.classList.toggle('show'); // Agrega o quita la clase 'show'
});

// Cerrar el menú si haces clic fuera de él
window.addEventListener('click', function(event) {
  if (!menuButton.contains(event.target) && !popupMenu.contains(event.target)) {
    popupMenu.classList.remove('show'); // Oculta el menú si haces clic fuera
  }
});
*/