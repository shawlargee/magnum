/* ---------------------------------------------------------------------------------
* FOUNDATION JS (IF YOU ARE NOT ADVANCED USER LEAVE THIS PART AND GO TO NEXT CHAPTER)
* ------*/


/* Foundation v2.2.1 http://foundation.zurb.com */
jQuery(document).ready(function ($) {

/* Use this js doc for all application specific JS */

/* TABS --------------------------------- */
/* Remove if you don't need :) */

function activateTab($tab) {
var $activeTab = $tab.closest('dl').find('a.active'),
contentLocation = $tab.attr("href") + 'Tab';

// Strip off the current url that IE adds
contentLocation = contentLocation.replace(/^.+#/, '#');

//Make Tab Active
$activeTab.removeClass('active');
$tab.addClass('active');

//Show Tab Content
$(contentLocation).closest('.tabs-content').children('li').hide();
$(contentLocation).css('display', 'block');
}

$('dl.tabs').each(function () {
//Get all tabs
var tabs = $(this).children('dd').children('a');
tabs.click(function (e) {
activateTab($(this));
});
});

if (window.location.hash) {
activateTab($('a[href="' + window.location.hash + '"]'));
$.foundation.customForms.appendCustomMarkup();
}

/* ALERT BOXES ------------ */
$(".alert-box").delegate("a.close", "click", function(event) {
event.preventDefault();
$(this).closest(".alert-box").fadeOut(function(event){
$(this).remove();
});
});


/* PLACEHOLDER FOR FORMS ------------- */
/* Remove this and jquery.placeholder.min.js if you don't need :) */

$('input, textarea').placeholder();

/* TOOLTIPS ------------ */
$(this).tooltips();

/* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
//	$('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
//	$('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
//	$('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
//	$('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});



/* DROPDOWN NAV ------------- */

var lockNavBar = false;
$('.nav-bar a.flyout-toggle').live('click', function(e) {
e.preventDefault();
var flyout = $(this).siblings('.flyout');
if (lockNavBar === false) {
$('.nav-bar .flyout').not(flyout).slideUp(300);
flyout.slideToggle(300, function(){
lockNavBar = false;
});
}
lockNavBar = true;
});
if (Modernizr.touch) {
$('.nav-bar>li.has-flyout>a.main').css({
'padding-right' : '75px'
});
$('.nav-bar>li.has-flyout>a.flyout-toggle').css({
'border-left' : '0px dashed #eee'
});
} else {
$('.nav-bar>li.has-flyout').hover(function() {
$(this).children('.flyout').show(350).css('overflow','');
}, function() {
$(this).children('.flyout').hide(350).css('overflow','');
})
$("ul.sub-flyout").hide().css('overflow','');
$("li.has-flyout-sub").hover(
function() {
$(this).children('.sub-flyout').show(350).css('overflow',''); 
},
function() {
$(this).children('.sub-flyout').hide(350).css('overflow',''); 
});
}

/* DISABLED BUTTONS ------------- */
/* Gives elements with a class of 'disabled' a return: false; */	
});


/* --------------------------------------------------------------------------
/* --------------------------------------------------------------------------
/* --------------------- ****** CUSTOM JS SETTINGS *****---------------------
/* --------------------------------------------------------------------------
/* --------------------------------------------------------------------------
* YOU SHOULD CHANGE 6 NAD 12 PART BEFORE START OF USING MONOCHROME THEME:
* ------*/
 
 /***** 1. ORBIT SLIDER
 /***** 2. HOME PORTFOLIO GALLERY
 /***** 3. CAMERA SLIDER
 /***** 4. IMAGE CAPTIONS
 /***** 5. BLACK AND WHITE EFFECT
 /***** 6. ****************LATEST TWEETS ---- (THIS YOU SHOULD CHANGE) ----
 /***** 7. BUTTONS EFFECTS
 /***** 8. MAIN NAVIGATION DROP DOWN
 /***** 9. PRETTY PHOTO
 /***** 10. SCROLL TO TOP AND TO LEAVE COMMENT
 /***** 11. PORTFOLIO 
 /***** 12. ****************GOOGLE MAP  ---- (THIS YOU SHOULD CHANGE) ----
 /***** 13. ACCORDION
 /***** 14. FORM VALIDATION

  
  
  
/* --------------------------------------------------------------------------
* ORBIT SLIDER
* ------*/
  
$(window).load(function() {
$('div.orbit').css({'z-index':'-40'});
$('div.orbit').orbit({
  animation: 'horizontal-slide',               // fade, horizontal-slide, vertical-slide, horizontal-push
  animationSpeed: 1000,             // how fast animations are
  timer: false,                     // true or false to have the timer
  advanceSpeed: 4000,              // if timer is enabled, time between transitions
  pauseOnHover: false,             // if you hover pauses the slider
  startClockOnMouseOut: false,     // if clock should start on MouseOut
  startClockOnMouseOutAfter: 0, // how long after MouseOut should the timer start again
  directionalNav: true,            // manual advancing directional navs
  captions: true,                  // do you want captions?
  captionAnimation: 'fade',        // fade, slideOpen, none
  captionAnimationSpeed: 800,      // if so how quickly should they animate in
  bullets: true,                  // true or false to activate the bullet navigation
  bulletThumbs: false,             // thumbnails for the bullets
  bulletThumbLocation: ''        // location from this file where thumbs will be
});
});

/* --------------------------------------------------------------------------
* HOME PORTFOLIO GALLERY
* ------*/
$(window).load(function() {
$('#slider-code').tinycarousel({ // slider container
axis: 'y', // slide direction
display: 2   // default number of portfolio items on home page
});
});

/* --------------------------------------------------------------------------
* CAMERA SLIDER
* ------*/

jQuery(document).ready(function(){
jQuery('#slider').camera({ // slider container
height: '500px', // height of images in camera slider
fx:'simpleFade', // effect for animation between slides
loader: 'bar', // loading type
pagination: true, // pagination
thumbnails: false, // thumbnails
hover: false,  // stop on hover
imagePath: '../images/', // path to images
caption: false, // captions
barPosition:'bottom' //position of bar
});
});

/* ----------------------------------------------------------------------------
* IMAGE CAPTIONS
* ---------*/
$("div.captify_small, div.captify_medium, div.captify_big, div.captify_portfolio").hide() // holders of icons for images
$('div.captify_small, div.captify_medium, div.captify_big, div.captify_portfolio').parent().hover(function(){ 
$(this).children('div.captify_small, div.captify_medium, div.captify_big, div.captify_portfolio').show(200, 'linear'); // show icons, red number is speed of captions
}, function() {
$(this).children('div.captify_small, div.captify_medium, div.captify_big, div.captify_portfolio').hide(200, 'linear'); // hide icons, red number is speed of captions
});

/* ----------------------------------------------------------------------------
* BLACK AND WHITE IMAGES
* ---------*/ 
$(window).load(function(){
$('.bw').BlackAndWhite({ // black and white container class
hoverEffect:true, // alow colors on mouse over
})
});

/* --------------------------------------------------------------------------
* LATEST TWEETS
* -------------*/
jQuery(document).ready(function(){
$(".tweet").tweet({ // twitter container
username: "pebasdesign", // twitter username
join_text: "", // text of joining, empty fior this theme
avatar_size: 0, // 0 avatarsize (no avatar) for this theme
count: 1, // how many tweets will show
loading_text: "<p class='twenty'>Please wait, tweets still loading...</p>", // message for loading tweets
refresh_interval: 60000, // refresh rate, how much often tweets udate
template: "{text}{time}" // template, show text and time of tweets
});
});

/* --------------------------------------------------------------------------
* BUTTONS
* -------------*/

jQuery(document).ready(function(){

$('.featured a')
.css( {backgroundPosition: "0 -64px"} )
.mouseover(function(){
$(this).stop().animate({backgroundPosition:"(0 0)"}, {duration:150})
})
.mouseout(function(){
$(this).stop().animate({backgroundPosition:"(0 -64px)"}, {duration:150})
})
});

jQuery(document).ready(function(){
$('ul.blog-category li')
.css( {backgroundPosition: "100% 50%"} )
.mouseover(function(){
$(this).stop().animate({backgroundPosition:"(90% 50%)"}, {duration:150})
})
.mouseout(function(){
$(this).stop().animate({backgroundPosition:"(100% 50%)"}, {duration:150})
})
});

jQuery(document).ready(function(){
$(".button, .breadcrumbs a, .date a, .meta a, .search_btn, .pagination a, a.reply, ul.filter-nav a").animate({"opacity": "1"}, "slow");
$(".button, .breadcrumbs a, .date a, .meta a, .search_btn, .pagination a, a.reply, ul.filter-nav a").hover(
function() {
$(this).stop().animate({"opacity": "0.6"}, "slow");
},
function() {
$(this).stop().animate({"opacity": "1"}, "slow");	 
});
});

/* --------------------------------------------------------------------------
* EXTEND NAVIGATION
* -------------*/

// jQuery(document).ready(function(){
// $("ul.sub-flyout").hide();
// $("li.has-flyout-sub").hover(
// function() {
// $(this).children('.sub-flyout').show(350); 
// },
// function() {
// $(this).children('.sub-flyout').hide(350); 
// });
// });

/* -----------------------------------------------------------------------------
* PRETTY PHOTO
* -----------*/
$(document).ready(function(){
$("a[rel^='prettyPhoto']").prettyPhoto({
"theme": 'light_square' /* light_rounded / dark_rounded / light_square / dark_square */	
});
});

/* -----------------------------------------------------------------------------
* SCROLL
* -------------*/

/* TO TOP */

$(document).ready(function(){

// hide #back-top first
$("a.scrollup").hide();

// fade in #back-top
$(function () {
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
$('a.scrollup').fadeIn();
} else {
$('a.scrollup').fadeOut();
}
});

// scroll body to 0px on click
$('a.scrollup').click(function () {
$('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});
});

/* TO LEAVE COMMENT */

jQuery(document).ready(function(){
$('a.reply').click(function(){
$('html, body').animate({scrollTop: $("#reply").offset().top}, 800);
});
});

/* -----------------------------------------------------------------------------
* PORTFOLIO
* -------------*/

jQuery(document).ready(function(){

// clients filter scripps

$portfolioHolder = $('ul.items'); // get original list
$portfolioClone = $portfolioHolder.clone(); // clone it so it can be reverted back to

$('ul.filter-nav li a').click(function(e) {
e.preventDefault(); // stop anchor tags from doing anything

$filterClass = $(this).attr('class'); // gets class from clicked anchor

$('ul.filter-nav li').removeClass('active'); // remove active class from all filter links
$(this).parent().addClass('active'); // add active class to clicked link

if($filterClass == 'all'){
$filters = $portfolioClone.find('li'); // get all li's from original cloned list and assign them to variable
} else {
$filters = $portfolioClone.find('li[data-type~='+ $filterClass +']'); // get li's from ul.source with data-type containing $filterclass
}

$portfolioHolder.quicksand(



$filters, {
duration: 1000, // portfolio changing speed
adjustHeight: 'auto',
easing: 'linear'
}, function() { // callback function
// calling all cloned functions back after transitions   

$("a[rel^='prettyPhoto']").prettyPhoto({
"theme": 'light_square' /* light_rounded / dark_rounded / light_square / dark_square */	
});

$('.bw').BlackAndWhite({
hoverEffect:true,
})

$("div.captify_small, div.captify_medium, div.captify_big, div.captify_portfolio").hide()
$('div.captify_small, div.captify_medium, div.captify_big, div.captify_portfolio').parent().hover(function(){
$(this).children('div.captify_small, div.captify_medium, div.captify_big, div.captify_portfolio').show(200, 'easeInOutQuad');
}, function() {
$(this).children('div.captify_small, div.captify_medium, div.captify_big, div.captify_portfolio').hide(200, 'easeInOutQuad');

});
}); // initiate quicksand fne.preventDefault();
});
});

/* --------------------------------------------------------------------------
* GOOGLE MAP
* ------*/

$(document).ready(function(){
$(function(){
$('#map').gmap3( // google map container
{ 
action: 'addMarker', // to show marker on specific address
address: "Novi Sad, Turgenjeva 4", // type your address here
map: // map type (leave empty to stay same)
{
center: true, // center map
zoom: 14, // choose zoom
mapTypeId: google.maps.MapTypeId.ROADMAP
}
}
);
});
});

/* -----------------------------------------------------------------------------
* ACCORDION
* ---------*/
$(document).ready( function() {  
var $container = $('.accordion > div'),
$trigger   = $('.accordion > h6');

$container.hide();
$trigger.first().addClass('active').next().show();
$trigger.on('click', function(e) {
if( $(this).next().is(':hidden') ) {
$trigger.removeClass('active').next().slideUp(300);
$(this).toggleClass('active').next().slideDown(300);
}
e.preventDefault();
});
});

/* ---------------------------------------------------------------------------------
* FORMS
* -----*/

/*--------- Set Submitting With <a> Tag ------*/

$(document).ready(function(){
$("a[name=submit]").click( function(){
$(this).parents("form").submit();
});	

/*--------- Set Empty Fields On Click ------*/
$(document).ready(function(){
$('.textarea').val("Your message...");
$('.textarea_comment').val("Your comment...");
$('input, .textarea, .textarea_comment').each(function() {
var default_value = this.value;
$(this).focus(function() {
if(this.value == default_value) {
this.value = '';
}
});
$(this).blur(function() {
if(this.value == '') {
this.value = default_value;
}
});
});
});

/*--------- Set Neccessary Methods For JQ Validate ------*/
jQuery.validator.addMethod("notEqual", function(value, element, param) {
return this.optional(element) || value != param;
}, "Please choose a value!");

jQuery.validator.setDefaults({
errorPlacement: function(error, element) {
error.appendTo($(
$(element).val().errorLabel
));
}
});

/*--------- Newsletter Form ------*/

$("form.newsletter").validate({
debug: false,

email: {
required: true,
email: true
},

submitHandler: function(form) {

$.post('php/process.php', $("form.newsletter").serialize(), function(data) {
$("form.newsletter").fadeOut(),$('.success').fadeIn({duration: 800, easing: 'easeInOutExpo'}).html(data);
});
}
});


/*--------- Contact Form ------*/

$("form.contact_form").validate({
debug: false,
rules: {
	
name: {
minlength: 2,
maxlength: 15,	
notEqual: "Your name...",
required: true,
},


email: {
required: true,
email: true
},

subject: {
minlength: 3,	
notEqual: "Please type subject...",
required: true,
},

message: {
minlength: 5,	
notEqual: "Your message...",
required: true,
},

},

submitHandler: function(form) {

$.post('php/process_contact.php', $("form.contact_form").serialize(), function(data) {
$("form.contact_form").fadeOut(),$('.success_contact').fadeIn({duration: 800, easing: 'easeInOutExpo'}).html(data);
});
}
});

/*--------- Comment Form ------*/

$("form.comment_form").validate({
debug: false,
rules: {
	
name: {
minlength: 2,
maxlength: 15,	
notEqual: "Your name...",
required: true,
},


email: {
required: true,
email: true
},

comment: {
minlength: 5,	
notEqual: "Your comment...",
required: true,
},

},

submitHandler: function(form) {

$.post('php/process_comment.php', $("form.comment_form").serialize(), function(data) {
$("form.comment_form").fadeOut(),$('.success_comment').fadeIn({duration: 800, easing: 'easeInOutExpo'}).html(data);
});
}
});

});