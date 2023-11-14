for(var i = 0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playaudio(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
    
}

document.addEventListener("keydown", function(event){
    playaudio(event.key);
    buttonAnimation(event.key);
})

function playaudio(value){

    if(value == "w"){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if(value == "a"){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if(value == "s"){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    else if(value == "d"){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    else if(value == "j"){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    else if(value == "k"){
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
    else if(value == "l"){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }

}

function buttonAnimation(value){
    document.querySelector("." + value).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + value).classList.remove("pressed");
    }, 80);

}




