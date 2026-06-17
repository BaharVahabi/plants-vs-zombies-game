/*==============================   USER NAME    ==================================*/

window.onload = function() {
  var StoreName = localStorage.getItem("userName");
  if(!StoreName) {/*looking for is user name exist or not*/ 
    var getUserNameContent = document.getElementById("getUserNameContent");
    getUserNameContent.classList.add = "block";
  }

  document.getElementById("submitNameBtn").onclick = function() {
    var name = document.getElementById("name").value;
    localStorage.setItem("userName" , name);
    document.getElementById("getUserNameContent").style.display = "none";
    document.getElementById("userName").innerHTML = "Welcome " + name;
  }

  var StoredName = localStorage.getItem("userName");
  if(StoredName) {
    document.getElementById("userName").innerHTML = "Welcome " +  StoredName;
  }
}

/*==============================   ZOMBIE BLINKING    ==================================*/

const rightEay = document.getElementById("rightEay");
const leftEay = document.getElementById("leftEay");

setInterval(() => {
    rightEay.style.background = "url(././menu/frame/zombiblink/rightclose.png)"
    rightEay.style.backgroundSize = "cover";
    leftEay.style.background = "url(././menu/frame/zombiblink/leftclose.png)"
    leftEay.style.backgroundSize = "cover";

    setTimeout(() => {
        rightEay.style.background = "url(././menu/frame/zombiblink/rightopen.png)";
        rightEay.style.backgroundSize = "cover";

        leftEay.style.background = "url(././menu/frame/zombiblink/leftopen.png)"
        leftEay.style.backgroundSize = "cover";
    },1000)
} , 4000)

/*==============================   MENU BUTT SOUNDS    ==================================*/

const auMainMenuGrave = new Audio('./sound/mainmenu/gravebutton.ogg');

  const menuBut = [adventure, moreWaysToPlays];

  menuBut.forEach(index => {
  index.addEventListener('mouseover', () => {
    auMainMenuGrave.play();
  });
});