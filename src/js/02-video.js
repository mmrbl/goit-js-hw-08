import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

//записую в локальне сховище поточний час. throttle встановлює крок в 1 секунду
const onPlay = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

//розпарсив час, який записався у стрічках 9-10
const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
//
player.setCurrentTime(currentTime);

player.on('timeupdate', onPlay);
