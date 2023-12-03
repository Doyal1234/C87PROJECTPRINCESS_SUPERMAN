var canvas=fabric.Canvas("myCanvas");
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:block_y,
		left:block_x
		});
		canvas.add(block_image_object);
		})	// to upload images
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '97') // add appropriate keycode
	{
		block_x=150;
		new_image("anna.jpeg");
		console.log("a");	// upload red ranger
	}
	if(keyPressed == '101')
	{
		block_x = 200;
		new_image("elsa.jpg");
		console.log("e");
		// upload green ranger
	}
	
	if(keyPressed == '112')
	{
		block_x =350;
		new_image("pink_princess.jpeg");
		console.log("p");
		// upload yellow ranger
	}
	if(keyPressed == '115')
	{
		block_x = 600;
		new_image("sophia.jpeg");
		console.log("s");
		// upload pink ranger
	}
	if(keyPressed == '121')
	{
		block_x = 700;
		new_image("yellow_princess.jpg");
		console.log("y");
	// upload blue ranger
	}
	
}

