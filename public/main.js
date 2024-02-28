const showAni = document.getElementById('showAnimation');
const video = document.getElementById('video');
const showSong = document.getElementById('showSong');
const song = document.getElementById('song');


const showAniHandler = e => {
    video.classList.toggle('hiddenVideo')
    if(showAni.textContent === 'Show Video') {
        //video.classList.remove('hidden')
        showAni.textContent = 'Hide Video'
    } else {
        //video.classList.add('hidden')
        showAni.textContent = 'Show Video'
    }
}

const showSongHandler = e => {
    song.classList.toggle('hiddenSong')
    if(showSong.textContent === 'Show Song') {
        //video.classList.remove('hidden')
        showSong.textContent = 'Hide Song'
    } else {
        //video.classList.add('hidden')
        showSong.textContent = 'Show Song'
    }
}

showAni.addEventListener('click', showAniHandler);
showSong.addEventListener('click', showSongHandler);