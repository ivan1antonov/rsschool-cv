const wramper = document.querySelector('.wramper'),
      audioPoster = document.querySelector('.audio-poster__image'),
      buttonPlay = document.querySelector('.audio-panel__play'),
      buttonImg = document.querySelector('.audio-panel__play-img'),
      titleName = document.querySelector('.audio-panel__title-name'),
      titleSong = document.querySelector('.audio-panel__title-song'),
      prev = document.querySelector('.audio-panel__prev'),
      next = document.querySelector('.audio-panel__next'),
      audio = document.querySelector('.audio-track'),
      timeLength = document.querySelector('.audio-time__length'),
      timeCurrent = document.querySelector('.audio-time__current'),
      progressGeneral = document.querySelector('.audio-time__progress'),
      progressCurrent = document.querySelector('.audio-time__progress-box'),
      nameSongers = ['Beyonce', 'Dua Lipa'],
      nameSongs = ["Don't Hurt Yourself", "don't start now"];
let index = 0;
//Current Song
function currentSong(artist, song) {
  titleName.innerHTML = artist;
  titleSong.innerHTML = song;
  audio.src = `./song/${artist}.mp3`;
  wramper.style.backgroundImage = "url(./images/poster" + (index + 1) + ".png)";
  audioPoster.src = `./images/poster${index + 1}.png`;
};
currentSong(nameSongers[index], nameSongs[index]);
// function play
function playSong () {
  audio.play();
  buttonImg.classList.add('play');
  buttonImg.src = './images/icon/pause.png';
}
function pauseSong () {
  audio.pause();
  buttonImg.classList.remove('play');
  buttonImg.src = './images/icon/play.png';
}
buttonPlay.addEventListener('click', (e) => {
  const isPlaying = buttonImg.classList.contains('play');

  if (isPlaying){
    pauseSong ();
  } else {
    playSong ();
  }
});
// Next
function nextSong(){
  index ++;
  if(index > nameSongers.length - 1){
    index = 0;
  }
  currentSong(nameSongers[index], nameSongs[index]);
  playSong ();
}
// Prev
function prevSong(){
  index --;
  if(index < 0){
    index = nameSongers.length - 1;
  }
  currentSong(nameSongers[index], nameSongs[index]);
  playSong ();
}
prev.addEventListener('click', () => prevSong());
next.addEventListener('click', () => nextSong());
// Play Line

function changeLine (e) {
  const {duration, currentTime} = e.srcElement;

  timeCurrent.innerHTML = `${Math.round(currentTime / 60)}:${Math.round(currentTime % 60)}`;
//   const min = Math.round((e.srcElement.duration) / 60);
// const sec = Math.ceil(e.srcElement.duration) % 60;
  timeLength.innerHTML = `${Math.round(duration / 60)}:${Math.round(duration % 60)}`;
  const lineProcent = (100 - (currentTime / duration) * 100);
  progressCurrent.style.width = `${lineProcent}%`;
}
audio.addEventListener('timeupdate', changeLine);
// Click change line
function setChangeLine(e) {
  const width = e.srcElement.clientWidth;
  const clickLine = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = ((clickLine / width) * duration);
}
progressGeneral.addEventListener('click', setChangeLine);
