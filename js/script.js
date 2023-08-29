'use strict'

const pizzaMenu = document.getElementById('pizza')
const saladMenu = document.getElementById('salad')
const starterMenu = document.getElementById('starter')
const menu_1 = document.querySelector('.menu_1')
const menu_2 = document.querySelector('.menu_2')
const menu_3 = document.querySelector('.menu_3')

pizzaMenu.addEventListener('click',() => {
    menu_1.style.display = 'block'
    menu_2.style.display='none'
    menu_3.style.display='none'
    pizzaMenu.style.backgroundColor='tomato'
    saladMenu.style.backgroundColor='transparent'
    starterMenu.style.backgroundColor='transparent'
})
saladMenu.addEventListener('click',() => {
    menu_1.style.display='none'
    pizzaMenu.style.backgroundColor='transparent'
    saladMenu.style.backgroundColor='tomato'
    starterMenu.style.backgroundColor='transparent'
    menu_2.style.display = 'block'
    menu_3.style.display='none'
})
starterMenu.addEventListener('click',() => {
    menu_3.style.display = 'block'
    menu_2.style.display='none'
    menu_1.style.display='none'
    pizzaMenu.style.backgroundColor='transparent'
    saladMenu.style.backgroundColor='transparent'
    starterMenu.style.backgroundColor='tomato'
})