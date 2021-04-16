window.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.page');
  const burgerBtn = document.querySelector('.menu__burger');
  const menuList = document.querySelector('.menu__list');
  const menuLink = document.querySelectorAll('.menu__link');
  const popupWrapper = document.querySelector('.popup-wrapper');
  const popup = document.querySelector('.popup');
  const btns = document.querySelectorAll('.btn');

  burgerBtn.addEventListener('click', e => {
    e.stopPropagation();
    menuList.classList.toggle("open")
  })

  menuLink.forEach(link => {
    link.addEventListener('click', e => {
      e.stopPropagation();
      menuLink.forEach(item => {
        item.classList.remove('active');
      })
      link.classList.add("active");
    })
  })
  btns.forEach(button => {
    button.addEventListener('click', e => {
      e.stopPropagation();
      togglePopup();
    })
  })
  document.body.addEventListener('click', e => {
    if(!e.path.includes(popup)){
      popupWrapper.classList.remove('popup--open');
      page.classList.remove('popup--open');
    }
  })

  function togglePopup() {
    popupWrapper.classList.toggle('popup--open');
    page.classList.toggle('popup--open');
  }
});
