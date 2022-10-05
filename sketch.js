var robin,robinImage,robinAnimation;
var background, backgroundImage,bg2Image;
var chatBox, chatBoximage,chatBox2,chatBox3,chatBox4;

function preload() {
  backgroundImage = loadImage("assets/bg8.webp");
  robinImage = loadImage("assets/officeWoman2.png");
  chatBoximage = loadImage("assets/Chatbox.png");
  chatBox2image = loadImage("assets/chatbox2.png");
  chatBox3image = loadImage("assets/chatbox3.png");
  chat4Boximage = loadImage("assets/chatbox4.png");
  bg2Image = loadImage("assets/bg9.jpg");
  robinAnimation = loadImage("assets/Officer2.gif");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);


    background = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    background.addImage("bg4",backgroundImage);
    //background.scale = 1.5;

    robin = createSprite(150,500,1,1)
    robin.addImage("officeWoman2",robinImage);
    //robin.scale = 0.7;

    chatBox = createSprite(230,400,1,1);
    chatBox.addImage("chatBox",chatBoximage);
    // chatBox.addImage("chatBox2",chatBox2image);
    // chatBox.addImage("chatBox3",chatBox3image);
    // chatBox.addImage("chatBox4",chat4Boximage);
    chatBox2 = createSprite(300,400,1,1);
    chatBox2.addImage("chatbox2",chatBox2image);
    chatBox2.visible= false;

    chatBox.scale = 0.5;
}

function draw() {
 // background("white");
 
 if(mousePressedOver(chatBox)){

  console.log("creating sprite")
  chatBox2.visible= true;

    // if(keyDown("ENTER")){
    //   chatBox.addImage("chatbox3",chatBox3image);
    // }
    //   if(keyDown("ENTER"))
    //     chatBox.addImage("chatbox4",chat4Boximage);
        
    //     if(keyDown("ENTER")){
    //       robin.addAnimation ("officer2",robinAnimation);
          
    //     }
    //     if(keyDown(ENTER)){
    //       background.addImage("bg9",bg2Image);
          
    //     }
  }

  drawSprites();
  fill("white");
  textSize(20);
  text(mouseX+","+mouseX, mouseX, mouseY);
}


