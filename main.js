let toggle = document.querySelector("#header .toggle_button");
let collapsable = document.querySelectorAll("#header .collapse");
// collapseable is an array of all the elements in the html file with the class collapse

// toggle open and closed  links when on mobile screen size
toggle.addEventListener('click',function(){
    // loop for each element in the collapsable array either add or remove the class collapse_toggle 
    collapsable.forEach(col=>col.classList.toggle("collapse_toggle"));
      
})

// Grid layout created with Masonry
new Masonry("#posts .grid",{
    itemSelector: '.grid_item',
    gutter: 20
})

// item slider swipper library initialization code
new Swiper('.swiper', {
    // parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    autoplay: {
        delay: 4000
    },
    //responsive breakpoints for diferent sized screens
    breakpoints: {
    '@0':{
        slidesPerView: 2,
    },
    '@0.60': {
        slidesPerView: 3,
    },
    '@1.00': {
        slidesPerView: 4,
    },
    '@1.25': {
        slidesPerView: 5,
    }
}
  });