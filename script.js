let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx bx-menu');
    navbar.classList.toggle('active');
}

// window.onscroll = () => {
//     menu.classList.remove('bx bx-menu');
//     navbar.classList.remove('active');
// }

window.onscroll = () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
};

menu.onclick = () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
};

// Typing text code //
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight gain', 'Fat loss', 'weight lifting'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
    const socialSection = document.querySelector(".social");

    // joinbtn for the navbar


    document.getElementById("joinUsBtn").addEventListener("click", function(event) {
        event.preventDefault(); 
        window.open("https://www.instagram.com/era_of_shekar/", "_blank"); 
    });

    document.getElementById("joinUsBtn2").addEventListener("click", function(event) {
        event.preventDefault(); 
        window.open("https://www.instagram.com/era_of_shekar/", "_blank"); 
    });

     const instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com/era_of_shekar/";
    instagramLink.target = "_blank";
    instagramLink.innerHTML = "<i class='bx bxl-instagram'></i>";
    socialSection.appendChild(instagramLink);

    const youtubeLink = document.createElement("a");
    youtubeLink.href = "https://www.youtube.com/@harpyvlogs";
    youtubeLink.target = "_blank";
    youtubeLink.innerHTML = "<i class='bx bxl-youtube'></i>";
     socialSection.appendChild(youtubeLink);


    //  registeration forms
    const registerButtons = document.querySelectorAll(".plans .box a");
    registerButtons.forEach((button) => {
        button.href = "https://forms.gle/EeEEZWEEiXkLRF2C6";
        button.target = "_blank";
    });

    const joinUsButton = document.querySelector(".nav-btn");
    if (joinUsButton) {
        joinUsButton.href = "https://forms.gle/EeEEZWEEiXkLRF2C6";
        joinUsButton.target = "_blank";
    }

    const homeJoinButton = document.querySelector(".home-content .btn");
    if (homeJoinButton) {
        homeJoinButton.href = "https://forms.gle/EeEEZWEEiXkLRF2C6";
        homeJoinButton.target = "_blank";
    }
});


 function initCarousel(carouselId) {
    const track = document.querySelector(`#${carouselId} .carousel-track`);
    let currentIndex = 0;
    const totalImages = track.children.length;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      track.style.transform = `translateX(-${currentIndex * 50}%)`;
    }, 1600); // 1s display + 0.6s transition = 1.6s per image
  }
  initCarousel('carousel1');
  initCarousel('carousel2');
  initCarousel('carousel3');




        (function() {
            var qs,js,q,s,d=document,
            gi=d.getElementById,
            ce=d.createElement,
            gt=d.getElementsByTagName,
            id="typef_orm_share",
            b="https://forms.gle/EeEEZWEEiXkLRF2C6";
            if(!gi.call(d,id)) {
                js=ce.call(d,"script");
                js.id=id;
                js.src=b+"embed.js";
                q=gt.call(d,"script")[0];
                q.parentNode.insertBefore(js,q)
            }
        })()
    







