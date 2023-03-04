const animatedElements = document.querySelectorAll('.card-body animate__animated animate__bounceIn');
// Dapatkan elemen-elemen yang ingin dianimasikan

function animateOnScroll() {
  animatedElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight) {
      element.classList.add('animate__bounce');
    }
    else {
      element.classList.remove('animate__bounce');
    }
  });
}

animateOnScroll(); // Panggil fungsi ini untuk pertama kali saat halaman dimuat

window.addEventListener('scroll', animateOnScroll); // Panggil fungsi ini setiap kali user melakukan scroll
