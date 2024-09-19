
  ScrollReveal({ 
reset: true ,
distance:'60px',
duration:2500,
delay:400
});

ScrollReveal().reveal('.sec-03 .image, .info',{ delay: 600 ,origin:'bottom'});
ScrollReveal().reveal('.text-box',{ delay: 700 ,origin:'right'});
ScrollReveal().reveal('.container',{ delay: 500 ,origin:'top'});
ScrollReveal().reveal('.media-info li',{ delay: 600 ,origin:'left',interval:200});

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})


