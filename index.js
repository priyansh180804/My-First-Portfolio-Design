const toggleBtnIcons = document.getElementById("toggle-icon");
const toggleBtnTimes = document.querySelector(".times");
const toggleBtnBars = document.querySelector(".bars");

const linksContainer = document.getElementById("links-container");
const navContainer = document.getElementById("nav-links");

//getBoundaryClientRect();

function toggleIcons() {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const navContainerHeight = navContainer.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${navContainerHeight}px`;
    toggleBtnTimes.style.display = "block";
    toggleBtnBars.style.display = "none";
  } else if (linksContainerHeight === navContainerHeight) {
    linksContainer.style.height = 0;
    toggleBtnBars.style.display = "block";
    toggleBtnTimes.style.display = "none";
  }
}
toggleBtnIcons.addEventListener("click", toggleIcons);

// -------------SECTION--------

//Select All the links

const linksEl = document.querySelectorAll(".link");

linksEl.forEach(function (linksItem) {
  linksItem.addEventListener("click", function (item) {
    linksContainer.style.height = 0;
    toggleBtnBars.style.display = "block";
    toggleBtnTimes.style.display = "none";
  });
});

//Text Typing Home Page

const typed = new Typed(".auto-typed", {
  strings: ["riyansh,"],
  typeSpeed: 220,
  backSpeed: 200,
  loop: true,
});

//Ball Animation

const myselfEl = document.querySelector(".myself");
const switchBtn = document.querySelector(".switch-btn");

const playBall = document.querySelector(".fa-play");
const pauseBall = document.querySelector(".fa-pause");

playBall.addEventListener("click", () => myFunc("play"));
pauseBall.addEventListener("click", () => myFunc("pause"));

const myFunc = (state) => {
  if (state === "play") {
    myselfEl.classList.add("animate");
    playBall.style.display = `none`;
    pauseBall.style.display = `block`;
  } else if (state === "pause") {
    myselfEl.classList.remove("animate");
    playBall.style.display = `block`;
    pauseBall.style.display = `none`;
  }
};

//Scroll Link

const scrollLink = document.querySelector(".scroll-link");

window.addEventListener("scroll", function () {
  const topLink = window.pageYOffset;
  if (topLink > 500) {
    scrollLink.classList.add("show-link");
  } else {
    scrollLink.classList.remove("show-link");
  }
});