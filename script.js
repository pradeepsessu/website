let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx bx-menu');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx bx-menu');
    navbar.classList.remove('active');
}

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
        window.open("https://www.instagram.com/harpyfitco", "_blank"); 
    });

    document.getElementById("joinUsBtn2").addEventListener("click", function(event) {
        event.preventDefault(); 
        window.open("https://www.instagram.com/harpyfitco", "_blank"); 
    });

     const instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com/harpyfitco";
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
