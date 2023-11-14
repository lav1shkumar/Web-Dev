var img1 = "images/dice" + Math.floor(1+(Math.random()*6)) +".png";
var img2 = "images/dice" + Math.floor(1+(Math.random()*6)) +".png";
document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

if(img1 > img2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(img2 > img1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩 Draw, Both Won! 🚩";
}