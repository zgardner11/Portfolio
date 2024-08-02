// let videoThumbs = document.querySelectorAll('.video-thumbnail');

// videoThumbs.forEach(function(videoThumb){
//     console.log("videoThumb: ", videoThumb);

//     videoThumb.addEventListener("mouseover", 
//     videoThumb.style.display = "none")
// })

document.getElementById('video').onclick = function () {
    document.getElementById('video').play();
};