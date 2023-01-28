const menuBtn = document.getElementById('menu-btn')
const menuItem = document.getElementById('menu')
const aboutBtn = document.getElementById('aboutBtn')
const btnDown = document.getElementById('btnDown')
const about = document.getElementById('about')
const hero = document.getElementById('hero')
const popUp = document.getElementById('popUp')
const pop = document.getElementById('pop')


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open')
  menuItem.classList.toggle('hidden')
  menuItem.classList.toggle('flex')
})
menuItem.addEventListener('click', () => {
  menuItem.classList.toggle('hidden')
  menuItem.classList.toggle('flex')
  menuBtn.classList.toggle('open')
})

aboutBtn.addEventListener('click', () => {
  about.classList.replace('hidden', 'flex')
  about.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  aboutBtn.classList.add('hidden')
})


popUp.addEventListener('click', () => {
  about.classList.replace('hidden', 'flex')
  about.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  aboutBtn.classList.add('hidden')
})
pop.addEventListener('click', () => {
  about.classList.replace('hidden', 'flex')
  about.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  aboutBtn.classList.add('hidden')
})
