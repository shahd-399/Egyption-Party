$(document).ready(function(){
    $('.loading-screen').fadeOut(500);
    $('body').css('overflow','visible')
})

$('aside nav li').click(function(){
    let section = $(this).attr('href')
    let secTop = $(section).offset().secTop
    $('body,html').animate({scrollTop : secTop},1000)
})

navWidth = $('nav').outerWidth();
$('.fa-xmark').click(function(){
    $('aside').animate({left : `-${navWidth}px`})
})

$('.fa-bars').click(function(){
    $('aside').animate({left : `0px`})  
})

$('#Duration p:not(.active)').slideUp();
$('#Duration h2').click(function(){
    $(this).next().slideToggle();
    $('p').not($(this).next()).slideUp(500);
})

let eventDate = new Date('11/26/2024').getTime()

let counter = setInterval(() =>{
    let dateNow = new Date().getTime();
    let dateDiff = eventDate-dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    $('.day').html(`${days} D`)

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24) /1000/60/60 ));
    $('.hour').html(`${hours} H`)

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)/1000 / 60 ));
    $('.min').html(`${minutes} M`)

    let secound = Math.floor((dateDiff % (1000 * 60))/1000);
    $('.sec').html(`${secound} S`)

},1000)

let char = 100
$('#Contact form p').html(`<span class="text-danger" > ${char}</span> Characyer Reamining`
);
$('textarea').on('input',function(){
    let lenght = $("textarea").val().length;
    if (char <= lenght) {
        $('#Contact form p').html(`<p class="text-danger">your available character finished</p> <br/> Characyer Reamining `
        );
    } 
    else {
        $('#Contact form p').html(`<span class="text-danger" > ${char - lenght}</span> Characyer Reamining`
        );
    }
})