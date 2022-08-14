
//option 2: directly calling a function

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// option 3: making a function not calling
const yellowClick = document.getElementById('yellow');
const mainBody = document.body;

function makeYellow() {
    mainBody.style.backgroundColor = "yellow"
}

yellowClick.onclick = makeYellow;


// option 3 another: making a function without naming it

const greenClick = document.getElementById("green");
greenClick.onclick = function () {
    mainBody.style.backgroundColor = 'green';
}
