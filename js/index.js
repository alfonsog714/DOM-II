// Your code goes here
const headerImg = document.querySelector(".intro img");
const aboutUS = document.querySelector(
  "header.main-navigation nav a:nth-child(2)"
);
const blog = document.querySelector(
  "header.main-navigation nav a:nth-child(3)"
);

headerImg.addEventListener("mouseover", event => {
  event.target.style.padding = "1%";
  setTimeout(function() {
    event.target.style.padding = "";
  }, 500);
});

blog.addEventListener("wheel", event => {
  console.log(`Page Y: ${event.pageY}`);
  console.log(`Page X: ${event.pageX}`);
  if (event.pageY > 340) {
    event.currentTarget.style.background = "red";
  } else {
    event.currentTarget.style.background = "";
  }
});

// aboutUS.addEventListener("keydown", event => {
//   event.target.setAttribute("href", "https://wwww.google.com");
// }); extremely delayed

const contact = document.querySelector(
  "header.main-navigation nav a:last-child"
);

contact.addEventListener("drag", event => {
  console.log(`drag: ${event}`);
});

const headerEle = document.querySelector("header");

window.addEventListener("load", event => {
  console.log(event);
  alert(`This page took ${Math.floor(event.timeStamp)} milliseconds to load.`);
});
