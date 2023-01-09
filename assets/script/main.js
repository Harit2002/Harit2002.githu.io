/*<----======== Variable dark theme ========---->*/
const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');

/*======= MENU SHOW =======*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

/*======= MENU HIDDEN =======*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills_content');
      skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
    let  itemClass = this.parentNode.className;

    for ( i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close';
    }
    if(itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach( (el ) =>{
    el.addEventListener('click',toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/



/*==================== SERVICES MODAL ====================*/



/*==================== PORTFOLIO SWIPER ====================*/
document.getElementById('naukari').addEventListener('click',()=>{
    window.open("https://633941b5c893db24407fb5e7--vocal-naiad-2ed0c7.netlify.app/index.html");
});


var swiper = new Swiper(document.querySelector(".swiper"), {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
/*==================== TESTIMONIAL ====================*/



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 