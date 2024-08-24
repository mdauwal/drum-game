//Detecting button pressed

const allBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i< allBtn; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)
        

        
    });
}

//Detecting keyboard pressed

document.addEventListener("keydown", function(event){
    makeSound(event.key)
})

function makeSound (key) {
    switch (key) {
        case "l":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "w":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default: console.log(buttonInnerHTML);
            break;
    }

}
// 
// function add(numb1, numb2) {
//     return (numb1 + numb2);
// }

// function subtract(numb1, numb2) {
//     return (numb1 - numb2);
// }

// function multiply(numb1, numb2) {
//     return(numb1 * numb2);
// }
// function divide(numb1, numb2) {
//     return(numb1 / numb2);
// }
// function calculator(numb1, numb2, operator) {
//     return operator(numb1, numb2,add)

// }
// calculator(2,4,add);
