var fadeIn;
var fadeAmount = 1;
var cachedWidth = $(window).width();


//var r, g, b;

var yoff = 0.0;  

$('.heading_block').addClass('p5Loading');

function start(){

	$('.heading_block').removeClass('p5Loading');
}

function setup() {

	let parentWidth = document.querySelector(".heading_block").offsetWidth;
	let parentHeight = document.querySelector(".heading_block").offsetHeight*1.1;

	let canvas = createCanvas(parentWidth, parentHeight);
	canvas.parent('sketch-div');
	fadeIn = 30;
}

var parentWidth = document.querySelector(".heading_block").offsetWidth;
var parentHeight = document.querySelector(".heading_block").offsetHeight*1.1;

var cappedFirst = 0;
var cappedSecond = parentHeight*.25;

function draw() {
//modified sketch. original by Daniel Schmiffman
	start();
	clear();
	fill(255, 255, 255, 30);
	beginShape(); 
	stroke(255, 255, 255, 70);
  	var xoff = 0;       // Option #1: 2D Noise
  
  	// Iterate over horizontal pixels
  	for (var x = 0; x <= parentWidth; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(yoff, xoff), 0, 1, cappedFirst, cappedSecond);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);

}

/*function draw() { 
	//modified sketch. original by Daniel Schmiffman
	clear();
	fill(255, 255, 255, 30);
	beginShape(); 
	stroke(255, 255, 255, 70);
  	var xoff = 0;       // Option #1: 2D Noise
  
  	// Iterate over horizontal pixels
  	for (var x = 0; x <= windowHeight; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(yoff, xoff), 0, 1, cappedFirst, cappedSecond);
    
    // Set the vertex
    vertex(y, x); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(windowWidth, windowHeight);
  vertex(windowWidth, 0);
  endShape(CLOSE);

}

	cappedFirst = parentWidth*.8;
	cappedSecond = parentWidth*.95;

*/

function windowResized() {

parentWidth = document.querySelector(".heading_block").offsetWidth;
parentHeight = document.querySelector(".heading_block").offsetHeight*1.1;


var newWidth = $(window).width();
        
        if(newWidth !== cachedWidth){  

         resizeCanvas(parentWidth, parentHeight);

         var windowWidth = $(window).width();

    	cachedWidth = newWidth;
    }

  if( $(window).width() > 900 ){

      resizeCanvas(parentWidth, parentHeight);

    }

	cappedFirst = 0;
	cappedSecond = parentHeight*.25;

}
