gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const sections = gsap.utils.toArray('section');

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            start: 'top top',
            end: 3000,
        }
    });

    gsap.to('.logo', {
        fontSize: '2.5rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.logo',
            start: 'top top',
            end: 1500,
            scrub: 0.5,
        }
    });

    gsap.to('.line', {
        height: '10rem',
        scrollTrigger: {
            trigger: '.line',
            start: 'center center',
            scrub: 0.5,
            end: 2000,
        }
    });

    document.querySelectorAll('.character').forEach(el => {
        gsap.to(el.querySelector('.caption'), {
            x: 0,
            y: 0,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.caption'),
                start: 'top bottom',
                end: '+=1000',
                scrub: 0.5,
            }
        });
    });

    document.querySelectorAll('.quote').forEach(el => {
        gsap.to(el, { 
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el,
                start: 'top bottom', 
                end: '+=20%',
                scrub: 0.5,
            }
        });
    });

    document.querySelectorAll('.nickname').forEach(el => {
        gsap.to(el, { 
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el,
                start: 'top bottom', 
                end: '+=10%',
                scrub: 0.5,
            }
        });
    });

    document.querySelectorAll('.block').forEach(el => {
        gsap.to(el, { 
            x: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el,
                start: 'top bottom', 
                end: '+=' + window.innerWidth,
                scrub: 0.5,
            }
        });
    });

    document.querySelectorAll('img').forEach(el => {
        gsap.to(el, { 
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el,
                start: 'top bottom', 
                end: '+=50%',
                scrub: 0.5,
            }
        });
    });

    document.querySelectorAll('.huge-text').forEach(el => {
        gsap.to(el, { 
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el,
                start: 'top bottom', 
                end: '+=100%',
                scrub: 0.5,
            }
        });
    });
});
