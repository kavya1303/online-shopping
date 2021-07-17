const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".first-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".first-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".first-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".first-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });

function addtocart(id){
    document.getElementById("a").style.display="block";
    gsap.from("#a", { opacity: 0, duration: 1, delay: 0.5, x: -200 });
    setTimeout(function(){ document.getElementById("a").style.display="none"; }, 3000);
    document.getElementById("empty").style.display="none";
    document.getElementsByClassName("cart-page").style.display="block";
    var table=document.getElementById("bill");
    var row=table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";


}

function addtofav(id){
  if(id.style.color=="red"){
    document.getElementById("nl").style.display="block";
    gsap.from("#nl", { opacity: 0, duration: 1, delay: 0.5, x: -200 });
    setTimeout(function(){ document.getElementById("nl").style.display="none"; }, 3000);
    id.style.color="black";
   }else{
  document.getElementById("l").style.display="block";
  gsap.from("#l", { opacity: 0, duration: 1, delay: 0.5, x: -200 });
  setTimeout(function(){ document.getElementById("l").style.display="none"; }, 3000);
 id.style.color="red";
   }
}
