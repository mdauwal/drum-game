const allBtn = document.querySelectorAll(".drum").length;
for (let i = 0; i< allBtn; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        alert("I got clicked!");
        firstBtn
    });
}

function add(numb1, numb2) {
    return (numb1 + numb2);
}

function subtract(numb1, numb2) {
    return (numb1 - numb2);
}

function multiply(numb1, numb2) {
    return(numb1 * numb2);
}
function divide(numb1, numb2) {
    return(numb1 / numb2);
}
function calculator(numb1, numb2, operator) {
    return operator(numb1, numb2,add)

}
calculator(2,4,add);
