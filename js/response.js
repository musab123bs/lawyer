burger = document.querySelector('.burger')
navMenu = document.querySelector('.nav-menu')
temp = document.querySelector('.temp')
header = document.querySelector('.header')

burger.addEventListener('click' , () =>{
    navMenu.classList.toggle('height-responsive');
    temp.classList.toggle('height-responsive1');
    header.classList.toggle('h-class');
})

// itemTab = document.querySelector('.item-tab')
// accident = document.querySelector('acc')
// health = document.querySelector('.hlth')
// insurance = document.querySelector('insrnce')

// accident.addEventListener('click' , () =>{
//     accident.classList.toggle('v-class');
// })

// health.addEventListener('click' , () =>{
//     health.classList.toggle('v-class');
// })

// accident.addEventListener('click' , () =>{
//     insurance.classList.toggle('v-class');
// })
