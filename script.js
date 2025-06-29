// TYPEWRITER ANIMATION FOR LANDING PAGE
document.addEventListener('DOMContentLoaded', function () {
    var app = document.getElementById('text-container');
    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Hey<br>')
        .pauseFor(300)
        .typeString('I am Aishwarya Anand')
        .pauseFor(3000)
        .deleteAll()
        .pauseFor(1000)
        .typeString("B.Tech student at IGDTUW")
        .pauseFor(3000)
        .start();
});

// HEADER STICKY ON SCROLL
window.onscroll = function () {
    const header = document.getElementById('header');
    const headerline = document.getElementById('header-line');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 60) {
        header.classList.add('sticky');
        headerline.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
        headerline.classList.remove('sticky');
    }
};

// SCROLL TO TOP
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
console.log("JS script loaded!");

// === honors SECTION SCROLL-CYCLING ===
// Reveal honors timeline cards on scroll
window.addEventListener("scroll", () => {
    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => {
      const box = item.getBoundingClientRect();
      if (box.top < window.innerHeight - 100) {
        item.classList.add("show");
      }
    });
  });
  