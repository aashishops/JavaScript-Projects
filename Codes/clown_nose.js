let video;
let poseNet;
let noseX = 0 ;
let noseY = 0 ;
let eyesX = 0;
let eyesY = 0;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();
  poseNet = ml5.poseNet(video,modelReady);
  poseNet.on('pose',gotPoses);
  }
function gotPoses(poses){
console.log(poses);
  if (poses.length > 0){
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    let eX = poses[0].pose.keypoints[1].position.x;
    let eY = poses[0].pose.keypoints[1].position.y;
    noseX = lerp(noseX,nX,0.5);
    noseY= lerp(noseY,nY,0.5);
    eyesX = lerp(eyesX,eX,0.5);
    eyesY = lerp(eyesY,eY,0.5);
  }
  
}

function  modelReady(){
  console.log("the model is ready");
}


function draw() {
  image(video,0,0, width ,height);
  let d = dist(noseX,noseY,eyesX,eyesY);
  fill (255,0,0);
   ellipse(noseX,noseY,d);
//  ellipse(eyesX,eyesY,50);
  
}

