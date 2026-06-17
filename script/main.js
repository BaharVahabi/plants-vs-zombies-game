let progressTimer = 10;
let progress = 0;

function progressline() {
    if(progressTimer > 0) {
        progressTimer--;
        progress += 10;
        document.getElementById("progress-timer").textContent = progressTimer;
        document.querySelector(".inner-progress").style.width = progress + "%";
    }
    if (progressTimer === 0) {
        let progressText = document.querySelector(".progress-text");
        progressText.textContent = "Click here to start!";
        progressText.style.cursor = "pointer";
    
        progressText.onclick = function() {
            document.getElementById("start-page").classList.add("hide");
            document.getElementById("menuPage").className = "show";
        };
    }
}
setInterval(progressline, 1000);

auMainMenu.play();
