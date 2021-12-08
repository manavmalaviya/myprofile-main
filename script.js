gsap.from('h1', {opacity: 0, duration: .7, y: -50, stagger: 0.6})
gsap.from('a', {opacity: 0, duration: .7, x: -50,  stagger: 0.3})
gsap.from('.home__img', {opacity: 0, duration: .7, x: 50, delay: .6})



gsap.registerPlugin(ScrollTrigger)
gsap.from('.skills__html',  {
    scrollTrigger:  {
     trigger: 'skills__html',
     scrub: '7',
     
    },
    x: -500,
    opacity: 0,
    duration: 0.7,
   
})

gsap.from('.skills__css',  {
    scrollTrigger: {
     trigger: '.skills__css',
     scrub: '5'
    },
    x: -500,
    opacity: 0,
    duration: 0.7,
    delay: 0.3,
    
})

gsap.from('.skills__js',  {
    scrollTrigger: {
        trigger: '.skills__js',
        scrub: '7'
    },
    x: -500,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    toggleActions: 'restart'
})



gsap.from('.skills__ux',  {
    scrollTrigger: {
    trigger: '.skills__ux',
    scrub: '7'
     },
    x: -500,
    opacity: 0,
    duration: 0.7,
    delay: 0.7,
    toggleActions: 'restart'
})



const section2 = document.getElementById('about');
const image = document.querySelector('.about__img');
const title = document.querySelector('.about__subtitle');
const text = document.querySelector('.about__text');

const options = {
    threshold: 0.5
}


const observer = new IntersectionObserver(function(entries){
entries.forEach(entry => {
    if (entry.isIntersecting) {
        text.style.transition = '900ms'
        text.classList.remove('gain');
        title.style.opacity = 1
        image.style.transition = '600ms';
        image.classList.remove('transform')
    }else {
        text.style.transition = '300ms'
        text.classList.add('gain');
        title.style.opacity = 0
        image.classList.add('transform')
    }
})
}, options)

observer.observe(section2);



