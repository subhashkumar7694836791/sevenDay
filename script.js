var left=document.querySelector('.main-left');
var right=document.querySelector('.main-right');

left.addEventListener('mouseover',function(){
    left.style.width='70%';
    right.style.width='30%';
})
left.addEventListener('mouseleave',function(){
    left.style.width='50%';
    right.style.width='50%';
})
right.addEventListener('mouseover',function(){
    left.style.width='30%';
    right.style.width='70%';
})
right.addEventListener('mouseleave',function(){
    left.style.width='50%';
    right.style.width='50%';
})
