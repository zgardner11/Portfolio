// remove video thumbnail from cinema page on hover

let videoThumbs = document.querySelectorAll('.video-thumbnail');

videoThumbs.forEach(function(videoThumb){
    console.log("videoThumb: ", videoThumb);

    videoThumb.addEventListener("mouseover", 
    videoThumb.style.display = "none")
})

