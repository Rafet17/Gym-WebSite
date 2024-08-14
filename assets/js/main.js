window.addEventListener('load', () => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
});


document.addEventListener('DOMContentLoaded', function () {
    //navbar 
    document.querySelector('.button i').addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });

    // swiper button
    const swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    animation();
});

const navbar = document.querySelector("nav");

function animation() {
    let controller = new ScrollMagic.Controller();
    const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    t1.fromTo(navbar, 1, { y: "-10rem" }, { y: 0 });
    t1.fromTo(".content-text", 0.5, { x: "-2rem", opacity: 0 }, { x: 0, opacity: 1 }, "-=1");
    t1.fromTo(".content-image", 0.5, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 }, "-=1");
    t1.fromTo(".home .content-image img", 0.5, { scale: 1.5 }, { scale: 1 }, "-=1");

    // about animation
    const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    t2.fromTo(".about-head", 1, { y: "-10rem", opacity: 0 }, { y: 0, opacity: 1 });
    t2.fromTo(".content-image", 0.5, { x: "-2rem", opacity: 0 }, { x: 0, opacity: 1 }, "-=1");
    t2.fromTo(".content", 0.5, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 }, "-=1");

    new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: 0.5,
        reverse: false
    }).setTween(t2).addTo(controller);

    //gallery animation
    const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    t3.fromTo(".gallery h2", 1, { y: "-10rem", opacity: 0 }, { y: 0, opacity: 1 });
    t3.fromTo(".gallery .divider", 0.5, { opacity: 0 }, { opacity: 1 });
    t3.fromTo(".gallery-image img", 0.5, { y: "-3rem", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 }, "-=1");

    new ScrollMagic.Scene({
        triggerElement: "#gallery",
        triggerHook: 0.5,
        reverse: false
    }).setTween(t3).addTo(controller);

    //pricing animations
    const t4 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    t4.fromTo(".pricing .content-text", 1, { x: "-5rem", opacity: 0, visibility: 'hidden' }, { x: 0, opacity: 1, visibility: 'visible' });
    t4.fromTo(".pricing-tablet", 1, { y: "-3rem", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, "-=1")

    new ScrollMagic.Scene({
        triggerElement: "#pricing",
        triggerHook: 0.5,
        reverse: false
    }).setTween(t4).addTo(controller);

    //contact us animation
    const t5 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    t5.fromTo(".map", 1, { y: "-10rem", opacity: 0, }, { y: 0, opacity: 1, });
    t5.fromTo(".contact", 1, { x: "-5rem", opacity: 0 }, { x: 0, opacity: 1 });
    t5.fromTo(".work-time", 1, { x: "2rem", opacity: 0 }, { x: 0, opacity: 1 }, "-=1");

    new ScrollMagic.Scene({
        triggerElement: "#contact",
        triggerHook: 0.5,
        reverse: false
    }).setTween(t5).addTo(controller);

    //testimonials animation
    const t6 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    t6.fromTo(".testimonials .wrapper", 1, {y:"-3rem", opacity:0}, {y:0, opacity:1});

    new ScrollMagic.Scene({
        triggerElement: "#testimonials",
        triggerHook: 0.5,
        reverse: false
    }).setTween(t6).addTo(controller);

    //footer animation
    const t7 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    t7.fromTo("footer", 1, {y:"10rem", opacity:1}, {y:0, opacity:1});

    new ScrollMagic.Scene({
        triggerElement: "#footer",
        triggerHook: 1.2,
        reverse: false
    }).setTween(t7).addTo(controller);
}

