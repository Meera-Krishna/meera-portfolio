// typing animation

var typed = new Typed(".typing",{
strings:[
"Software Developer",
"Problem Solver",
"Computer Science Student"
],
typeSpeed:60,
backSpeed:40,
loop:true
});


// scroll animation

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
section.style.opacity="1";
section.style.transform="translateY(0)";
}

});

});


// particles background

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:1},
line_linked:{enable:true}
}
});