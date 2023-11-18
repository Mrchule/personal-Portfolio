
const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");
function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) { }
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);  

var typed = new Typed('#element', {
    strings: ['I am a Web Developer...', 'I am a Ux/Ui Designer...',],
    typeSpeed: 50, loop: true,
});
const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
const animation = document.querySelectorAll('.sec');
animation.forEach((el) => observe.observe(el));

