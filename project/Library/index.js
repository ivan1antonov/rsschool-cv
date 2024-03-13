const sliderNext = document.querySelector('.arrow-right'),
      sliderPrev = document.querySelector('.arrow-left'),
      aboutSlider = document.querySelector('.about-slider'),
      dots = document.querySelectorAll('.about-dots__item'),
      drop = document.querySelector('.drop-menu'),
      profile = document.querySelector('.header-button__img');

let position = 0,
    dotIndex = 0,
    burger = document.querySelector('.header-burger'),
    headerList = document.querySelector('.header-list');  

//FUNCTIONS
//burger active
burger.addEventListener('click', function(){
  burger.classList.toggle('active');
  headerList.classList.toggle('active');  
});
//burger close
document.addEventListener('click', function(event){
  if(event.target.className !== 'header-list active' && event.target.className !== 'header-burger__img'){
    burger.classList.remove('active');
    headerList.classList.remove('active');
  };
});
//drop-menu
profile.addEventListener('click', function () {
    drop.classList.toggle('active');
  });
// drop-menu-close
document.addEventListener('click', function(event){
  console.log(event);
    // if(event.target.className !== 'drop-menu active' && event.target.className !== 'header-button__img'){
    // drop.classList.remove('active');
});
//slider list dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if(aboutSlider.offsetWidth > 450){
        position = 33 * index;
      } else{
        position = 101.5 * index;
      }    
    aboutSlider.style.left = -position + '%';
    dotIndex = index;
    activeSlide(dotIndex)
    });
});
//next slide
const arrowNext = () => {
  if (position < (dots.length - 1) * 101.5){
    position += 101.5;
    dotIndex++
  } else {
    position = 0;
    dotIndex = 0;
  }  
  aboutSlider.style.left = -position + '%';
  activeSlide(dotIndex)
};
//prev slide
const arrowPrev = () => {
  if (position > 0){
    position -= 101.5;
    dotIndex--;
  } else {
    position = (dots.length - 1) * 101.5;
    dotIndex = (dots.length - 1);
  }
  aboutSlider.style.left = -position + '%';
  activeSlide(dotIndex)
};
//active dots
const activeSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove('active');
  }
  dots[index].classList.add('active');
};

sliderNext.addEventListener('click', arrowNext);
sliderPrev.addEventListener('click', arrowPrev);
//FAVORITES

const tabs = document.querySelectorAll('.favorites-season__form-label'),
      content = document.querySelectorAll('.favorites-season__books-box');
let favIndex = 0;

const fadeIn = (index) => {
  content[index].style.opacity = 0;
  content[index].style.transition = '500ms';
    setTimeout(() => {
      content[index].style.opacity = 1;
    }, 10);
};

const fadeOut = (index) => {
  content[index].style.opacity = 1;
  content[index].style.transition = '500ms';
  content[index].style.opacity = 0;
};
//tabs
for (let i = 0; i < tabs.length; i++) {  
  tabs[i].addEventListener('click', (event) => {
    fadeOut(favIndex);
    for (let tab of tabs){
      tab.classList.remove('active');
    }
    tabs[i].classList.add('active');
    favIndex = i;
    setTimeout(activeContent, 500, i);
  });  
};
//content tabs
const activeContent = (index) => { 
  fadeIn(index); 
  for (let text of content){     
    text.classList.remove('active');    
  }  
  content[index].classList.add('active'); 
};


console.log('valid - 20\n semantic - 32\n maket - 108\n general requirements - 40\n total - 200');