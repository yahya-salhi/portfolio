let messArry = ['yahya salhi .']
let textPosition = 0
let speed = 700
typewriter = () => {
  document.getElementById('msg').innerHTML = messArry[0].substring(
    0,
    textPosition,
  )
  if (textPosition++ != messArry[0].length) setTimeout(typewriter, speed)
}
window.addEventListener(
  'load',
  typewriter,
)

const sections = document.querySelectorAll('.section')
const secBtns = document.querySelectorAll('.controls')
const secBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')

function pageTransitions() {
  //button click active class
 secBtn.forEach(el=>{
   el.addEventListener('click',function(){
    document.querySelector(".active-btn").classList.remove("active-btn") 
    this.classList.add("active-btn")
    document.querySelector(".active").classList.remove("active");
    document.getElementById(el.dataset.id).classList.add("active");

   })
 })
 document.querySelector(".theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
})
}
pageTransitions() 