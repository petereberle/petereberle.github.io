//LAZYLOAD

$(document).ready(function () {

$('img').each(

function(){

  //get current src
  var cachedSource = $(this).attr('src');

  //remove src attribute
  $(this).attr('src', '');
  $(this).removeAttr('src');

  //set data-src with cached
  $(this).attr('data-src', cachedSource);

  //add lazy load class
  $(this).addClass('lazyload');

});

});

/*
$(document).ready(function () {

  $('img').each(function (){ 

    //get current src
    var cachedSource = $(this).attr('src');

    var arraySource = cachedSource.split('.').pop().toLowerCase();

    if ($.inArray(arraySource, ['gif','png','jpg','jpeg']) == 1) {

      //remove src attribute
      $(this).attr('src', '');
      $(this).removeAttr('src');

      //set data-src with cached
      $(this).attr('data-src', cachedSource);

      //add lazy load class
      $(this).addClass('lazyload');

  }

});
*/

//SET HEADING HEIGHT

var windowHeight = $(window).height() - 150;

$(document).ready(function() {

  $(".heading_block").height(windowHeight);

});

$(window).resize( function(){

  if( $(window).width() > 900 ){

  var newHeight = $(window).height() - 150;

  if(newHeight !== windowHeight){ 

      $(".heading_block").height(newHeight);

      windowHeight = newHeight;
    }

  }

});

//PAGE BUFFER ON FIRST VISIT

function GetCookie(name) {
  var arg=name+"=";
  var alen=arg.length;
  var clen=document.cookie.length;
  var i=0;
  while (i<clen) {
  var j=i+alen;
  if (document.cookie.substring(i,j)==arg)
    return "here";
  i=document.cookie.indexOf(" ",i)+1;
  if (i==0) break;
  }
  return null;
}

function visitCookie(){
  var visit=GetCookie("FirstTimeVisitCookie");
  var cachedDescription = $('#intro_description').html();
  if (visit==null){
     var expire=new Date();
     expire=new Date(expire.getTime()+2420000000);
     document.cookie="FirstTimeVisitCookie=here; expires="+expire + ";path=/";

     var windowHeight = $(window).height();
    
     $('body').addClass("content_locked");
     $('body').css({'height' : windowHeight});
     $('#intro_heading').addClass("loading");

     $('#intro_description').html('<p>' + 'Just a moment...' + '</p>');

    $(window).on('load', function(){

     setTimeout( function() {

      let tl = new TimelineLite();

      tl.to('#page_load_wrapper', 1, {autoAlpha: '0'})
      .to('#page_load_wrapper', .1, {display: 'none'});

      $('body').removeClass("content_locked");
      $('body').css({'height' : 'unset'});
      $('#intro_heading').removeClass("loading");
      $('#intro_description').html(cachedDescription);

      }, 500);

    });

//On slower connections if window doesn't load within five seconds, reveal page

setTimeout( function() {

      let tl = new TimelineLite();

      tl.to('#page_load_wrapper', 1, {autoAlpha: '0'})
      .to('#page_load_wrapper', .1, {display: 'none'});

      TweenMax.from("#down_scroll_wrapper", .75, {autoAlpha: '0', marginTop: '-20px', ease:Power2.easeInOut, repeat:0, delay:1.25});

      $('body').removeClass("content_locked");
      $('body').css({'height' : 'unset'});
      $('#intro_heading').removeClass("loading");
      $('#intro_description').html(cachedDescription);

 }, 5000);


   } else {

      $('#page_load_wrapper').css({'background' : 'unset', 'position' : 'unset', 'width' : '0', 'height' : '0', 'display' : 'none'});
      TweenMax.from("#down_scroll_wrapper", .75, {autoAlpha: '0', marginTop: '-20px', ease:Power2.easeInOut, repeat:0, delay:1.25});

   }
}
$(document).ready(function(){
  visitCookie();
});

//ON SCROLL EVENTS

$(document).ready(function(){
    
     window.onscroll = function () { resizeHeader(); };

     function resizeHeader (){
     if (document.body.scrollTop > 100 | document.documentElement.scrollTop > 100) {
		    $('.menu_wrapper').addClass('scroll');
       TweenLite.to(".menu_wrapper", .5, {backgroundColor: "#ffffff", boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.2)"});
       TweenLite.to(".menu_item", .5, {color:"#3b3b43"});
       TweenLite.to("#menu_right", .5, {autoAlpha: "1"});
       TweenLite.to("#down_scroll_wrapper", .5, {autoAlpha: '0'});
     } else { 
        $('.menu_wrapper').removeClass('scroll');
        TweenLite.to(".menu_wrapper", .5, {backgroundColor: "transparent", boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"});
        TweenLite.to(".menu_item", .5, {color:"#ffffff"});
        TweenLite.to("#menu_right", .5, {autoAlpha: "0"});
        TweenLite.to("#down_scroll_wrapper", .5, {autoAlpha: '1'});
      }

      }

    });

//PARALLAX P5 SKETCH ON SCROLL

$(window).scroll(function (){

  var matchScroll = document.documentElement.scrollTop*1.3;

  var containerHeight = $(".heading_block").height();

  if (matchScroll > containerHeight){

      matchScroll = containerHeight;
  }

  if (matchScroll < 0){

      matchScroll = 0;
  }

  $('#sketch-div').css({'top' : matchScroll, 'bottom' : 'auto'});

});

//CONTACT FORM

function removeProp() {

    $("#senderName").attr('placeholder','');

    $("#senderAddress").attr('placeholder','');

    $("#senderMessage").attr('placeholder','');

  }

var submitted = false;

$(document).ready(function(){
  $('#contact_form').on("submit", function () {

    var name = $('#entry\\.1779284427').val();
        console.log(name);
    var senderEmail = $('#entry\\.433919051').val();
    var senderMessage = $('#entry\\.242520132').val();
    var tlx = new TimelineLite();
    var tly = new TimelineLite();

  if (name.length == 0 | senderEmail.length == 0){
  
    tlx.staggerTo("#error_message", .5, {display: 'block', autoAlpha: '1', delay:.5}, 0.05);
  
  }else{

    $('#error_message').css({'display' : 'none'});
    $('#entry\\.1779284427').value = '';
    $('#entry\\.433919051').value = '';
    $('#entry\\.242520132').value = '';

  tly.staggerTo("#success_message", .5, {display: 'block', autoAlpha: '1', delay:.5}, 0.05);

  TweenLite.to("#contact_form", .5, {autoAlpha: '0', height: '0', marginRight: '-1000px'});


  }

  });
});
