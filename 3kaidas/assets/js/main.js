const init3k = () => {
    const gridImages = gsap.utils.toArray('#gallery .grid-img img'),
        gallerySection = document.querySelectorAll('#gallery .grid'),
        matchMedia = gsap.matchMedia();

    // INITIALIZE IMAGES POSITION
    gsap.from(gridImages, {
        y: -window.innerHeight,
    });

    // MAIN LOGO ANIMATION
    gsap.from(document.querySelector('#main .logo img'), {
        scrollTrigger: {
            trigger: '#main',
            toggleActions: 'play none none none',
        },
        right: '100%',
        duration: 1.2,
        ease: 'easeInOut',
    });
    // END MAIN LOGO ANIMATION

    // SLOGAN ANIMATION
    const tlSlogan = gsap.timeline({
        scrollTrigger: {
            trigger: '#slogan',
            toggleActions: 'play none none reset',
        },
    });

    tlSlogan.from('#slogan .left', {
        y: '-200%',
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        ease: 'easeInOut',
    });

    tlSlogan.from('#slogan .right', {
        x: '-100%',
        opacity: 0,
        duration: 1,
        ease: 'easeInOut',
    });
    // END SLOGAN ANIMATION

    // DECORATOR ANIMATION
    matchMedia.add('(max-width: 1023px)', () => {
        gsap.fromTo('#decorator .circle', {
            y: '-100%',
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        }, {
            scrollTrigger: {
                trigger: '#decorator .content',
                toggleActions: 'play none none reverse'
            },
            y: '45%',
            x: '20vw',
            width: '60vw',
            height: '60vw',
            borderRadius: '100%',
        });
    });

    matchMedia.add('(min-width: 1024px)', () => {
        gsap.fromTo('#decorator .circle', {
            y: '-100%',
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        }, {
            scrollTrigger: {
                trigger: '#decorator .content',
                toggleActions: 'play none none reverse'
            },
            y: '80%',
            x: '20vw',
            width: '25vw',
            height: '25vw',
            borderRadius: '100%',
        });
    });

    matchMedia.add('(min-width: 1280px)', () => {
        gsap.fromTo('#decorator .circle', {
            y: '-100%',
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        }, {
            scrollTrigger: {
                trigger: '#decorator .content',
                toggleActions: 'play none none reverse'
            },
            y: '40%',
            x: '20vw',
            width: '25vw',
            height: '25vw',
            borderRadius: '100%',
        });
    });

    gsap.from('#decorator .content', {
        scrollTrigger: {
            trigger: '#decorator .content',
            toggleActions: 'play none none reset',
        },
        x: '-80%',
        opacity: 0,
        duration: 1,
        ease: 'easeInOut',
        delay: 0.8,
    });
    // END DECORATOR ANIMATION

    // IMAGE SCROLL ANIMATION
    document.addEventListener('scroll', e => {
        gsap.to(gridImages.slice(0, 5), {
            y: -gallerySection[0].getBoundingClientRect().top,
            duration: 0,
            ease: 'none',
        });

        gsap.to(gridImages.slice(5, 9), {
            y: -gallerySection[1].getBoundingClientRect().top,
            duration: 0,
            ease: 'none',
        });

        gsap.to(gridImages.slice(9), {
            y: -gallerySection[2].getBoundingClientRect().top,
            duration: 0,
            ease: 'none',
        });
    });
    // END IMAGE SCROLL ANIMATION
};