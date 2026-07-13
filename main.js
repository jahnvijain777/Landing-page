const words = ["Frontend Developer", "Btech Student", "Creative Coder", "AI Developer", "Web Developer", "Problem Solver", "Tech Enthusiast", "Open Source Contributor"];

const typewriter = document.getElementById("typewriter");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typewriter.textContent = currentWord.substring(0,charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }
    } else {
        typewriter.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();