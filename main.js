const mobile_nav = document.querySelector("#Nav-Mob");
const nav = document.querySelector(".nav")
const alphabate= document.querySelector(".alphabates")
fetch('/alphabate.html')
.then(res=>res.text())
.then(data=>{
    alphabate.innerhtml=data
})


const toggleNavbar =()=>{
  nav.classList.toggle("active")
//   nav.classList.toggle("Mobile-Nav1")
  
}

mobile_nav.addEventListener('click', ()=>toggleNavbar());