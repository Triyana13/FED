const accordian =document.getElementsByClassName('content-t')
for(i = 0; i<accordian.length; i++){
   accordian[i].addEventListener('click', function(){
       this.classList.toggle('active')
   })
}

$(document).ready(function() {
    //Tambahkan kode jQuery untuk menampilkan pesan
    alert("This page is still under development");
  });


  function updateTime() {
    var now = new Date(); // Membuat objek tanggal dan waktu saat ini
    var hours = now.getHours(); // Mendapatkan jam saat ini
    var minutes = now.getMinutes(); // Mendapatkan menit saat ini
    var seconds = now.getSeconds(); // Mendapatkan detik saat ini
    var timeString = hours + ":" + padZero(minutes) + ":" + padZero(seconds); // Format string jam

    document.getElementById("clock").innerHTML = timeString; // Memasukkan string jam ke dalam elemen HTML dengan id "clock"
  }

  function padZero(num) {
    return (num < 10 ? "0" : "") + num; // Menambahkan 0 di depan angka jika angka kurang dari 10
  }

  setInterval(updateTime, 1000);
