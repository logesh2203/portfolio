/* NAVBAR MOBILE TOGGLE */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if(menuToggle){
menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("show");
});
}

/* AUTO CLOSE MENU AFTER CLICK */
document.querySelectorAll(".nav-links a").forEach(link=>{
link.addEventListener("click",()=>{
navLinks.classList.remove("show");
});
});
document.addEventListener("DOMContentLoaded", () => {

const toggleBtn = document.getElementById("themeToggle");

/* Load saved theme */
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    if(toggleBtn) toggleBtn.textContent = "☀️";
}

if(toggleBtn){
toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        toggleBtn.textContent = "☀️";
    }else{
        localStorage.setItem("theme","light");
        toggleBtn.textContent = "🌙";
    }

});
}

});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".card, .project-card, section");

function revealNow(){
reveals.forEach(el=>{
const windowHeight = window.innerHeight;
const revealTop = el.getBoundingClientRect().top;

if(revealTop < windowHeight - 80){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", revealNow);
window.addEventListener("load", revealNow);   // IMPORTANT FIX

fetch("https://api.github.com/users/logesh2203/repos")
.then(res=>res.json())
.then(data=>{
const container=document.getElementById("githubRepos");

data.slice(0,6).forEach(repo=>{
const card=document.createElement("div");
card.className="project-card";
card.innerHTML=`
<h3>${repo.name}</h3>
<p>${repo.description || "Project repository"}</p>
<a href="${repo.html_url}" target="_blank">View Code</a>
`;
container.appendChild(card);
});
});
/* ACTIVE NAV LINK */
const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{
if(link.getAttribute("href") === currentPage){
link.classList.add("active");
}
});

window.addEventListener("load",()=>{
document.body.classList.add("loaded");
});
fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => document.getElementById("navbar").innerHTML = data);
