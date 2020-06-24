// smooth scrolling & active class
const anchors = document.querySelectorAll(".anchor");
const sections = document.querySelectorAll("section");

anchors.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

function changeActiveLink() {
  let index = sections.length;
  const isHome = document.querySelector("#about");

  if (isHome) {
    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
    anchors.forEach((link) => link.classList.remove('active'));
    anchors[index].classList.add('active');
  }
}

// assign active class to nav link while scrolling
changeActiveLink();
window.addEventListener('scroll', changeActiveLink);

// toggle menu
const nav = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const toggle = document.querySelector(".nav-toggle");
const w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

toggle.addEventListener("click", toggleNav);
navLinks.forEach(btn => btn.addEventListener("click", untoggleNav));

function toggleNav() {
  nav.classList.toggle("grow");
  toggle.classList.toggle("open");
}

function untoggleNav() {
  if (w <= 640) {
    nav.classList.remove("grow");
    toggle.classList.remove("open");
  }
}

// close the menu when resizing
window.addEventListener("resize", function(e) {
  if (w > 640) {
    nav.classList.remove("grow");
    toggle.classList.remove("open");
  }
});

// change menu color on top
/* window.addEventListener("scroll", function() {
  let target = document.querySelector("#about");
  if (window.scrollY > target.offsetTop - 10) {
    nav.classList.add("is-fixed");
  } else {
    nav.classList.remove("is-fixed");
  }
}); */

// toggle contact form
const btn = document.getElementById("contact-toggle");
const contact = document.getElementById("contact");

btn.addEventListener("click", showContact);

function showContact(e) {
  e.preventDefault();
  contact.style.display = "block";
  document.body.classList.add("noscroll");
}

contact.addEventListener("click", hideModal);

function hideModal(e) {
  if (e.target.className === "close") {
    contact.style.display = "none";
    document.body.classList.remove("noscroll");
    status.style.display = "none";
    location.hash = "";
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}

// show confirmation after form submit
const hash = location.hash;
const status = document.getElementById("contact-msg");

status.addEventListener("click", hideModal);

if (hash === "#mailsuccess") {
  status.style.display = "block";
  document.body.classList.add("noscroll");
} else {
  status.style.display = "none";
  document.body.classList.remove("noscroll");
}

// get current year
const date = new Date().getFullYear();
document.getElementById("current-year").textContent = date;