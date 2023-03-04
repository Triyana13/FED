let users = localStorage.getItem("users");
users = JSON.parse(users)
var key;
showData();

//
function showData() {
    if (users == null) {
        users = [];
    }
    var no = 1;
    users_data = "<table border = '1' style= 'border-collapse:collapse'>"
    for (user in users) {

        let registrant = JSON.parse(users[user]);
        users_data += "<tr>";
        users_data += "<td width = 30px>" + no + "</td>" +
            "<td width = 180px>" + registrant["name"] + "</td>" +
            "<td width = 180px>" + registrant["email"] + "</td>" +
            "<td width = 150px>" + registrant["password"] + "</td>" +
            "<td width = 110px><button class='btn-edit' type= 'submit'  onclick=   ' onChange(this); '  > edit</button> <button class='btn-delete' type= 'submit'  onclick=   ' deleted(this); '  > delete</button></td>" +
            "</tr>";
        no++
    }
    users_data += "</table>";
    document.getElementById("data").innerHTML = users_data;

}

function deleted(td) {
    if (users == null) {
        users = []
    }
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        let deleted = row.cells[1].innerHTML;

        for (let i = 0; i < users.length; i++) {
            var user = JSON.parse(users[i])
            if (deleted == user["name"]) {
                users.splice(i, 1);
            }
        }
        localStorage.clear();
        localStorage.setItem("users", JSON.stringify(users));
        showData();
    }
}

function onChange(td) {

    row = td.parentElement.parentElement;
    let deleted = row.cells[1].innerHTML;


    for (var i = 0; i < users.length; i++) {
        var user = JSON.parse(users[i])

        if (deleted == user["name"]) {
            document.querySelector(".new-name").value = user["name"];
            document.querySelector(".new-email").value = user["email"];
            document.querySelector(".new-password").value = user["password"];
            key = user["name"];
            break;
        }
    }

}

function change() {

    if (users == null) {
        users = []
    }
    newData = JSON.stringify({
        name: document.querySelector(".new-name").value,
        email: document.querySelector(".new-email").value,
        contact: document.querySelector(".new-password").value,

    })

    for (let i = 0; i < users.length; i++) {
        var user = JSON.parse(users[i])
        if (key == user["name"]) {
            users.splice(i, 1);
        }

    }
    localStorage.clear();
    users.push(newData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Data updated")

    showData();
}


function clearALL() {
    if (confirm('Do you want to delete this record?')) {
        localStorage.clear();

        location.reload();
    }
}


function addData() {



    user = JSON.stringify({
        name: document.querySelector(".add-name").value,
        email: document.querySelector(".add-email").value,
        contact: document.querySelector(".add-password").value,
       

    })
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    showData();
    alert("data added")
}