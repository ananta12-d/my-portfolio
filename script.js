// script.js

// --- Particle Background ---
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

// --- Navigation ---
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// --- Navigation Links Active State ---
const navLinksAll = document.querySelectorAll('.nav-link');

navLinksAll.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinksAll.forEach(navLink => navLink.classList.remove('active'));
    e.target.classList.add('active');
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
});

// --- Skills Section ---
const tabBtns = document.querySelectorAll('.tab-btn');
const skillsCategories = document.querySelectorAll('.skills-category');
const skillProgressBars = document.querySelectorAll('.skill-progress');

tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(tabBtn => tabBtn.classList.remove('active'));
    skillsCategories.forEach(category => category.classList.remove('active'));

    btn.classList.add('active');
    skillsCategories[index].classList.add('active');
  });
});

// Trigger the first tab and skills on page load
tabBtns[0].click();

//Skill progress bar animation on scroll.
function checkSlide(e) {
  skillProgressBars.forEach(skillProgressBar => {
    const slideInAt = (window.scrollY + window.innerHeight) - skillProgressBar.offsetHeight / 2;
    const skillBottom = skillProgressBar.offsetTop + skillProgressBar.offsetHeight;
    const isHalfShown = slideInAt > skillProgressBar.offsetTop;
    const isNotScrolledPast = window.scrollY < skillBottom;
    if (isHalfShown && isNotScrolledPast) {
      let width = skillProgressBar.dataset.width;
      skillProgressBar.style.width = width + '%';
    }
  });
}
window.addEventListener('scroll', checkSlide);
checkSlide();

// --- Journey Section ---
const journeyTabs = document.querySelectorAll('.journey-tab');
const journeyTabContents = document.querySelectorAll('.journey-tab-content');

journeyTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    journeyTabs.forEach(journeyTab => journeyTab.classList.remove('active'));
    journeyTabContents.forEach(content => content.classList.remove('active'));

    tab.classList.add('active');
    journeyTabContents[index].classList.add('active');
  });
});

// Trigger the first journey tab on page load
journeyTabs[0].click();

// --- Back to Top Button ---
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// --- Smooth Scrolling for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
