/*  game menu */
menuBtn.onclick = function () {
    gameMenuInfo.className = "show";
}
backToGameBtn.onclick = function () {
    gameMenuInfo.className = "hide";
}
i = 0;
soundBtn.onclick = function () {
    if (i == 0) {
        soundBtn.style.backgroundImage = "none";
        i = 1;
    }
    else if (i == 1) {
        soundBtn.style.backgroundImage = "url(../images/checkIcon.png)";
        i = 0;
    }
}

/* =============================  SIMPLE1  =============================== */

let totalSun = 500;
scorePlace.innerText = totalSun;

const field = document.getElementById("field");
const levelOne = document.getElementById("levelOne");
const selectCharacter = document.getElementById("selectCharacter");
let selectedPlant = null;
let selectedPlantId = null;
const flowers = [];
const zombies = [];
const allRows = [0, 1, 2, 3, 4, 5];
const waterRow = [2, 3]; // ردیف های شامل آب
const landRow = allRows.filter(row => !waterRow.includes(row)); // بگرد فقط خشکیارو بگیر
let audioTracks = {};

const plantsCharacter = [
    { id: "sunflowerSelectCharacter", pic: "sunflower.png", cursor: "url(./images/sunflowerclick.png), auto", health: 6, price: 50, place: "grass", chargif1Src: "./levels/char/good-morning.gif" },
    { id: "peaShooterSelectCharacter", pic: "peashooter.png", cursor: "url(./images/peashooterclick.png), auto", health: 6, price: 100, place: "grass", chargif1Src: "./levels/char/peashooter.gif" },
    { id: "spikeweedSelectCharacter", pic: "spikeweed.png", cursor: "url(./images/spikeweedclick.png), auto", health: 6, price: 25, place: "pool", chargif1Src: "./levels/char/tangle-kelp-idle.gif" },
    { id: "wallNutSelectCharacter", pic: "wallNut.png", cursor: "url(./images/wallNutClick.png), auto", health: 15, price: 50, place: "grass", chargif1Src: "./levels/char/wall-nut.gif" },
    { id: "spikeRockSelectCharacter", pic: "spikerock.png", cursor: "url(./images/rockweedclick.png), auto", health: 6, price: 100, place: "grass", chargif1Src: "./levels/char/rockweedclick.png" },
    { id: "lilyPadSelectCharacter", pic: "lilypad1.jpg", cursor: "url(./images/lilypadonclick.png), auto", health: 6, price: 25, place: "pool", class: "lilyPadMove", chargif1Src: "./levels/char/lily-pad-idle.gif" },
    { id: "chomperSelectCharacter", pic: "chomper.png", cursor: "url(./images/chomperclick.png), auto", health: 6, price: 150, place: "grass", chargif1Src: "./levels/char/chomper-pvz.gif" }
];

let zombiecharacters = [
    { zombieCharacterName: "regularZombie", death: 7, place: "grass" , zomEatingAnim: "eating"},
    { zombieCharacterName: "conheadZombie", death: 10, place: "grass" , zomEatingAnim: "conheadEating"},
    { zombieCharacterName: "poolZombieR", death: 7, place: "pool" , zomEatingAnim: "regularEatingPool"},
    { zombieCharacterName: "poolZombieC", death: 10, place: "pool" , zomEatingAnim: "conheadEatingPool"}
];

let gameSoundTrack = [
    {soundTrackName : "auGame", trackUrl : "./sound/levels/WateryGraves.mp3"},
    {soundTrackName : "auLose", trackUrl : "./sound/levels/05.losemusic.mp3"},
]

