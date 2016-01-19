$(document).ready(function (){

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





