const breakpoint = window.matchMedia('(min-width:1024px)');

const initMenu = () => {
  const header = document.querySelector('.header');

  if (!header) {
    return;
  }

  const isToggleElement = (element) => Boolean(element.closest('.header__toggle'));
  const isMenuOpened = () => header.classList.contains('is-opened');

  const closeMenu = () => {
    header.classList.remove('is-opened');
  };

  const openMenu = () => {
    header.classList.add('is-opened');
  };

  const toggleMenu = () => {
    if (isMenuOpened()) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const onDocumentClick = (evt) => {
    const target = evt.target;
    if (!header) {
      return;
    }

    if (isToggleElement(target)) {
      toggleMenu();
    }

    const lists = header.querySelectorAll('.main-nav__sublist');

    lists.forEach((el)=> {
      el.classList.remove('is-opened');
    });

    if (target.closest('.main-nav__link--with-sub')) {
      const parent = target.closest('.main-nav__item--with-sub');
      const subList = parent.querySelector('.main-nav__sublist');

      evt.preventDefault();

      if (breakpoint.matches) {
        subList.classList.toggle('is-opened');
      } else {
        subList.classList.remove('is-opened');
      }

    }
  };

  document.addEventListener('click', onDocumentClick);
};

export {initMenu};