function showLevelOne() {
    loadAudioTracks();
/* ================================= آفتاب ================================= */

class SunManner {
    constructor(fieldElement, scoreUpdater) {
        this.fieldElement = fieldElement;
        this.scoreUpdater = scoreUpdater;
    }

    /* بارش آفتاب */

    creatSun() {
        const sun = document.createElement("div");
        sun.classList.add("sun");
        sun.style.cursor = "pointer";
        sun.style.left = `${Math.random() * 90}%`;
        sun.style.top = `${Math.random() * 90}%`;

        this.fieldElement.appendChild(sun);

        sun.addEventListener("click", () => {
            sun.remove();
            this.scoreUpdater(25);
        });

        setTimeout(() => {
            sun.remove();
        }, 20000);
    }
}

function updateSunSocre(amount) {
    totalSun += amount;
    scorePlace.innerText = totalSun;
    lockplayer();
}

const fieldSunManner = new SunManner(field, updateSunSocre);
let sunInterval = setInterval(() => {
    fieldSunManner.creatSun();
}, 13000);

/* ================================================ درست کردن کارت انتخاب کاراکتر گیاهان ==================================================== */

plantsCharacter.forEach((plant) => {
    const characterImageHolder = document.createElement("div");
    characterImageHolder.classList.add("plantsCharacterSelect");

    const characterImg = document.createElement("img");
    characterImg.src = `./images/${plant.pic}`;

    characterImageHolder.appendChild(characterImg);
    selectCharacter.appendChild(characterImageHolder);

    characterImg.addEventListener("click", () => {
        if (plant.price <= totalSun) {
            levelOne.style.cursor = plant.cursor;
            selectedPlantId = plant.id;
            console.log("Selected Plant ID:", selectedPlantId);
        }
    });
});

field.onclick = function () {
    levelOne.style.cursor = "auto";
    selectedPlant = null;
};

/* ================================ tile ساخت ================================ */

for (let line = 0; line < 6; line++) {
    for (let column = 0; column < 9; column++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.dataset.line = line;
        tile.dataset.column = column;

        let placeType = waterRow.includes(line) ? "pool" : "grass";
        tile.dataset.place = placeType;

        field.appendChild(tile);

        tile.addEventListener("click", (event) => {
            document.getElementById("auPlant").play();
            const line = parseInt(tile.dataset.line);
            const column = parseInt(tile.dataset.column);
            const tilePlace = event.target.dataset.place;

            selectedPlant = plantsCharacter.find(p => p.id === selectedPlantId);
            if (!selectedPlant) {
                console.warn("هیچ گیاهی انتخاب نشده!");
                return;
            }

            /*====== کاشتن و ساخت شی گیاه ===== */

            const flowerObj = new Flower(line, column, tile, selectedPlant);

            if (flowerObj.valid) {
                flowers.push(flowerObj);
                selectedPlant = null;
                selectedPlantId = null;
                levelOne.style.cursor = "auto";
            }
        });
    }
}

/* ================================ ساخت گیاه ================================ */

class Flower {
    constructor(row, column, parentTile, selectedPlant) {
        this.valid = false;
        this.row = row;
        this.column = column;
        this.element = null;
        this.parentTile = parentTile;
        this.selectedPlant = selectedPlant;
        this.health = selectedPlant.health;

        const isPool = parentTile.dataset.place === "pool";
        const isLandPlant = selectedPlant.place === "grass";

        /* ===== کاشتن تو آب ===== */

        if (selectedPlant.place !== "all" && selectedPlant.place !== parentTile.dataset.place) {
            if (!(isLandPlant && isPool)) {
                showErrorBorder();
                return;
            }

            const isLilyPadHere = flowers.some(f =>
                f.row === this.row &&
                f.column === this.column &&
                f.selectedPlant.id === "lilyPadSelectCharacter"
            );

            if (!isLilyPadHere) {
                showErrorBorder();
                return;
            }
        }

        if (totalSun < selectedPlant.price) {
            console.log("آفتاب کافی نیست!");
            return;
        }

        totalSun -= selectedPlant.price;
        scorePlace.innerText = totalSun;

        this.createElement();
        this.checkForSpecialBehavior();
        this.valid = true;
        lockplayer();
    }

    createElement() {
        const el = document.createElement("div");
        el.classList.add("plant");
        el.style.position = "absolute";
        el.style.backgroundImage = `url(${this.selectedPlant.chargif1Src})`;
        el.style.backgroundRepeat = "no-repeat";

        /* تنظیم موقعیت نسبت به فیلد */

        const fieldRect = field.getBoundingClientRect();
        const tileRect = this.parentTile.getBoundingClientRect();
        const tileCenterX = tileRect.left + tileRect.width / 2 - fieldRect.left;
        const tileCenterY = tileRect.top + tileRect.height / 2 - fieldRect.top;

        const flowerSize = 70;

        /* گل نره گوشه تایل بیاد وسطش */
        
        el.style.left = `${tileCenterX - flowerSize / 2}px`;
        el.style.top = `${tileCenterY - flowerSize / 2}px`;

        el.style.backgroundSize = "contain";
        el.style.width = `${flowerSize}px`;
        el.style.height = `${flowerSize}px`;
        el.style.margin = "auto";

        field.appendChild(el);
        this.element = el;
    }

    checkForSpecialBehavior() {
        if (this.selectedPlant.id === "sunflowerSelectCharacter") {
            this.startSunProduction();
        }

        if (this.selectedPlant.id === "peaShooterSelectCharacter") {
            this.peaShooterBullet();
        }
    }

    startSunProduction() {
        setInterval(() => {
            const sun = document.createElement("div");
            sun.className = "colectSun2";
            sun.style.cursor = "pointer";
            this.element.appendChild(sun);

            sun.addEventListener("click", () => {
                sun.remove();
                totalSun += 25;
                scorePlace.innerText = totalSun;
                lockplayer();
            });

            setTimeout(() => {
                if (sun.isConnected) sun.remove();
            }, 20000);
        }, 10000);
    }
    /*  تابع شلیک پی شوتر  */
    peaShooterBullet() {
        setInterval(() => {
            const hasZombieInRow = zombies.some(zombie => zombie.row === this.row && zombie.isAlive);
            if (!hasZombieInRow) return;

            let bullet = document.createElement("div");
            bullet.className = "bullet";
            this.element.appendChild(bullet);
            /* چک کردن برخورد به زامبی و برخورد */
            const interval = setInterval(() => {
                zombies.forEach(zombie => {
                    const zombieRect = zombie.element.getBoundingClientRect();
                    const bulletRect = bullet.getBoundingClientRect();

                    if (
                        bulletRect.right > zombieRect.left &&
                        bulletRect.left < zombieRect.right &&
                        this.row === zombie.row
                    ) {
                        zombie.hit();
                        bullet.remove();
                        clearInterval(interval);
                    }
                });
            }, 30);
            
            /* برای جلوگیری از بی نهایت چک شدن شرط قبلی */
            setTimeout(() => {
                if (bullet.isConnected) bullet.remove();
                clearInterval(interval);
            }, 5000);

        }, 2000);
    }

}


/* ================================ ساخت زامبی ================================ */

class Zombie{
    constructor(row , column , parentTile , zombieType) {
        this.row = row;
        this.column = column;
        this.element = null;
        this.parentTile = parentTile
        this.type = zombieType;
        this.death = zombieType.death
        this.isAlive = true;
        this.isEating = false;
        this.eatingInterval = null;
        this.moveInterval = null;
        this.zombiePos = 0;

        this.creatZombie();
    }

    creatZombie() {
        const ZombieEl = document.createElement("div");
        ZombieEl.className = this.type.zombieCharacterName;
        field.appendChild(ZombieEl);

        this.element = ZombieEl;

        this.getZombiePosition();

        this.moveZombie();
    
    }

    getZombiePosition() {
        const fieldRect = field.getBoundingClientRect(); 
        const ZombieElRect = this.parentTile.getBoundingClientRect();
        const ZombieElCenterX = ZombieElRect.left + ZombieElRect.width / 2 - fieldRect.left; /*  */
        const ZombieElCenterY = ZombieElRect.top + ZombieElRect.height / 2 - fieldRect.top;

        const ZombieSize = 130;

        Object.assign(this.element.style , {
            left : `${ZombieElCenterX - ZombieSize / 2}px`,
            top : `${ZombieElCenterY - ZombieSize / 2}px`,
            backgroundSize : "contain",
            width : `${ZombieSize}px`,
            height : `${ZombieSize}px`,
            backgroundSize: "contain"

        })
    }
    moveZombie() {
        this.moveInterval = setInterval(() => {
            if (this.isEating) return; 
    
            this.zombiePos -= 10;
            this.element.style.transform = `translateX(${this.zombiePos}px)`;
            console.log("this is pos", this.zombiePos);
    
            if (this.zombiePos <= -850) {
                this.element.remove();
                this.isAlive = false;
                clearInterval(this.moveInterval);
            }
    
            this.checkAndStartEating();
        }, 1000);
    }
    
    checkAndStartEating() {
        if (this.isEating) return;
    
        flowers.forEach(flower => {
            if (Number(flower.row) === Number(this.row)) {
                const zombieRect = this.element.getBoundingClientRect();
                const flowerRect = flower.element.getBoundingClientRect();
    
                const isTouching = (
                    zombieRect.left < flowerRect.right - 20 &&
                    zombieRect.right > flowerRect.left + 20
                );
    
                if (isTouching) {
    
                    if (flower.selectedPlant.id === "spikeweedSelectCharacter") {
                        console.log("رسید");
    
                        this.element.remove();
                        flower.element.remove();
    
                        const zIndex = zombies.indexOf(this);
                        if (zIndex !== -1) zombies.splice(zIndex, 1);
    
                        const fIndex = flowers.indexOf(flower);
                        if (fIndex !== -1) flowers.splice(fIndex, 1);
    
                        return;
                    }

                    if (flower.selectedPlant.id === "spikeRockSelectCharacter"){
                        this.hit();
                        console.log(this.death)
                        this.isEating = false;
                        this.moveZombie();
                        console.log("here")
                        return
                    }

                    if (flower.selectedPlant.id === "chomperSelectCharacter"){
                        this.element.remove();
                        const zIndex = zombies.indexOf(this);
                        if (zIndex !== -1) zombies.splice(zIndex, 1);
                        flower.element.style.backgroundImage = "url(./levels/char/chomper-eating-zombie.gif)";
                        console.log(flower.health,"chomper Health")
                        setTimeout(() => {
                            flower.element.style.backgroundImage = "url(./levels/char/chomper-pvz.gif)"
                        },10000)
                        return;
                    }
    
                    this.isEating = true;
                    clearInterval(this.moveInterval);
                    this.element.classList.add(this.type.zomEatingAnim);

                    this.eatingInterval = setInterval(() => {
                        if(this.death > 0 && this.isEating){
                            flower.health -= 0.8;
                            console.log(flower.health)

                            if (flower.health <= 0) {
                                flower.element.remove();
                                clearInterval(this.eatingInterval);
                                this.element.classList.remove(this.type.zomEatingAnim);
                                this.isEating = false;
                                this.moveZombie();
                                console.log("مره بکوشته!!");
                            }
                        }
                        else{
                           clearInterval(this.eatingInterval)
                        }
                       
                
                        
                    }, 2000);
                }
            }
        });
    }
    
    hit() {
        this.death -= 1;
        console.log("کم شد")
        if(this.death <= 0){
            this.isAlive = false;
            console.log("کوشته شد")
            this.element.remove();
            zombies = zombies.filter(zombies => zombies !== this);
        }
    }

}

function getTile(row, column) {
    return document.querySelector(`.tile[data-line='${row}'][data-column='${column}']`);
}

function spawnRandomZombie() {
    const randomZombieData = zombiecharacters[Math.floor(Math.random() * zombiecharacters.length)];
    const possibleRows = randomZombieData.place === "pool" ? waterRow : landRow;
    const randomRow = possibleRows[Math.floor(Math.random() * possibleRows.length)];

    const column = 8;
    const tile = getTile(randomRow, column);

    const newZombie = new Zombie(randomRow, column, tile, randomZombieData);
    zombies.push(newZombie);
}

let zombieInterval = setInterval(spawnRandomZombie, 10000);

function showErrorBorder() {
    document.querySelector(".waterPlantErrorAlert").style.display = "block";
    setTimeout(() => {
        document.querySelector(".waterPlantErrorAlert").style.display = "none";
    }, 3000);
}

function lockplayer() {
    let itemsPictures = document.querySelectorAll(".plantsCharacterSelect img");

    plantsCharacter.forEach((plant, index) => {
        itemsPictures[index].style.filter = (plant.price <= totalSun) ? "brightness(1)" : "brightness(0.4)";
    });
}

lockplayer();

function loadAudioTracks() {
    gameSoundTrack.forEach(track => {
        audioTracks[track.soundTrackName] = new Audio(track.trackUrl);
    })
}

function playSound(name) {
    audioTracks[name].play();
}

function stopSound(name) {
    if(audioTracks[name]) {
        audioTracks[name].pause();
    }
}

function stopGame() {
    clearInterval(sunInterval);
    clearInterval(zombieInterval);
    return;
}

function removeAllZombies() {
    zombies.forEach(zombie => {
        zombie.element.remove();
    });
    zombies.length = 0;
}
const loseMessage = document.getElementById("loseMessage");
function showLoseMessage(){
    loseMessage.style.display = "block"
}

}