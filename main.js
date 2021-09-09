var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
blockwidth=30;
blockheight=30;
objectimage="";
playerobject="";
function p_update(){
    fabric.Image.fromURL("player.png",function(img){
        playerobject=img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(playerobject);
    })
    
}
function new_image(get_image){
  fabric.Image.fromURL(get_image,function(img){
      objectimage=img;
      objectimage.scaleToWidth(blockwidth);
      objectimage.scaleToHeight(blockheight);
      objectimage.set({
        top:player_y,
        left:player_x
    })
    canvas.add(objectimage);
  })
  
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
   keypressed=e.keyCode;
   console.log(keypressed);
   if (e.shiftKey==true && keypressed=='80'){
       blockwidth=blockwidth+10;
       blockheight=blockheight+10;
       document.getElementById("currentwidth").innerHTML=blockwidth;
       document.getElementById("currentheight").innerHTML=blockheight;
   }
   if(e.shiftKey==true && keypressed=='77'){
       blockwidth=blockwidth-10;
       blockheight=blockheight-10;
       document.getElementById("currentwidth").innerHTML=blockwidth;
       document.getElementById("currentheight").innerHTML=blockheight;
   }
   if (keypressed=='40'){
       down();
       console.log("down");
   }
   if(keypressed=='38'){
      up();
      console.log("up");
   }
   if (keypressed=='39'){
    right();
    console.log("right");
   }
   if(keypressed=='37'){
    left();
    console.log("left");
   }
   if(keypressed=='67'){
      new_image("cloud.jpg");
      console.log("c");
   }
   if(keypressed=='68'){
    new_image("dark_green.png");
    console.log("d");
 }
    if(keypressed=='71'){
        new_image("ground.png");
        console.log("g");
    }
    if(keypressed=='76'){
        new_image("light_green.png");
        console.log("l");
     }
     if(keypressed=='82'){
        new_image("roof.jpg");
        console.log("r");
     }
     if(keypressed=='84'){
        new_image("trunk.jpg");
        console.log("t");
     }
     if(keypressed=='85'){
        new_image("unique.png");
        console.log("u");
     }
     if(keypressed=='87'){
        new_image("wall.jpg");
        console.log("w");
     }
     if(keypressed=='89'){
        new_image("yellow_wall.png");
        console.log("y");
     }
}
function up(){
    if(player_y>=0){
        player_y=player_y-blockheight;
        console.log("The height of blocks is="+blockheight);
        console.log("Up arrow pressed, X|"+player_x+"Y|"+player_y);
        canvas.remove(playerobject);
        p_update();
    }
}
function down(){
    if(player_y<=450){
        player_y=player_y+blockheight;
        console.log("The height of blocks is"+blockheight);
        console.log("Down arrow pressed X|"+player_x+"Y|"+player_y);
        canvas.remove(playerobject);
        p_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-blockwidth;
        console.log("The width of blocks is"+blockwidth);
        console.log("Left arrrow pressed X|"+player_x+"Y|"+player_y);
        canvas.remove(playerobject);
        p_update();
    }
}
function right(){
    if(player_x<=860){
        player_x=player_x+blockwidth;
        console.log("The width of blocks is"+blockwidth);
        console.log("Right arrrow pressed X|"+player_x+"Y|"+player_y);
        canvas.remove(playerobject);
        p_update();
    }
}