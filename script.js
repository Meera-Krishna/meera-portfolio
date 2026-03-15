document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       Theme Toggle
       ========================================= */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');

    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        updateParticleColors();
    });

    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }


    /* =========================================
       Mobile Menu Hamburger
       ========================================= */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        const icon = hamburger.querySelector('i');
        icon.className = navLinks.classList.contains('active')
            ? 'fas fa-times'
            : 'fas fa-bars';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').className = 'fas fa-bars';
        });
    });


    /* =========================================
       Sticky Navbar & Active Link
       ========================================= */
    const header = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {
            header.classList.add('glass');
            header.style.padding = '0.5rem 5%';
        } else {
            header.style.padding = '1rem 5%';
        }

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });


    /* =========================================
       Typewriter Effect
       ========================================= */
    const textElement = document.getElementById('typewriter');
    const texts = [
        "Software Test Engineer",
        "Software Developer",
        "QA Specialist",
        "Tech Enthusiast"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex--);
        } else {
            textElement.textContent = currentText.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 500;
        }

        setTimeout(typeWriter, speed);
    }

    setTimeout(typeWriter, 1000);


    /* =========================================
       Scroll Reveal
       ========================================= */
    const revealElements = document.querySelectorAll('.reveal, .reveal-right');

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));


    /* =========================================
       Particles Background
       ========================================= */
    const canvas = document.getElementById('particles-bg');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
        constructor(x, y, dx, dy, size) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.size = size;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(56,189,248,0.8)";
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) this.dx *= -1;
            if (this.y > canvas.height || this.y < 0) this.dy *= -1;

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }

    function initParticles() {
        particles = [];
        let count = (canvas.width * canvas.height) / 15000;

        for (let i = 0; i < count; i++) {
            let size = Math.random() * 2 + 1;
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 1.5 - 0.75;
            let dy = Math.random() * 1.5 - 0.75;

            particles.push(new Particle(x, y, dx, dy, size));
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => p.update());
    }

    initParticles();
    animateParticles();


    /* =========================================
       Timeline Journey Animation
       ========================================= */

    const journeyItems = document.querySelectorAll(".journey-item");

    const journeyObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    journeyItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all 0.6s ease";
        journeyObserver.observe(item);
    });

});