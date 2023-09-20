(() => {
    const toggleBtn = document.querySelector('#toggleBtn'),
        memberBtns = [...document.querySelectorAll('#sidebar a')],
        sidebar = document.querySelector('#sidebar');
    let isOpen = false;

    const add = (className) => {
        toggleBtn.classList.add(className);
    };

    const remove = (className) => {
        toggleBtn.classList.remove(className);
    };

    const ACTIONS = {
        true: add,
        false: remove,
    };

    barba.init({
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0,
                });
            },
            enter(data) {
                gsap.from(data.next.container, {
                    opacity: 0,
                });
            },
            after({ next }) {
                document.querySelector('#cursor_element').classList.add('hidden');

                switch (next.container.getAttribute('data-barba-namespace')) {
                    case '3kaidas':
                        init3k();
                        break;
                    case 'let-data-studio':
                        letDataStudio();
                        break;
                    case 'ok-mkt':
                        okMkt();
                        break;
                    case 'praio':
                        praio();
                        break;
                    case 'townex':
                        townex();
                        break;
                    case 'wedding-planner':
                        weddingPlanner();
                        break;
                    default:
                        window.location.href = '/';
                }
            }
        }],
    });

    window.addEventListener('load', (e) => {
        if (window.location.href.includes('index'))
            window.location.href = '/';
    });

    document.addEventListener('DOMContentLoaded', (e) => {
        const tlSidebar = new gsap.timeline({ paused: true });

        tlSidebar.to(sidebar, {
            x: 0,
            ease: 'easeInOut'
        }, 0.25)
            .reverse();

        toggleBtn.addEventListener('click', () => {
            if (!isOpen) {
                isOpen = true;
                tlSidebar.reversed(!isOpen);
                ACTIONS[isOpen]('open');
            } else {
                tlSidebar.reverse();
                isOpen = false;
                ACTIONS[isOpen]('open');
            }
        });

        memberBtns.forEach(member => {
            member.addEventListener('click', () => {
                tlSidebar.reverse();
                isOpen = false;
                ACTIONS[isOpen]('open');
            });
        });
    });
})();