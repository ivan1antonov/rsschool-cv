const galeryBtn = document.querySelectorAll('.galery__btn'),
      galeryItem = Array.from(document.querySelectorAll('.galery__item')),
      galeryShow = document.querySelector('.galery__btn-add'),
      menuBtn = document.querySelector('.menu__btn'),
      menuItems = document.querySelector('.menu__items'),
      galeryContent = document.querySelector('.galery__content'),
      galeryShowLink = document.querySelectorAll('.galery__btn-link'),
      galeryLink = document.querySelectorAll('.galery__btn-link'),
      galeryVideo = document.querySelectorAll('.galery__video-link'),
      galeryImg = Array.from(document.querySelectorAll('.galery__item-wramper')),
      tourstImg = document.querySelectorAll('.tourist-wramper.active'),
      video = document.querySelector('#video'),
      body = document.querySelector('body'),
      popUp = document.querySelector('.pop-up'),
      popUpAct = document.querySelector('.pop-up.active'),
      popUpImg = document.querySelector('.pop-up__img'),
      popUpVideoLink = document.querySelector('.galery__video-link'),
      popUpVideo = document.querySelector('.galery__video-popup'),
      slickDots = Array.from(document.querySelectorAll('.slick-dot span')),
      slickDot = document.querySelectorAll('.slick-dot'),
      blog = document.querySelector('.blog__items'),
      blogs = Array.from(document.querySelectorAll('.blog__item')),
      prevActive = []; 

let isMove = false,
    isVideo = false,
    currentIndex = 0,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    sliderIndex = 0,
    animationID = 0;
let category;
let galIndex = 0;

//burger

menuBtn.addEventListener('click', function(){
  menuItems.classList.toggle('active')
})

// function slide galery
const fadeIn = (el) => {
  el.style.opacity = 0
  el.style.transition = '1000ms'
  setTimeout(() => {
    el.style.opacity = 1
  }, 10);
};

const fadeOut = (el) => {
  el.style.opacity = 1
  el.style.transition = '500ms'
  el.style.opacity = 0
};

// show galeryItem

const activeSlide = (index) => {  
  for (let el of galeryItem) {
    el.classList.remove('active')
  }
  galeryItem[index].classList.add('active');
};

const clearMoreGalery = () => {
  setTimeout(() => {
    prevActive.forEach((el) => {
      el.classList.remove('active')
    });
    prevActive.length = 0    
  }, 500);
}

// choose galery btn
for(let i = 0; i < galeryBtn.length; i++){  
  galeryBtn[i].addEventListener('click', () => {
    clearMoreGalery()
    if (i === 0) {
      fadeOut(galeryContent)
      galeryBtn.forEach((el) => {
        el.classList.add('active')
      })     
      for (let i = 0; i < galeryItem.length; i++) {
        setTimeout(() => {
          fadeIn(galeryContent);
          galeryItem[i].classList.add('active');
        }, 500);     
      }
    } else {
      fadeOut(galeryContent)
      galeryBtn.forEach((el) => {
        el.classList.remove('active')
      })
      setTimeout(() => {
        fadeIn(galeryContent);
        activeSlide(i - 1)
      }, 500);   
      galeryBtn[i].classList.add('active');
    }
    galindex = i
    galeryShow.classList.add('active')
  });
}

//show add galery
galeryShow.addEventListener('click', function(event){
  console.log(prevActive)
  fadeOut(galeryContent)
  galeryShow.classList.remove('active')
  galeryImg.forEach((el) => {
    if(!el.classList.contains('active')) {
      prevActive.push(el)
      setTimeout(() => {
        fadeIn(galeryContent);
        el.classList.add('active')
      }, 500);
    }
  });
})

//pop-up
let popToggle = () => {
  [body, popUp].forEach(el => {
    el.classList.toggle('active')     
  })
}
for (let i = 0; i < galeryItem.length; i++) {
  galeryItem[i].addEventListener('click', function(event){
    event.stopPropagation()
    setTimeout(() => {
      popUpImg.src = event.srcElement.offsetParent.firstElementChild.currentSrc        
    }, 10);
    popToggle()
  });
}  
  
document.addEventListener('click', (event) => {  
  event.stopPropagation()
  if(popUp.classList.contains('active') && event){
    popToggle()
  }
});

//popup video
const videoToggle = (event) => {  
  event.stopPropagation()
  setTimeout(() => {
    [popUpVideo, body].forEach((el) => {
      el.classList.toggle('active')
    });    
  }, 10);

}

document.addEventListener('click', function(event) {
  if (isVideo && (event.target.className.length !== 0)) {
    videoToggle(event)
    isVideo = false    
    video.pause()
  }
})

popUpVideoLink.addEventListener('click', function(event) {
  isVideo = true
  videoToggle(event)
  video.play()
})



//slick-slider
function activeDots () {
  slickDot.forEach(el => {
    el.classList.remove('active')
  });
  slickDot[sliderIndex].classList.add('active')
}

for (let i = 0; i < slickDots.length; i++) {
  slickDots[i].addEventListener('click', (event) => {
    event.stopPropagation()
    sliderIndex = i
    activeDots ()
    setPositionByIndex()
  });  
}

//touch slide
blogs.forEach((slide, index) => {
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchmove', touchMove)
  slide.addEventListener('touchend', touchEnd)

  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mousemove', touchMove)
  slide.addEventListener('mouseup', touchEnd)
});

function touchStart(index) {
  return function(event) { 
    console.log(event)
    currentIndex = index
    startPos = getPos(event)
    isMove = true
  }
}

function touchMove (event) {
  if (isMove){
    const currentPosition = getPos(event)
    currentTranslate = prevTranslate + currentPosition - startPos
    setPosition()
  }
}

function touchEnd () {
  isMove = false
  const moveBy = currentTranslate - prevTranslate
  if (moveBy < -100 && currentIndex < blogs.length - 1) {
    sliderIndex++
  }
  if (moveBy > 100 && currentIndex > 0) {
    sliderIndex--
  }
  activeDots()
  setPositionByIndex()
}

function getPos (event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation () {
  setPosition()
  if (isMove) requestAnimationFrame (animation)
}

function setPosition () {
  blog.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = sliderIndex * -blog.offsetWidth
  prevTranslate = currentTranslate
  setPosition ()
}


