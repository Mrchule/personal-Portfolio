const movies = [
  {
    name: "IMDB clone",
    path: "imdbposter.jpg",
    link: "https://github.com/Mrchule/MovieApp",
  },
  {
    name: "Swiggy clone",
    path: "swiggyposter.jpg",
    link: "https://github.com/Mrchule/Swiggy-Clone-Frontend",
  },
  {
    name: "FOOD recipe App",
    path: "foodposter.webp",
    link: "https://github.com/Mrchule/Food-recipe-app",
  },
  {
    name: "Weather  App",
    path: "weather.jpg",
    link: "https://github.com/Mrchule/WeatherApp",
  },
  {
    name: "QUIZ App",
    path: "quizz.jpg",
    link: "https://github.com/Mrchule/Quiz-App",
  },
  {
    name: "TODO App",
    path: "todo.jpg",
    link: "https://github.com/Mrchule/ToDo-APP",
  },
  {
    name: "NOTES App",
    path: "notesapp.png",
    link: "https://github.com/Mrchule/Notes-app",
  },
];

const project = document.querySelector("#project");

movies.map((item) => {
  const proj = document.createElement("div");
  proj.classList.add("proj-div");
  proj.classList.add("animate__zoomIn");
  proj.classList.add("animate__animated");
  proj.classList.add("wow");
  proj.innerHTML = `<div class="img-container">
                    <img src="${item.path}" alt="imdbposter" height="150px" width="100%" style="border-radius:10px,  object-position: center;">
                    </div>
                    <div class="hed">
                        <h2 class="headd">${item.name}</h2>
                    </div>
                    <div class="btn-container"><button ><a href="${item.link}" target="_blank">View</a></button></div>`;
  project.appendChild(proj);
});

const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");
function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
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

function Responsive() {
  var project = document.querySelectorAll(".proj-div");
  project.forEach((item) => {
    if (window.innerWidth < 700) {
      item.classList.add("proj-divv");
      item.classList.remove("proj-div");
    } else {
      item.classList.remove("proj-divv");
      item.classList.add("proj-div");
    }
  });
}
Responsive();

window.addEventListener("resize", Responsive);
let hidebar=document.querySelector(".icon");
const ul=document.querySelector(".nav ul")
hidebar.addEventListener("click",()=>{
  if(ul.className=="ul"){
    alert()
    ul.classList.remove("ul")
  }
  else{
    ul.classList.add("ul")

  }
})