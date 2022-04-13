/* abre fecha menu no icone: haburguer e x */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar link menu fechar menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* muda header da pagina quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})
*/

/* Testimonials carousel slider swiper */
/*const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  
  mousewheel: true,
  keyboard: true,

}); */

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  mousewheel: {
    invert: true,
  },
  keyboard: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: { 767: {
    slidesPerView: 2,
    setWrapperSize: true
  }
  }
});


/* ScrollReveal: Mostar elementos quando dar scroll na pagina */
const scrollReveal = ScrollReveal({
  orign: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100}
)

/* Botao voltar para o top */
const backToTopButtom = document.querySelector('.back-to-top')
function backToTop() {  
  if(window.scrollY >= 550) {
    //backToTopButtom.classList.remove('show1')
    backToTopButtom.classList.add('show')
  } else {
    backToTopButtom.classList.remove('show')
    //backToTopButtom.classList.add('show1')
  }
}

/* Menu ativo conforme seção ativa na pagina */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for( const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id') 

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }


  }
}






/* When Scroll */
window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})





