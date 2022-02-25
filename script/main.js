'use strict';

const audio_tag = document.getElementById("audio");
const play_tag = document.getElementById("play");

let audio_minutes;
let audio_seconds;

play_tag.addEventListener("click", function () {
    audio_minutes = audio_tag.duration / 60;
    audio_seconds = audio_minutes % 1;
    audio_seconds = audio_seconds * 60;
    audio_minutes = Math.trunc(audio_minutes);
    audio_seconds = Math.trunc(audio_seconds);
    console.log(` duracion ${audio_minutes}:${audio_seconds}`);
    audio_tag.play();
    console.log(audio_tag.progress)
}, false);