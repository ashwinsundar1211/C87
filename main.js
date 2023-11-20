var canvas = new fabric.Canvas("myCanvas");
var block_img_width = 30;
var block_img_height = 30;
var player_x = 10;
var player_y = 10;
var playerobject = " ";
var block_image_object = " ";

function playerUpdate()
{
  fabric.Image.fromURL("player.png", function(img){
    playerobject = img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(140);
    playerobject.set({
      top:player_y,
      left:player_x
    });
    canvas.add(playerobject);
  });
}

function newImage(getImage)
{
  fabric.Image.fromURL(getImage, function(img){
    block_image_object = img;
    block_image_object.scaleToWidth(block_img_width);
    block_image_object.scaleToHeight(block_img_height);
    block_image_object.set({
      top:player_y,
      left:player_x
    });
    canvas.add(block_image_object);
  });
}

window.addEventListener("keydown", myKeyDown);
function myKeyDown(e)
{
  keypressed = e.keyCode;
  console.log(keypressed);

  if(e.shiftKey && keypressed == '80')
  {
    console.log("p and shift pressed together");
    block_img_width = block_img_width + 10;
    block_img_height = block_img_height + 10;
    document.getElementById("current_width").innerHTML = block_img_width;
    document.getElementById("current_height").innerHTML = block_img_height;
  }

  if(e.shiftKey && keypressed == '77')
  {
    console.log("m and shift pressed together");
    block_img_width = block_img_width - 10;
    block_img_height = block_img_height - 10;
    document.getElementById("current_width").innerHTML = block_img_width;
    document.getElementById("current_height").innerHTML = block_img_height;
  }

  if(keypressed == "38")
  {
    Up();
    console.log("up");
  }

  if(keypressed == "40")
  {
    Down();
    console.log("down");
  }

  if(keypressed == "37")
  {
    Left();
    console.log("left");
  }

  if(keypressed == "39")
  {
    Right();
    console.log("right");
  }

  if(keypressed == "87")
  {
    newImage("wall.jpg");
    console.log("w");
  }

  if(keypressed == "71")
  {
    newImage("ground.png");
    console.log("g");
  }

  if(keypressed == "76")
  {
    newImage("light_green.png");
    console.log("l");
  }

  if(keypressed == "84")
  {
    newImage("trunk.jpg");
    console.log("t");
  }

  if(keypressed == "82")
  {
    newImage("roof.jpg");
    console.log("r");
  }

  if(keypressed == "89")
  {
    newImage("yellow_wall.png");
    console.log("y");
  }

  if(keypressed == "68")
  {
    newImage("dark_green.png");
    console.log("d");
  }

  if(keypressed == "85")
  {
    newImage("unique.png");
    console.log("u");
  }

  if(keypressed == "67")
  {
    newImage("cloud.jpg");
    console.log("c");
  }
}