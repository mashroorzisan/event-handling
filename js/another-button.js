const mainBody = document.body;

// method 3: by making funciton:red
const redBtn = document.getElementById('red');
function makeRed() {
    mainBody.style.backgroundColor = "red";
}
redBtn.onclick = makeRed;//initializing with function name

// method 3.5: by making a function without name: green
const greenBtn = document.getElementById('green');
greenBtn.onclick = function () {
    mainBody.style.backgroundColor = 'green';
}

// method 3.5: by making a function without name: blue

const blueBtn = document.getElementById('blue');
blueBtn.onclick = function () {//directly initalizing with function
    mainBody.style.backgroundColor = "blue";
}