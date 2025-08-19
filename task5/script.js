const form = document.getElementById("registerForm");
const msg = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const f = document.getElementById("firstName").value;
  const l = document.getElementById("lastName").value;
  const em = document.getElementById("email").value;
  const g = document.getElementById("gender").value;
  msg.style.display = "block";
  msg.innerHTML = Welcome ${f} ${l}! <br>Email: ${em} <br>Gender: ${g};
});