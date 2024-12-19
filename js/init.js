(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel');
  const instances = M.Carousel.init(carousels, {
    fullWidth: true,
    indicators: true
  });

  document.querySelectorAll('.carousel-container').forEach((container, index) => {
    const carousel = container.querySelector('.carousel');
    const instance = M.Carousel.getInstance(carousel);

    const dots = carousel.querySelectorAll('.dot');
    const prevArrow = container.querySelector('.carousel-arrow.prev');
    const nextArrow = container.querySelector('.carousel-arrow.next');

    function updateDots() {
      const activeIndex = instance.center;
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    }

    // Arrow click events
    prevArrow.addEventListener('click', () => {
      instance.prev();
      prevArrow.classList.add('clicked');
      nextArrow.classList.remove('clicked');
      updateDots();
    });

    nextArrow.addEventListener('click', () => {
      instance.next();
      nextArrow.classList.add('clicked');
      prevArrow.classList.remove('clicked');
      updateDots();
    });

    // Reset clicked styles after a short time
    [prevArrow, nextArrow].forEach(arrow => {
      arrow.addEventListener('transitionend', () => {
        arrow.classList.remove('clicked');
      });
    });
  });
});
