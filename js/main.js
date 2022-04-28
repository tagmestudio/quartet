//-----------------------------------------------
//Swiper
//-----------------------------------------------
const toolsSwiper = new Swiper('.js-tools-slider', {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: '.js-tools-slider .swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.js-tools-slider .swiper-button-next',
    prevEl: '.js-tools-slider .swiper-button-prev',
  },
  runCallbacksOnInit: true,
  // === new change
  on: {
    slideChange: function () {
      const offer = document.querySelector('#numberSlides');
      offer.innerHTML = (this.realIndex + 1) + '/' + (this.slides.length - 2);
    }
  }
});

//-----------------------------------------------
//Projects
//-----------------------------------------------
const projectSliders = document.querySelectorAll('.project-slider');
for (let i = 0; i < projectSliders.length; i++) {
  const projectsSwiper = new Swiper(projectSliders[i].querySelector('.js-project-slider'), {
    // Optional parameters
    loop: false,
    autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: projectSliders[i].querySelector('.swiper-button-next'),
      prevEl: projectSliders[i].querySelector('.swiper-button-prev'),
    },
  });
}

//-----------------------------------------------
//MOBILE MENU
//-----------------------------------------------
document.addEventListener(
  "DOMContentLoaded", () => {
    new Mmenu("#main-nav", {
      "extensions": [
        "pagedim-black",
        "fullscreen"
      ],
      "navbars": [
        {
          "position": "top",
          "content": [
            "prev",
            "title",
            "close"
          ]
        },
        {
          "position": "bottom",
          "content": [
            "<a href='/'><img src='../img/logotype.svg' width='130px'></a>",
          ]
        }
      ],
      navbar: {
        title: " "
      },
      onClick: {close: true}
    });
  }
);

//-----------------------------------------------
// Select all links with hashes
//-----------------------------------------------
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - (getComputedStyle(document.documentElement)
            .getPropertyValue('--header-height').replace('rem', '') * 16 + 30)
        }, 1000);
      }
    }
  });

//-----------------------------------------------
// Loader
//-----------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.querySelector('.site-loader').classList.add('is-hidden');

    //-----------------------------------------------
    //Animations
    //-----------------------------------------------
    AOS.init({
      once: true,
    });

    //-----------------------------------------------
    //Load text shine animation once element appeared
    //-----------------------------------------------
    const shiningHeadings = document.querySelectorAll('[data-aos-id*="shining-heading"]');
    for (let i = 1; i < shiningHeadings.length; i++) {
      document.addEventListener('aos:in:shining-heading-' + i, ({element}) => {
        setTimeout(function () {
          shiningHeadings[i].classList.add('has-shining-heading');
          setTimeout(function () {
            shiningHeadings[i].classList.remove('has-shining-heading');
          }, 1000);
        }, 500)
      });
    }

    const heroSection = document.querySelector('#hero .text-block');
    setTimeout(function() {
      heroSection.classList.add('has-shining-heading');
      setTimeout(function () {
        heroSection.classList.remove('has-shining-heading');
      }, 1000);
    }, 500);
  }, 100)
});
