const praio = () => {
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

    // DECORATOR ANIMATION
    gsap.from(document.querySelector('#decorator'), {
        scrollTrigger: {
            trigger: '#decorator',
            onEnter: () => {
                if(!window.location.href.includes('praio')) return;
                
                setTimeout(() => {
                    document.querySelector('#decorator .color-img').classList.add('paint-animation');
                }, 1000);
            },
            onLeaveBack: () => {
                if(!window.location.href.includes('praio')) return;
                
                document.querySelector('#decorator .color-img').classList.remove('paint-animation');
            },
        },
    });
    // END DECORATOR ANIMATION

    // GALLERY ANIMATION
    const tlGallery = gsap.timeline({
        scrollTrigger: {
            trigger: '#gallery',
            toggleActions: 'play none none reset',
        },
        ease: 'easeInOuT',
    });

    const galleryCont = gsap.utils.toArray('#gallery .bg-img'),
        galleryImg = gsap.utils.toArray('#gallery .bg-img .img');

    for (let i = 0; i < galleryCont.length; i++) {
        tlGallery.fromTo(galleryImg[i], {
            scale: 0.8,
        }, {
            scrollTrigger: {
                trigger: galleryCont[i],
                toggleActions: 'play none none reset',
                end: 'top',
                scrub: 1,
            },
            scale: 1,
        });
    }
    // END GALLERY ANIMATION
};