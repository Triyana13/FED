const enrollNowButton = document.getElementById("sumbit");
const registerPopup = document.getElementById("popup");
const registerBtn = document.getElementById("register-btn");

enrollNowButton.addEventListener("click", function(event) {
  event.preventDefault();
  registerPopup.style.display = "block";
});

registerBtn.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "../page-registration/registration.html";
});
