<<<<<<< HEAD
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}

});

=======
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}

});

>>>>>>> 3999222ee6d5270c0060fae713e082fcc98c3817
});