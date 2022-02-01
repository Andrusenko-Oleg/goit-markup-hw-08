(() => {
            const refs = {
                openMenuBtn: document.querySelector(".navigation__btn"),
                closeMenuBtn: document.querySelector(".mob-menu__cloze"),
                menu: document.querySelector(".mob-menu"),
            };

            refs.openMenuBtn.addEventListener("click", toggleMenu);
            refs.closeMenuBtn.addEventListener("click", toggleMenu);

            function toggleMenu() {
                refs.menu.classList.toggle("is-hidden");
            }
        })();