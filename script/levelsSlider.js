var gameLevels = [
    { id:"level1" , place: "pool", levelPic:"./levels/poolLev1.png" , levelStatus:"unlock"},
    { id:"level2" , place: "pool", levelPic:"./levels/poolLev2.png" , levelStatus:"lock"},
    { id:"level3" , place: "pool", levelPic:"./levels/poolLev3.png" , levelStatus:"lock"},
    { id:"level4" , place: "pool", levelPic:"./levels/poolLev4.png" , levelStatus:"lock"},
    { id:"level5" , place: "pool", levelPic:"./levels/poolLev5.png" , levelStatus:"lock"},
    { id:"level6" , place: "pool", levelPic:"./levels/poolLev6.png" , levelStatus:"lock"},
    { id:"level7" , place: "pool", levelPic:"./levels/poolLev7.png" , levelStatus:"lock"},
    { id:"level8" , place: "pool", levelPic:"./levels/poolLev8.png" , levelStatus:"lock"},
    { id:"level9" , place: "pool", levelPic:"./levels/poolLev9.png" , levelStatus:"lock"},
    { id:"level10" , place: "pool", levelPic:"./levels/poolLev10.png" , levelStatus:"lock"},
];

let levelGallery = document.getElementById("levelGallery");
let playBtn = document.getElementById("playBtn");
let levelLeftBtn = document.getElementById("levelLeftBtn");
let levelRightBtn = document.getElementById("levelRightBtn");

for(let level = 0 ; level < gameLevels.length ; level++) {

    const levelData = gameLevels[level];

    let levels = document.createElement("div");
    levels.className = "levels";

    let levelImgCover = document.createElement("div")
    levelImgCover.className = "levelImgCover";

    let levelImg = document.createElement("img");
    levelImg.className = "levelImg";
    levelImg.src = levelData.levelPic;

    levelImgCover.appendChild(levelImg);
    levels.appendChild(levelImgCover);

    levelGallery.appendChild(levels);

    if(levelData.levelStatus === "unlock"){
        playBtn.className = "show";
    }

}

let pos = 0;

levelLeftBtn.addEventListener("click", () => {
    if (pos > 0) {
        pos -= 15; 
        levelGallery.style.left = -pos + "%"; 
        levelLeftBtn.classList.remove("hide");
    } else {
        pos = 0;
        levelGallery.style.left = -pos + "%";
        levelLeftBtn.classList.add("hide"); 
    }
});


levelRightBtn.addEventListener("click", () => {
    levelLeftBtn.className = "show";

    if (pos < 400) {
        pos += 15; 
        levelGallery.style.left = -pos + "%";
    }
    else {
        pos = 0;
        levelGallery.style.left = -pos + "%"; 
    }
});

const auMainMenu = document.getElementById("auMainMenu");

playBtn.onclick = function() {
    document.getElementById("levelsPage").className = "hide";
    document.getElementById("levelOne").className = "show";
    auMainMenu.pause();
    showLevelOne();
    auGame.play();
}

