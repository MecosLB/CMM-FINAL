const weddingPlanner = () => {
    const matchMedia = gsap.matchMedia();

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
    gsap.from(document.querySelector('#slogan h1'), {
        scrollTrigger: {
            trigger: '#slogan h1',
            toggleActions: 'play none none reset',
        },
        duration: 1,
        clipPath: 'inset(0% 50%)',
        ease: 'easeInOut',
    });
    // END SLOGAN ANIMATION

    // INFORMATION ANIMATION
    const tlContent = gsap.timeline({
        scrollTrigger: {
            trigger: '#information',
            start: 'top',
            end: '2000px',
            scrub: 1,
            pin: true,
        }
    }),
        tlDecorator = gsap.timeline({
            scrollTrigger: {
                trigger: '#information .content',
                start: 'top',
                end: '2000px',
                scrub: 1,
                // pin: true,
            }
        });

    tlContent.from('#information .text', {
        y: 20,
        autoAlpha: 0,
        stagger: 2,
    }, 0)
        .to('#information .text', {
            y: 0,
            autoAlpha: 0,
            stagger: 2,
        }, 1);

    tlDecorator.from('#information .decorator', {
        y: '-100%',
        stagger: 2,
    })
        .to('#information .decorator', {
            y: '100%',
            stagger: 2,
        });
    // END INFORMATION ANIMATION

    // GALLERY ANIMATION
    matchMedia.add('(max-width: 1279px)', () => {
        // FIRST ROW
        gsap.from('#gallery .left.first', {
            scrollTrigger: {
                trigger: '#gallery .left.first',
                end: '0',
                scrub: 1,
            },
            x: '100%',
            delay: 1,
        });

        gsap.from('#gallery .right.first', {
            scrollTrigger: {
                trigger: '#gallery .right.first',
                end: '0',
                scrub: 1,
            },
            x: '-100%',
            delay: 1,
        });

        // SECOND ROW
        gsap.from('#gallery .left.second', {
            scrollTrigger: {
                trigger: '#gallery .left.second',
                end: '0',
                scrub: 1,
            },
            x: '100%',
            delay: 1.5,
        });

        gsap.from('#gallery .right.second', {
            scrollTrigger: {
                trigger: '#gallery .right.second',
                end: '0',
                scrub: 1,
            },
            x: '-100%',
            delay: 1.5,
        });

        // THIRD ROW
        gsap.from('#gallery .left.last', {
            scrollTrigger: {
                trigger: '#gallery .left.last',
                end: '0',
                scrub: 1,
            },
            x: '100%',
            delay: 2,
        });

        gsap.from('#gallery .right.last', {
            scrollTrigger: {
                trigger: '#gallery .right.last',
                end: '0',
                scrub: 1,
            },
            x: '-100%',
            delay: 2,
        });
    })

    matchMedia.add('(min-width: 1280px)', () => {
        // FIRST ROW
        gsap.from('#gallery .left.first', {
            scrollTrigger: {
                trigger: '#gallery .left.first',
                end: 'top',
                scrub: 1,
            },
            x: '100%',
        });

        gsap.from('#gallery .right.first', {
            scrollTrigger: {
                trigger: '#gallery .right.first',
                end: 'top',
                scrub: 1,
            },
            x: '-100%',
        });

        // SECOND ROW
        gsap.from('#gallery .left.second', {
            scrollTrigger: {
                trigger: '#gallery .left.second',
                end: 'top',
                scrub: 1,
            },
            x: '100%',
        });

        gsap.from('#gallery .right.second', {
            scrollTrigger: {
                trigger: '#gallery .right.second',
                end: 'top',
                scrub: 1,
            },
            x: '-100%',
        });

        // THIRD ROW
        gsap.from('#gallery .left.last', {
            scrollTrigger: {
                trigger: '#gallery .left.last',
                end: 'top',
                scrub: 1,
            },
            x: '100%',
        });

        gsap.from('#gallery .right.last', {
            scrollTrigger: {
                trigger: '#gallery .right.last',
                end: 'top',
                scrub: 1,
            },
            x: '-100%',
        });
    })
    // END GALLERY IMAGE
};