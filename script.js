document.addEventListener("DOMContentLoaded", function() {
    let navbar = document.querySelector(".navbar");
    
    function randomGlow() {
        let colors = ["#ff007f", "#00ffff", "#ff6600", "#ffcc00"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        navbar.style.boxShadow = `0px 0px 20px ${randomColor}`;
    }

    setInterval(randomGlow, 1000);

    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", () => {
            document.getElementById("check").checked = false;
        });
    });
});
