// 0.styling with js
document.getElementById('h1').style.textAlign = 'center';
document.getElementById('h1').style.color = '#B9345A';
document.getElementById('span1').style.marginRight = '30px';
document.getElementById('span1').style.color = 'gray';
document.getElementById('span2').style.color = 'gray';
// 1.add event listener
document.getElementById('post-btn').addEventListener('click', function () {
    // 2.get text from the textarea
    const text = document.getElementById('comment-txt');
    //3.where to add
    const body = document.getElementById('comment-body');
    //4.what to add
    const p = document.createElement('p');
    p.innerText = text.value;
    // 5.add the value
    body.append(p);
    //6.clear textarea
    text.value = ''
})