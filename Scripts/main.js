// Hamburger menu for mobile navigation

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navlinks-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// Drop down items

function toggleClass( element ) {
    let data = 'dataHeader hidden';

    if ( element.className == data){
        element.className = data.replace('hidden', 'active');
    } else {
        element.className = data;
    }
}

// horizontal scrolling

// toggle video controls


// const videos = document.querySelectorAll("video")

// for (video of videos) {
//     video.onmouseover(
//         "mouseover",
//         (event) => {
//             event.video.toggleAttribute("controls");

//             console.log("yes");
//         }
//     );
    
// }






