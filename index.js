console.log('Colette is awesome');

$(document).ready(function() {
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
});
