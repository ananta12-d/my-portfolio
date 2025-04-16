/* script.js */
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-links li a');
const sections = document.querySelectorAll('.section');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-links');
const formGroups = document.querySelectorAll('.form-group');
const contactForm = document.getElementById('contact-form');


// --- Sticky Header ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Active Link on Scroll ---
function updateActiveLink() {
    let currentSectionId = 'about';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);



// --- Mobile Menu ---
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('show');
});

mobileNav.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('show');
});



// --- Form Label Animation ---
formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');

    if (input.value !== '') {
        label.classList.add('active');
    }

    input.addEventListener('focus', () => {
        label.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            label.classList.remove('active');
        }
    });
});



// --- Form Submission ---
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Simulate a successful submission
    setTimeout(() => {
        alert('Message sent successfully!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const label = group.querySelector('label');
            if (label) {
                label.classList.remove('active');
            }
        });

    }, 1000);
});



// --- Scroll Reveal ---
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY > sectionTop - window.innerHeight / 2) {
            section.classList.add('show');
        }
    });
});

// --- Initial Load Animations ---
window.addEventListener('load', () => {
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('show');
        }, 200 * index);
    });
});
