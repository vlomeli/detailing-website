// Initialize EmailJS
(function () {
  emailjs.init("MAlFkml9eGdPHhKb4");
})();

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_w2spjch", "template_xdtgrec", this).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email has been sent!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
});

// content reveal
window.addEventListener('scroll', reveal);
function reveal () {
  var reveals = document.querySelectorAll('.reveal')

  for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('activate');
    } else {
      reveals[i].classList.remove("activate");
    };
  };
};