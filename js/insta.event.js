// 0.styling with js
document.getElementById('h1').style.textAlign = 'center';
document.getElementById('h1').style.color = '#B9345A';
document.getElementById('span1').style.marginRight = '30px';
document.getElementById('span1').style.color = 'gray';
document.getElementById('span2').style.color = 'gray';

// 1.add btn
document.getElementById('post-btn').addEventListener('click', function () {
    // 2.getcomment
    const getComment = document.getElementById('comment-txt');
    const commentVal = getComment.value;
    // 3.add comment
    // sub1: where to add
    const sect = document.getElementById('comment-body');
    // sub2:what to be added
    const p = document.createElement('p');
    p.innerText = commentVal;
    // sub3:add the Node
    sect.appendChild(p);
})
