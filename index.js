$(document).ready(function (){

	//home


	$("img.rollover").hover( 
		function() { this.src = this.src.replace("_off", "_on"); 
		}, 
		function() { this.src = this.src.replace("_on", "_off"); 
		});
	 $("h1").animate({
	        'opacity': '1'
	    },5000);
	 $("h2").animate({
	        'opacity': '1'
	    },8000);

	 
//hide-and-seek navbar
	var nav = $('.navigation');
	var currentNavIndex = 0;

	$(nav[currentNavIndex]).show();

	$('#menu-buttonbeg').click(function(){
		$(nav).toggle('slide');
	})

	$('#menu-buttonend').click(function(){
		$(nav).toggle('slide');
	})

//interactive slideshow
	var buttonr = $('#a-right');
	var buttonl = $('#a-left')
	var gallery = $('.gallery'); 
	var currentPictureIndex = 0;


	$('#a-right').click(function () {
		$(gallery[currentPictureIndex]).fadeOut(200, function(){
		
		if(currentPictureIndex === gallery.length - 1){
			currentPictureIndex = 0;
		} else{
			currentPictureIndex++;
		}
		$(gallery[currentPictureIndex]).fadeIn(100);
		});
	})

	$(gallery[currentPictureIndex]).show();

	$('#a-left').click(function () {
		$(gallery[currentPictureIndex]).fadeOut(200, function(){
		
		if(currentPictureIndex === 0){
			currentPictureIndex = gallery.length -1 ;
		} else{
			currentPictureIndex--;
		}
		$(gallery[currentPictureIndex]).fadeIn(100);
		});
	})



});