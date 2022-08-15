// add event listener
// const h1 = document.getElementById('secret');
// document.getElementById('text-field').addEventListener('keyup', function (event) {
//     if (event.target.value === 'delete') {
//         h1.style.display = "none";
//     }
//     else {
//         h1.style.display = 'block';
//     }
// })
const h1 = document.getElementById('secret');
document.getElementById('text-field').addEventListener('keyup', function (event) {
    const listen = event.target.value;
    const delBtn = document.getElementById('input-btn');

    if (listen === 'delete') {
        delBtn.removeAttribute('disabled');
    }
    else {
        delBtn.setAttribute('disabled', true)
    }
})
document.getElementById('input-btn').addEventListener('click', function () {
    h1.style.display = "none";

})
