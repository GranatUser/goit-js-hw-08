import Player from '@vimeo/player';
import Lodash from 'lodash';



const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', Lodash.throttle((data) => {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
    console.log(data.seconds);
}, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});

