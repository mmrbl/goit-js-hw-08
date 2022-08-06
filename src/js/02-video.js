import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

//записую в локальне сховище поточний час. throttle встановлює крок в 1 секунду

let secondCounter;

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  secondCounter = data.seconds;
  localStorage.setItem('videoplayer-current-time', secondCounter);
}

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}
