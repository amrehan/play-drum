for (var i = 0; i <= 6; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

// to get the value of key pressed from the keyboard we get the
// entire document and add the event addEventListener to that

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {
    switch(key) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            default:
        }
}

function buttonAnimation(currentKey) {
    var activateButton = document.querySelector("." + currentKey);

    activateButton.classList.add("pressed");

    setTimeout(function() {
        activateButton.classList.remove("pressed");
    }, 100 );
}

