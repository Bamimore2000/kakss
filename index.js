const builderSwiper = sliderElm => {
  return new Swiper(`#${sliderElm.id}`, {
    slidesPerView: 2,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    clickable: true,
    centeredSlides: true,
    spaceBetween: 30,
    breakpoints: {
      200: {
        slidesPerView: 1
      },
      300: {
        spaceBetween: 30,
        slidesPerView: 2,
      },

      600: {
        spaceBetween: 36
      },
      700: {
        spaceBetween: 50,
      },
      800: {
        spaceBetween: 55,
        slidesPerView: 3,
      },
    },
    loop: true,
  })
};

const allSliders = document.querySelectorAll(".cont");
console.log(allSliders);



allSliders.forEach(slider => {
  builderSwiper(slider)
});

var swiper = new Swiper("#swiper1", {
  effect: "slide",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200: {
      slidesPerView: 1
    },
    300: {
      slidesPerView: 1.04,
      spaceBetween: 10
    },

    680: {
      slidesPerView: 1.25,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },

  pagination: {
    el: ".swiper-pagination",
  },
});
const slidesForTestimonials = document.querySelectorAll("#swiper1 .swiper-slide");
const buttons = document.querySelectorAll(".btns");
const portfolio = document.getElementById("portfolio")
const containers = document.querySelectorAll(".cont")
const mainHeader = document.querySelector(".full-width-nav")
const contact = document.getElementById("#contact");
const items = document.querySelectorAll(".item")
const sections = document.querySelectorAll(".section")
const hamburgers = document.querySelector(".hamburger-container")
const clicked = document.querySelector(".clicked")
const unclicked = document.querySelector(".unclicked")
const fullWidthNav = document.querySelector(".full-width-nav")
const heroSecondNav = document.querySelector(".hero-second-part")
const questions = document.querySelectorAll(".query");
const images = document.querySelectorAll(".swiper-slide.second img");
const expandedImageOverlay = document.querySelector(".expanded-image-overlay");

expandedImageOverlay.addEventListener("click", (e)=>{
  let currentlyClicked = e.target;
  if (currentlyClicked.id != "expandedImage"){
    expandedImageOverlay.style.display = 'none';
    document.body.style.overflow = 'visible'
  }
})

images.forEach((image) => {
  image.setAttribute('onclick', 'expandImage(this)');
  image.setAttribute('loading', 'eager')
})


function expandImage(image) {
  const expandedImage = document.getElementById('expandedImage');
  expandedImage.src = image.src;
  const expandedImageOverlay = document.getElementById('expandedImageOverlay');
  expandedImageOverlay.style.display = 'grid';
  document.body.style.overflow = 'hidden'
}

function closeExpandedImage() {
  const expandedImageOverlay = document.getElementById('expandedImageOverlay');
  expandedImageOverlay.style.display = 'none';
  document.body.style.overflow = 'visible'
}



questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const parent = e.currentTarget.parentElement.parentElement;
    questions.forEach((secondQuestion) => {
      let secondParent = secondQuestion.parentElement.parentElement;
      if (secondParent != parent) {
        secondParent.classList.remove("active")
      }
    })
    parent.classList.toggle('active');
  })
})
console.log(sections)

slidesForTestimonials.forEach((slide) => {
  slide.addEventListener("touchstart", (event) => {
    event.preventDefault();
    slide.classList.add("active")
  })
  slide.addEventListener("touchend", (event) => {
    event.preventDefault();
    slide.classList.remove("active")
  })
})
console.log(slidesForTestimonials)

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slidess");
  let currentSlideIndex = 0;
  function showNextSlide() {
    slides[currentSlideIndex].classList.remove("active");
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add("active");
    setTimeout(showNextSlide, 2000);
  }

  setTimeout(showNextSlide, 2000);

  // Show the first slide initially
  slides[currentSlideIndex].classList.add("active");
});



const options = {
  root: null,
  threshold: 0.50,
}

const observing = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {

    if (entry.isIntersecting) {
      console.log(entry)
      const target = entry.target;
      console.log(target);
      items.forEach((item) => {
        item.classList.remove("current");
        if (target.dataset.id === item.getAttribute("id")) {
          item.classList.add("current")
        }
        else {
          item.classList.remove("current")
        }
      })
    }
  })
}, options)

sections.forEach((section) => {
  observing.observe(section)
});

portfolio.addEventListener("click", function (e) {
  const button = e.target.dataset.id;
  if (button) {
    buttons.forEach(function (button) {
      button.classList.remove("current")
      e.target.classList.add("current")
    })
    containers.forEach(function (container) {
      container.style.display = "none";
    });
    const containerr = document.getElementById(button);
    containerr.style.display = "block";
  }
})

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (window.innerWidth > 768 && mainHeader.classList.contains("fixed")) {
    hero.classList.add("fixed");
  }
  else {
    hero.classList.remove("fixed");
  };

  const navHeight = mainHeader.getBoundingClientRect().height;
  const windowHeight = window.scrollY;
  if (windowHeight > navHeight) {
    mainHeader.classList.add("fixed")
    heroSecondNav.classList.add("fixed")
  }
  else {
    mainHeader.classList.remove("fixed")
    heroSecondNav.classList.remove("fixed")
  }

  items.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id)
      let position = element.offsetTop;

      if (mainHeader.classList.contains("fixed") && window.innerWidth > 768) {
        position = position - navHeight;
      }
      if (window.innerWidth > 768 && !mainHeader.classList.contains("fixed")) {
        position = position + navHeight / 2;
      }
      if (window.innerWidth <= 768) {
        position = position - navHeight;
      }
      window.scrollTo({
        left: 0,
        top: position,
      })

    })
  })


})

hamburgers.addEventListener("click", function () {
  fullWidthNav.classList.toggle("toggled");
  if (fullWidthNav.classList.contains("toggled")) {
    clicked.style.display = "block";
    unclicked.style.display = "none";
  }
  else {
    clicked.style.display = "none";
    unclicked.style.display = "block";
  }
  items.forEach((item) => {
    item.addEventListener("click", function () {
      fullWidthNav.classList.remove("toggled");
      unclicked.style.display = "block";
      clicked.style.display = "none";

    })
  })
})

const docs = document.querySelectorAll(".observing");
const choice = {
  root: null,
  threshold: 0,
}

const slideIn = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("looking")
    }
    else {
      // entry.target.classList.remove("looking")
    }

  })
}, choice);

docs.forEach((doc) => {
  slideIn.observe(doc);
})

const data = document.querySelectorAll(".data");

function renderNumber(number, location, optional, index = 0) {
  if (index <= number) {
    location.innerText = index;
    setTimeout(() => {
      renderNumber(number, location, optional, index + 1);
    }, optional)
  }
}

function using(usage) {
  usage.forEach((datum) => {
    if (datum.classList.contains("two")) {
      renderNumber(232, datum, 5)
    }
    else if (datum.classList.contains("five")) {
      renderNumber(521, datum, 2)
    }
    else if (datum.classList.contains("twenty")) {
      renderNumber(24, datum, 20)
    }
    else if (datum.classList.contains("hundred")) {
      renderNumber(100, datum, 8)
    }
  })
}

let para = {
  root: null,
  threshold: 0.80,
}
const observ = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      using([entry.target]);
      observer.unobserve(entry.target);
    }
  })

}, para);

data.forEach((datum) => {
  observ.observe(datum);
})




