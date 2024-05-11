
const header = document.querySelector('header');
const headerNav = header.querySelector('.header-nav');
const menuBtn = header.querySelector('.mobile-menu');
const menuCloseBtn = header.querySelector('.close-btn');


menuBtn.addEventListener('click',function(){
    headerNav.classList.add('active')
})

menuCloseBtn.addEventListener('click',function(){
    headerNav.classList.remove('active')
})



// search button
const searchBtn = header.querySelector('.searchBtn')
const searchFrield = document.getElementById('search-frield'); 
const searchCloseBtn = searchFrield.querySelector('.close-btn')

searchBtn.addEventListener('click',function(){
    searchFrield.classList.remove('deactive');
    searchFrield.classList.add('active');
})

searchCloseBtn.addEventListener('click',function(){
    searchFrield.classList.remove('active');
    searchFrield.classList.add('deactive')
})


// sticky header
const scrollAmount = 200;
window.addEventListener('scroll',function(){
    let scrolled = this.window.scrollY;
    if(scrollAmount<=scrolled){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
})