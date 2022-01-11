const heroMessage = document.querySelector('.hero-message')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const closeBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('.overlay')
const moreBtn = document.querySelector('.more-btn')
const newSection = document.querySelector('.newSection')

heroMessage.addEventListener('click', changeMessage)
hamburger.addEventListener('click', openNav)
closeBtn.addEventListener('click', closeNav)
overlay.addEventListener('click', closeNav)
moreBtn.addEventListener('click', showMoreBoxes)

function changeMessage() {
  heroMessage.textContent = 'Have a good Time!'
  heroMessage.classList.add('new-text')
}

function openNav() {
  nav.classList.add('show')
  overlay.classList.add('show')
}

function closeNav() {
  nav.classList.remove('show')
  overlay.classList.remove('show')
}

function showMoreBoxes() {
  newSection.classList.remove('hidden')
}
