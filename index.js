$(document).ready(function (){
	var gallery = $('.images'); 
	var currentPictureIndex = 0;
	$(gallery[currentPictureIndex]).show();

	$('.images').click(function () {
		$(gallery[currentPictureIndex]).fadeOut(200, function(){
		
		if(currentPictureIndex === gallery.length - 1){
			currentPictureIndex = 0;
		} else{
			currentPictureIndex++;
		}
		$(gallery[currentPictureIndex]).fadeIn(100);
		});
	})
});







