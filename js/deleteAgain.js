// 0.styling with js
document.getElementById('h1').style.textAlign = 'center';
document.getElementById('h1').style.color = '#B9345A';
document.getElementById('span1').style.marginRight = '30px';
document.getElementById('span1').style.color = 'gray';
document.getElementById('span2').style.color = 'gray';



document.getElementById('comment-text').addEventListener('keyup', function (event) {
    const getText = event.target.value;
    // console.log(getText);
    const delBtn = document.getElementById('del-btn');
    if (getText === 'delete') {
        delBtn.removeAttribute('disabled');
    }
    else {
        delBtn.setAttribute('disabled', true);
    }

})
document.getElementById('del-btn').addEventListener('click', function () {
    const commentHide = document.getElementById('comments');
    commentHide.style.display = "none";
    const text = document.getElementById('comment-text');
    text.value = '';
})

