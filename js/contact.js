const form = document.getElementById("contactForm");
const button = form.querySelector("button");
const status = document.getElementById("msgStatus");

form.addEventListener("submit", function(e){
e.preventDefault();

button.disabled = true;
button.innerText = "Sending...";
button.style.opacity = "0.7";

emailjs.send("service_wxm2evo","template_w3arft5",{
from_name: document.getElementById("name").value,
reply_to: document.getElementById("email").value,
message: document.getElementById("message").value
}).then(function(){

status.innerText = "Message sent successfully!";
status.classList.add("show");

form.reset();

button.disabled = false;
button.innerText = "Send Message";
button.style.opacity = "1";

setTimeout(()=>{
status.classList.remove("show");
},4000);

}, function(){

status.innerText = "Something went wrong. Please try again.";
status.style.color = "#ef4444";
status.classList.add("show");

button.disabled = false;
button.innerText = "Send Message";
button.style.opacity = "1";
});
});