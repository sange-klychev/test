window.addEventListener('DOMContentLoaded', function() {

  // >> button animation

  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.onmousemove = function (e) {

      let x = e.pageX - e.target.offsetLeft;
      let y = e.pageY - e.target.offsetTop;
  
      e.target.style.setProperty('--x', x + 'px');
      e.target.style.setProperty('--y', y + 'px');
    };
  })

  // << button animation

  // >> custom cursor

  const body = document.body;
  const circle = document.querySelector('.circle-cursor');

  const getPosition = e => {
    let x = e.clientX;
    let y = e.clientY;

    circle.style.left = `${x}px`
    circle.style.top = `${y}px`
  }

  body.addEventListener('mousemove', e => {
    getPosition(e);
  })

  // << custom cursor

  // >> tagline transform

  const tagline = document.querySelector('.tagline');
  
  const transformX = e => {
    let x = e.clientX - body.clientWidth/2;

    tagline.style.transform = `translateX(${-x/2}px)`;
  }
  tagline.addEventListener('mousemove', e => {
    transformX(e);
  })

  // << tagline transform
  
});