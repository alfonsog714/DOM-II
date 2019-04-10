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

let darkMode = "#566573";
let textC = "#fff";
const body = document.querySelector("body");

window.addEventListener("resize", event => {
  console.log(`window height: ${event.target.innerHeight}`);
  console.log(`window width: ${event.target.innerWidth}`);
  if (event.target.innerWidth <= 500) {
    body.style.backgroundColor = darkMode;
  } else {
    body.style.backgroundColor = "";
  }
});

const textArea = document.querySelector("#text");

textArea.addEventListener("select", event => {
  console.log(event);
  textArea.setAttribute("placeholder", "new words...");
});

const allLinks = Array.from(document.querySelectorAll(".nav .nav-link"));

allLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
  });
});
console.log(allLinks);

// --------------------------------------
// Code from Andy (pair program partner)
// --------------------------------------

/**
 * Locals
 */

let links = document.querySelectorAll(".nav-link");
links = Array.from(links);

/**
 * Change "About us" link to blue.
 *
 * Q: Why is it delayed?
 * Q: Why did this fire when using tab to focus?
 */

let nav_about_us = document.querySelector(
  "header.main-navigation nav a:nth-child(2)"
);

nav_about_us.addEventListener("keydown", event => {
  event.target.style.color = "blue";
});

/**
 * Add drag/drop handler.
 */

let nav_contact = document.querySelector(
  "header.main-navigation nav a:last-child"
);

nav_contact.addEventListener("drag", event => {
  if (event.screenX < 500) {
    links.forEach(link => (link.style.color = "orange"));
  } else {
    links.forEach(link => (link.style.color = "blue"));
  }
});

/**
 * Add focus handler.
 */

links.forEach(link => {
  link.addEventListener("focusin", event => {
    link.style.border = "2px solid blue";
    link.style.outline = "none";
  });

  link.addEventListener("focusout", event => {
    link.style.border = "none";
  });
});

/**
 * Q: Why doesnt resize fire for textarea?
 */

/**
 * Add scroll handler
 */

let do_this_once = false;
window.addEventListener("scroll", event => {
  if (do_this_once === false && event.timeStamp >= 5000) {
    alert("Can you give us money?");
    do_this_once = true;
  }
});

// This works too:
// let textarea = document.getElementById('story')
// textarea.addEventListener('scroll', event => {
//   console.log(event)
// })

/**
 * Add dblclick handler
 */

let logo_heading = document.querySelector("h1");

logo_heading.addEventListener("dblclick", event => {
  let original_text = logo_heading.textContent;
  logo_heading.textContent = "Surprise!";

  setTimeout(() => {
    logo_heading.textContent = original_text;
  }, 3000);
});

/**
 * Nest two similar events
 */

const img_fun = document.getElementById("img-fun");
const section_fun = document.getElementById("section-fun");

img_fun.addEventListener("mouseover", event => {
  event.stopPropagation();
  console.log(`Image: ${event}`);
  alert("Image fun!");
});
section_fun.addEventListener("mouseover", event => {
  console.log(`Section: ${event}`);
  alert("Section fun!");
});
