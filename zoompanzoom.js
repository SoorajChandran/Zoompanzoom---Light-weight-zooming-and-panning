
(function ( $ ) {
 
   $.fn.zoompanzoom = function(options) {

   	var settings = $.extend({
            animationSpeed: "fast"   
        }, options );

	var zoomdiv  = this;
	currentZoom = 1.0;
	$(this).draggable();

	jQuery('#zoom_in').click(
		function () {
			jQuery(zoomdiv).animate({ 'zoom': currentZoom += .1 }, settings.animationSpeed);
		})
	jQuery('#zoom_out').click(
		function () {
			jQuery(zoomdiv).animate({ 'zoom': currentZoom -= .1 }, settings.animationSpeed);
		})
	jQuery('#zoom_reset').click(
		function () {
			currentZoom = 1.0;
			jQuery(zoomdiv).animate({ 'zoom': 1 }, settings.animationSpeed);
		})
};
 
}( jQuery ));