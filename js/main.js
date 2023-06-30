const foxerText = document.querySelectorAll(".section_name");
let sBrowser,
  sUsrAg = navigator.userAgent;

if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
  foxerText.forEach(function (div) {
    div.classList.remove("section_name--gradient");
  });
}

const queGreen = "images/que_green.svg";
const queGreenAnim = [
  "images/que_yellow_an1.svg",
  "images/que_green_an2.svg",
  "images/que_green_an3.svg",
  "images/que_green_an4.svg",
  "images/que_green_an5.svg",
];
const queYellow = "images/que_yellow.svg";
const queYellowAnim = [
  "images/que_green_an1.svg",
  "images/que_yellow_an2.svg",
  "images/que_yellow_an3.svg",
  "images/que_yellow_an4.svg",
  "images/que_yellow_an5.svg",
];

const queUno1 = document.querySelectorAll(".web__questionmark--one");
const queUno2 = document.querySelectorAll(".web__questionmark--two");
const queUno3 = document.querySelectorAll(".web__questionmark--three");
const queUno4 = document.querySelectorAll(".web__questionmark--four");
const queUno5 = document.querySelectorAll(".web__questionmark--five");

// const queUno = document.querySelectorAll(".que_uno");
const queDos = document.querySelectorAll(".skill__questionmark");

const darkLight = document.querySelector(".extras__icon--sun");
const nav = document.querySelector("nav");
const burger = document.querySelector(".hamburger");

const borderToggle = document.querySelector(".extras__icon--diamond");
const borderos = document.querySelector(".header__border_landscape");
const borderPortBot = document.querySelector(".header__border_portrait--bottom");
const borderPortRight = document.querySelector(".header__border_portrait--right");

const borders = [
  ["images/border.svg", "images/border_ver_bot_dark.svg", "images/border_ver_right_dark.svg"],
  ["images/border_lgt.svg", "images/border_ver_bot_light.svg", "images/border_ver_right_light.svg"],
];
let bord = 1;

const switcher = () => {
  document.body.classList.toggle("light");

  if (document.body.className == "light") {
    queUno1.forEach(function (img) {
      img.setAttribute("src", queYellowAnim[0]);
    });
    queUno2.forEach(function (img) {
      img.setAttribute("src", queYellowAnim[1]);
    });
    queUno3.forEach(function (img) {
      img.setAttribute("src", queYellowAnim[2]);
    });
    queUno4.forEach(function (img) {
      img.setAttribute("src", queYellowAnim[3]);
    });
    queUno5.forEach(function (img) {
      img.setAttribute("src", queYellowAnim[4]);
    });

    queDos.forEach(function (img) {
      img.setAttribute("src", queGreen);
    });

    logo.setAttribute("src", "images/logo_dark.svg");

    bord = 0;
    borderos.setAttribute("src", borders[bord][0]);
    borderPortBot.setAttribute("src", borders[bord][1]);
    borderPortRight.setAttribute("src", borders[bord][2]);
  } else {
    queUno1.forEach(function (img) {
      img.setAttribute("src", queGreenAnim[0]);
    });
    queUno2.forEach(function (img) {
      img.setAttribute("src", queGreenAnim[1]);
    });
    queUno3.forEach(function (img) {
      img.setAttribute("src", queGreenAnim[2]);
    });
    queUno4.forEach(function (img) {
      img.setAttribute("src", queGreenAnim[3]);
    });
    queUno5.forEach(function (img) {
      img.setAttribute("src", queGreenAnim[4]);
    });

    queDos.forEach(function (img) {
      img.setAttribute("src", queYellow);
    });

    logo.setAttribute("src", "images/logo_light.svg");

    bord = 1;
    borderos.setAttribute("src", borders[bord][0]);
    borderPortBot.setAttribute("src", borders[bord][1]);
    borderPortRight.setAttribute("src", borders[bord][2]);
  }
};

const logo = document.querySelector(".header__logo");

// if (Math.random() > 0.5) {
//     switcher();
// }

darkLight.addEventListener("click", () => {
  switcher();
});

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const projects = document.querySelectorAll(".project");

const animImages1 = document.querySelectorAll(".web__questionmark--anim_1");
const animImages2 = document.querySelectorAll(".web__questionmark--anim_2");
const animImages3 = document.querySelectorAll(".web__questionmark--anim_3");
const animImages4 = document.querySelectorAll(".web__questionmark--anim_4");

let quarter = projects[0].offsetHeight / 4;
// console.log(projects[0].offsetHeight)
let skillsPos = document.querySelector(".skills").offsetTop;

function drawingQue(animImages, i) {
  let drawing = window.scrollY + window.innerHeight < skillsPos + 200;
  if (drawing && window.scrollY + window.innerHeight > projects[i].offsetTop + 400) {
    let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 400;
    animImages[4].style.opacity = hei / quarter;
    animImages[3].style.opacity = 1;
    if (animImages[4].style.opacity > 1) {
      animImages[4].style.opacity = 1;
      animImages[3].style.opacity = 0;
      animImages[2].style.opacity = 0;
      animImages[1].style.opacity = 0;
      animImages[0].style.opacity = 0;

      drawing = false;
    }
  } else if (drawing && window.scrollY + window.innerHeight > projects[i].offsetTop + 300) {
    let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 300;
    animImages[3].style.opacity = hei / quarter;
    animImages[2].style.opacity = 1;
    animImages[1].style.opacity = 0;
    animImages[0].style.opacity = 0;
  } else if (drawing && window.scrollY + window.innerHeight > projects[i].offsetTop + 200) {
    let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 200;
    animImages[2].style.opacity = hei / quarter;
    animImages[1].style.opacity = 1;
    animImages[0].style.opacity = 0;
  } else if (drawing && window.scrollY + window.innerHeight > projects[i].offsetTop + 100) {
    let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 100;
    animImages[1].style.opacity = hei / quarter;
    animImages[4].style.opacity = 0;
    animImages[0].style.opacity = 1;
  }
}

const skills = document.querySelectorAll(".skill");
const saturImages = document.querySelectorAll(".skill__questionmark");
let skillHeight = skills[0].offsetHeight;
let skillQuart = skillHeight / 2.6;

function saturQue(saturImage, i) {
  if (
    window.scrollY + window.innerHeight > skills[i].offsetTop + skillQuart &&
    window.scrollY + window.innerHeight < skills[i].offsetTop + skillQuart + skillHeight
  ) {
    let hei = window.scrollY + window.innerHeight - skills[i].offsetTop - skillQuart;
    saturImage.style.filter = `saturate(${(hei * 1.02) / skillHeight})`;
  }
}
const scrollEventor = () => {
  drawingQue(animImages1, 0);
  drawingQue(animImages2, 1);
  drawingQue(animImages3, 2);
  drawingQue(animImages4, 3);

  saturQue(saturImages[0], 0);
  saturQue(saturImages[1], 1);
  saturQue(saturImages[2], 2);
};

window.addEventListener("scroll", scrollEventor);

borderToggle.addEventListener("click", () => {
  bord++;
  if (bord == 2) {
    bord = 0;
  }

  borderos.setAttribute("src", borders[bord][0]);
  borderPortBot.setAttribute("src", borders[bord][1]);
  borderPortRight.setAttribute("src", borders[bord][2]);
});

const but = document.querySelector("button");

but.addEventListener("click", (e) => {
  e.preventDefault();
});
