// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "./assets/images/play.svg";
let pauseImg = "./assets/images/pause.svg";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "Blue Eyes",
        source: "./assets/music/Blue Eyes (Yo Yo Honey Singh) - 128K.mp3",
        cover: "./assets/images/Blue eyes.jpg"
    },
    {
        name: "Ranjha",
        source: "./assets/music/Ranjha - Shershaah.mp3",
        cover: "./assets/images/Ranjha.jpg"
    },
    
    {
        name: "O Saathi",
        source: "./assets/music/O Saathi (320 Kbps) - DownloadMing.SE.mp3",
        cover: "./assets/images/O saathi.jpg"
    },
    {
        name: "Raataan Lambiyan ",
        source: "./assets/music/Raataan Lambiyan - Shershaah.mp3",
        cover: "./assets/images/raata.jpg"
    },
    {
        name: "Swag Se Swagat",
        source: "./assets/music/Swag Se Swagat - Tiger Zinda Hai 320Kbps.mp3",
        cover: "./assets/images/swag.jpg"
    },
    {
        name: "Tera Naam",
        source: "./assets/music/Tera Naam - Darshan Raval.mp3",
        cover: "./assets/images/tera naam.jpg"
    }
];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('h3');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()