let side_bar = document.querySelector('.side-bar-main');

let  div_slider_button = document.querySelector(".div-slider-button")



$(window).ready (function(){
    console.log('Loading....')
    // $('.sec-banner').animate({'top':0 + "%" },700);
    $('html, body').animate({
        scrollTop:0
    },100)
})



function menu_open(){

if (side_bar.classList.contains('side-bar-main-inactive')){
    side_bar.classList.add('side-bar-main-active')
    side_bar.classList.remove('side-bar-main-inactive')
    div_slider_button.classList.add('hidden')
    div_slider_button.classList.remove('show')
}else{

    side_bar.classList.remove('side-bar-main-active')
    side_bar.classList.add('side-bar-main-inactive')
    div_slider_button.classList.add('show')
    div_slider_button.classList.remove('hidden')
}
}

// side bar toggle end



console.log( window.innerHeight)

let sec_banner = document.querySelector('.sec-banner')
let sec2 = document.querySelector('.sec2')
let sec3 = document.querySelector('.sec3')
let sec4 = document.querySelector('.sec4')

window.onscroll = function(event){

    let scroll = window.pageYOffset;

if (scroll > 60){

        sec_banner.classList.add('slide-up')
        sec2.classList.remove('z-index')
        
        console.log("sec-banner")
        
            } else if (scroll < 200){

                sec_banner.classList.add('slide-down')
                sec_banner.classList.remove('slide-up')
                sec2.classList.add('z-index')

            }

            if (scroll > 200){

                sec2.classList.add('slide-up')
                sec3.classList.remove('z-index')
                
                
                console.log(sec2)
                
                    } else if (scroll < 340){
                        console.log("down")
                        sec2.classList.add('slide-down')
                        sec2.classList.remove('slide-up')
                        sec3.classList.add('z-index')
        
                    }


                    if (scroll > 340){

                        sec3.classList.add('slide-up')
                        sec4.classList.remove('z-index')
                        
                        
                        console.log(sec3)
                        
                            } else if (scroll < 1800){
                                console.log("down")
                                sec3.classList.add('slide-down')
                                sec3.classList.remove('slide-up')
                                sec4.classList.add('z-index')
                
                            }
}



// slider scrolling button


function slidedown() {
    window.scrollBy(0, 140);
  }

  function slideup() {
    window.scrollBy(0, -140);
  }