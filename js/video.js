var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log('auto play is set to' + video.autoplay)
	console.log('loop is set to' + video.loop)

});

let volume = document.querySelector("#volume");
let volumeslider = document.querySelector("#slider");
let playbutton = document.querySelector("#play");
let pausebutton = document.querySelector("#pause");

playbutton.addEventListener("click", function() {
        video.play();
        // video.volume = 1;
        volume.textContent = volumeslider.value + "%";
});

pausebutton.addEventListener("click", function() {
        video.pause();
        // video.volume = 0;
        volume.textContent = "0%";
});

let slowdown = document.querySelector("#slower");
let speedup = document.querySelector("#faster");

slowdown.addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log(video.playbackRate);
});

speedup.addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log(video.playbackRate);
});

let skip = document.querySelector("#skip");

skip.addEventListener("click", function() {
        video.currentTime += 10;
        if (video.currentTime >= video.duration) {
                video.currentTime = 0;
        }
        console.log(video.currentTime);
});

let mute = document.querySelector("#mute");

mute.addEventListener("click", function() {
        if (video.muted == false) {
                video.muted = true;
                mute.textContent = "Unmute";
        }
        else {
                video.muted = false;
                mute.textContent = "Mute";
        }
});

volumeslider.addEventListener("change", function() {
        video.volume = volumeslider.value / 100;
        volume.textContent = volumeslider.value + "%";
        console.log(video.volume);
});

let oldschool = document.querySelector("#vintage");

oldschool.addEventListener("click", function() {
        video.classList.add("oldSchool");
});

let original = document.querySelector("#orig");

original.addEventListener("click", function() {
        video.classList.remove("oldSchool");
});

