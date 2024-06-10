const html = document.getElementsByTagName("html")[0];
const themeSwicth = document.getElementById("themeLogo");
themeSwicth.addEventListener("click", () => {
    html.classList.toggle("nuit");
    if (html.classList.contains("nuit")) {
        themeSwicth.innerHTML = " Mode jour";
    } else {
        themeSwicth.innerHTML = "Mode nuit";
    }
});


let dots1 = document.getElementById("dots1");
let moreText1 = document.getElementById("more1");
let btnText1 = document.getElementById("read1");

let dots2 = document.getElementById("dots2");
let moreText2 = document.getElementById("more2");
let btnText2 = document.getElementById("read2");

let dots3 = document.getElementById("dots3");
let moreText3 = document.getElementById("more3");
let btnText3 = document.getElementById("read3");

let dots4 = document.getElementById("dots4");
let moreText4 = document.getElementById("more4");
let btnText4 = document.getElementById("read4");

let dots5 = document.getElementById("dots5");
let moreText5 = document.getElementById("more5");
let btnText5 = document.getElementById("read5");


function readMore(dots,moreText,btnText) {
 
    if (dots.style.display === "none") {
      dots.style.display = "inline-block";
      btnText.innerHTML = "En savoir plus";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Réduire";
      moreText.style.display = "inline-block";
    }
}

document.querySelector("#read1").addEventListener("click", function(oEvent) {
  var  oParent = oEvent.target.parentNode; 
   oParent.classList.toggle('fullsize');
});

document.querySelector("#read2").addEventListener("click", function(oEvent) {
  var  oParent = oEvent.target.parentNode; 
   oParent.classList.toggle('fullsize');
});

document.querySelector("#read3").addEventListener("click", function(oEvent) {
  var  oParent = oEvent.target.parentNode; 
   oParent.classList.toggle('fullsize');
});

document.querySelector("#read4").addEventListener("click", function(oEvent) {
  var  oParent = oEvent.target.parentNode; 
   oParent.classList.toggle('fullsize');
});

document.querySelector("#read5").addEventListener("click", function(oEvent) {
  var  oParent = oEvent.target.parentNode; 
   oParent.classList.toggle('fullsize');
});


window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_0c9tp5j', 'template_volrfd8', this)
          .then(() => {
              alert('Message envoyé');
              document.getElementsByName("from_name")[0].value="";
              document.getElementsByName("email_id")[0].value="";
              document.getElementsByName("message")[0].value="";
          }, (error) => {
              alert('Erreur', error);
          });
  });
}