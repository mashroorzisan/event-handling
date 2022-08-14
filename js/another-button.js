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

// method 4: addEventListener: purple
//be careful: do not call the function
const purpleBtn = document.getElementById('purple');
purpleBtn.addEventListener('click', makePurple);
function makePurple() {
    mainBody.style.backgroundColor = 'purple';
}

// method 4.5: addEventListener making a function: orange
const orangeBtn = document.getElementById('orange');
orangeBtn.addEventListener('click', function () {
    mainBody.style.backgroundColor = "orange";
}
);