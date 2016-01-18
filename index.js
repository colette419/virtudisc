// $(document).ready(function (){
// 	// var button = $('#a-right')
// 	// var gallery = $('.gallery'); 
// 	// var currentPictureIndex = 0;
// 	// $(gallery[currentPictureIndex]).show();

// 	// $('#a-right').click(function () {
// 	// 	$(gallery[currentPictureIndex]).fadeOut(200, function(){
		
// 	// 	if(currentPictureIndex === gallery.length - 1){
// 	// 		currentPictureIndex = 0;
// 	// 	} else{
// 	// 		currentPictureIndex++;
// 	// 	}
// 	// 	$(gallery[currentPictureIndex]).fadeIn(100);
// 	// 	});
// 	// })

// 	var button = $('#a-left')
// 	var gallery = $('.gallery'); 
// 	var currentPictureIndex = 0;
// 	$(gallery[currentPictureIndex]).show();

// 	$('#a-left').click(function () {
// 		$(gallery[currentPictureIndex]).fadeOut(200, function(){
		
// 		if(currentPictureIndex === 0){
// 			currentPictureIndex = gallery.length -1 ;
// 		} else{
// 			currentPictureIndex--;
// 		}
// 		$(gallery[currentPictureIndex]).fadeIn(100);
// 		});
// 	})
// });


//If the right button is clicked, do this
//Else if the left button is clicked do this


$(document).ready(function (){
	var buttonr = $('#a-right');
	var buttonl = $('#a-left')
	var gallery = $('.gallery'); 
	var currentPictureIndex = 0;
	$(gallery[currentPictureIndex]).show();

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





