var secondSwiper = new Swiper(".swiper-containerr", {
   /* Use 'coverflow' effect */
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
  // centeredSlides: false,
  // coverflowEffect: {
  //   rotate: 0, /* Set rotation to 0 to disable rotation */
  //   stretch: 0, /* Adjust stretching effect as needed */
  //   depth: 0, /* Adjust depth effect as needed */
  //   modifier: 0,
  //   slideShadows: true
  // }
})


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
    300:{
      slidesPerView: 1.10,
      spaceBetween: 20
    },

    680:{
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
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // },
  pagination: {
    el: ".swiper-pagination",
  },
});

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

const options = {
  root: null,
  threshold: 0.25,
  // rootMargin,
}

const observing = new IntersectionObserver(function(entries, observer){
  entries.forEach(function(entry){
    if (entry.isIntersecting){
        const target = entry.target;
        
        items.forEach((item)=>{
          item.classList.remove("current");
          if(target.dataset.id === item.getAttribute("id")){
            console.log(item.getAttribute("id"))
            
            item.classList.add("current")
          }
          else{
            item.classList.remove("current")
          }
        })
    }
  })
}, options)

sections.forEach((section) =>{
  observing.observe(section)
});

portfolio.addEventListener("click", function(e){
  const button = e.target.dataset.id;
  console.log("buttton is clicked")
  console.log(button)
  if (button){
    buttons.forEach(function(button){
      button.classList.remove("current")
      e.target.classList.add("current")
    })
    containers.forEach(function(container){
      container.classList.remove("active");
    });
      const containerr = document.getElementById(button);
      containerr.classList.add("active")
  }
})

window.addEventListener("scroll", ()=>{
  const hero = document.querySelector(".hero");
  const heroSecond = document.querySelector(".hero-second-part");
  if (window.innerWidth > 768 && mainHeader.classList.contains("fixed")){
    console.log("love")
    heroSecond.classList.add("fixed")
    hero.classList.add("fixed")
  }
  else{
    heroSecond.classList.remove("fixed")
    hero.classList.remove("fixed")
  }
  const navHeight = mainHeader.getBoundingClientRect().height;
  const windowHeight = window.scrollY;
  if( windowHeight > navHeight){
    mainHeader.classList.add("fixed")
  }
  else{
    mainHeader.classList.remove("fixed")
  }

  items.forEach(function(item){
    item.addEventListener("click", function(e){
      e.preventDefault();
      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id)
      let position = element.offsetTop;
      
      if (mainHeader.classList.contains("fixed") && window.innerWidth > 768){
        position = position - navHeight;
      }
      if(window.innerWidth > 768 && !mainHeader.classList.contains("fixed") ){
        position = position + navHeight/2;
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

hamburgers.addEventListener("click", function(){
  fullWidthNav.classList.toggle("toggled");
  if (fullWidthNav.classList.contains("toggled")){
    clicked.style.display = "block";
    unclicked.style.display = "none";
  }
  else{
    clicked.style.display = "none";
    unclicked.style.display = "block";
  }
  items.forEach((item)=>{
    item.addEventListener("click", function(){
      fullWidthNav.classList.remove("toggled");
      unclicked.style.display = "block";
      clicked.style.display = "none";

    })
  })
})

const docs = document.querySelectorAll(".observing");
const choice = {
  root: null,
  threshold: 0.1,
}

const slideIn = new IntersectionObserver((entries, observer)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting){
      entry.target.classList.add("looking")
    }
    else{
      // entry.target.classList.remove("looking")
    }

  })
}, choice);

docs.forEach((doc)=>{
  slideIn.observe(doc);
  
})
