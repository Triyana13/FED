
function save() {

  let users = localStorage.getItem("users");
  users = JSON.parse(users);
  if (users == null) {
      users = []
  }

  var user = JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("password").value,

  })
    
  if (document.getElementById("name").value == "") {
    window.location.href = "index.html"
    alert("Information data is blank")
}else{
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("registrasi berhasil")
    window.location.href = "index.html";
   
}


}


function clear() {
  localStorage.clear();
  console.log("di klik")
}
