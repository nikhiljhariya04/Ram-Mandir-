const openMenu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".cross-icon");
const overlay = document.querySelector(".container");
const list = document.querySelector(".list");

openMenu.addEventListener("click", function () {
  list.classList.remove("hidden");
});
closeMenu.addEventListener("click", function () {
  list.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  list.classList.add("hidden");
});

//form submission and reset code
var form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  console.log(username);

  var email = document.getElementById("email").value;
  console.log(email);

  var message = document.getElementById("message").value;
  console.log(message);

  form.reset();

  alert(
    "Data submitted successfully!\nName: " +
      username +
      "\nEmail: " +
      email +
      "\nMessage: " +
      message
  );
});
window.onload = function () {
  alert("Tap or Hover on each section for a better experience");
};
