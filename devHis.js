let video = document.querySelector("video");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");

play.addEventListener("click", ()=>{
    video.play();
});

pause.addEventListener("click", ()=>{
    video.pause();
});