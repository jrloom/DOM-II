// Your code goes here
const btnTextMouseOver = document.querySelectorAll(".btn");
btnTextMouseOver.forEach(element => element.addEventListener("mouseenter", () => (element.textContent = "Let's Go!"))); // 1
btnTextMouseOver.forEach(element => element.addEventListener("mouseleave", () => (element.textContent = "Sign Me Up!"))); // 2

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(element =>
  element.addEventListener("focus", () => {
    // 3
    element.style.transform = "scale(1.4)";
  })
);
navLink.forEach(element =>
  element.addEventListener("blur", () => {
    // 4
    element.style.transform = "scale(1)";
  })
);

window.addEventListener("scroll", () => {
  // 5
  if (document.documentElement.scrollTop > 15) {
    document.querySelector(".toTop").style.display = "block";
  } else {
    document.querySelector(".toTop").style.display = "none";
  }
});

const showDesc = document.querySelectorAll(".destination > h4");
showDesc.forEach(element =>
  element.addEventListener("click", () => {
    //6
    const desc = document.querySelector(".destination > p");
    desc.style.display = "block";
  })
);
const hideDesc = document.querySelectorAll(".destination > h4");
showDesc.forEach(element =>
  element.addEventListener("dblclick", () => {
    // 7
    const desc = document.querySelector(".destination > p");
    desc.style.display = "none";
  })
);

window.addEventListener("load", () => console.log("Hello there")); // 8

const largePic = document.querySelectorAll("img");
largePic.forEach(element => element.addEventListener("mouseover", () => (element.style.transform = "scale(1.1)"))); // 9
largePic.forEach(element => element.addEventListener("mouseout", () => (element.style.transform = "scale(1)"))); // 10

// preventDefault()
navLink.forEach(element => element.addEventListener("click", event => event.preventDefault()));

// stopPropagation()
document.querySelector("header").addEventListener("click", () => console.log("header clicked"));
document.querySelector("h1").addEventListener("click", event => {
  event.stopPropagation();
  console.log("h1 clicked");
});
