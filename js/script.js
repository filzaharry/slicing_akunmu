const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
var windowsize = $(window).width();

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.nav-lg').addClass('sticky')
    } else{
        $('.nav-lg').removeClass('sticky')
    }
});

if (windowsize > 800) {
    if (windowsize > 800 && windowsize < 900) {
        $('.product__month').text("bln");
    } else {
        $('.product__month').text("Bulan");
    }
} else {
    $('.product__month').text("bln");

}

$(window).resize(function() {
  windowsize = $(window).width();
  console.log("windowsize");
  console.log(windowsize);
  if (windowsize > 800) {
        if (windowsize > 800 && windowsize < 900) {
            $('.product__month').text("bln");
        } else {
            $('.product__month').text("Bulan");
        }
    }else {
      $('.product__month').text("bln");

  }
});
