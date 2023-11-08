let left_btn =document.getElementsByClassName('fa-chevron-left')[0];
let right_btn =document.getElementsByClassName('fa-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let box = document.getElementsByClassName('box')[0];
let boxy = document.getElementsByClassName('boxy')[0];

left_btn.addEventListener('click', ()=> {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', ()=> {
    cards.scrollLeft += 140;
});
left_btn.addEventListener('click', ()=> {
    box.scrollLeft -= 140;
})
right_btn.addEventListener('click', ()=> {
    box.scrollLeft += 140;
});
left_btn.addEventListener('click', ()=> {
    boxy.scrollLeft -= 140;
})
right_btn.addEventListener('click', ()=> {
    boxy.scrollLeft += 140;
});