# Zoompanzoom---Light-weight-zooming-and-panning
Light weight zooming and panning Jquery plugin

Zoompanzoom is a lightweight jQuery plugin for Zooming and Panning different elemets like div , Image , SVG etc.

Dependant files - Jquery and Jquery UI

# How to use 

1. Create a div and assign an id 
2. Use the id to initialise the plugin 
 <code>
  $("#my_div").zoompanzoom();
 </code>


# Options
1.animationSpeed - possible values can be slow,normal,fast or any other number
<code>
$("#my_div").zoompanzoom({
		animationSpeed: "slow"  
	});
	</code>
2.zoomfactor - The factor by which the zoom out or zoom in will happen 
default value - 0.1
3.maxZoom - maximum zoom 
default value - 3
4.minZoom - Minimum zoom
default value - 0.5
5.disablePan - false to disable panning. Default value is true.
