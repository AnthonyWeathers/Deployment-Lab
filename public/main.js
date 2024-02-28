const showAni = document.getElementById('showAnimation');
const video = document.getElementById('video');


const showAniHandler = e => {
    video.classList.toggle('hidden')
    if(showAni.textContent === 'Show Video') {
        //video.classList.remove('hidden')
        showAni.textContent = 'Hide Video'
    } else {
        //video.classList.add('hidden')
        showAni.textContent = 'Show Video'
    }
}

showAni.addEventListener('click', showAniHandler);