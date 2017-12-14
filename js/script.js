$(function () {
     'use strict';

     // add class active when click on li

     $('.nav-item').click(function () {
          $(this).addClass('active').siblings().removeClass('active');
     });

     // show navbar when height equle 260
     $(window).scroll(function () {

          if ($(this).scrollTop() >= 260){
               $('nav').addClass('fixed-top').css('background-color' , '#333');
          }else {
               $('nav').removeClass('fixed-top').css('background-color', '');
          }

          console.log($(window).scrollTop());
          if($(this).scrollTop() >= 637){
               $('.abouts').addClass('active').siblings().removeClass('active');
          }
          if($(this).scrollTop() <= 849){
               $('.abouts').addClass('active').siblings().removeClass('active');
          }

          if($(this).scrollTop() >= 1126){
               $('.serv').addClass('active').siblings().removeClass('active');
          }
          if($(this).scrollTop() >= 1639){
               $('.serv').addClass('active').siblings().removeClass('active');
          }

          if($(this).scrollTop() >= 1925){
               $('.port').addClass('active').siblings().removeClass('active');
          }


          if($(this).scrollTop() >= 2669){
               $('.teams').addClass('active').siblings().removeClass('active');
          }

          if($(this).scrollTop() >= 3287){
               $('.contact').addClass('active').siblings().removeClass('active');
          }

     });

     // down navbar smoth
     $('.nav-item .nav-link').click(function () {
          $('html, body').animate({
               scrollTop: $('#' + $(this).data('down')).offset().top
          }, 1000);
     });









     //
     $('.port-link ul li').click(function () {
          $(this).addClass('active').siblings().removeClass('active');
         var value = $(this).attr("data-rel");
         if(value == "all"){
             $(".port-work").fadeIn("1000");
         }else{
             $(".port-work").not("."+value).fadeOut("1000");
             $(".port-work").filter("."+value).fadeIn("1000");
         }
     });



});
