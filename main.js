nosex = 0;
nosey = 0;

function preload() {
    elephantnose = loadImage('https://i.postimg.cc/HnWjp9Nb/23-238215-cartoon-elephant-trunk-clip-art-clip-art.png');
}

function setup() {
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   posenet = ml5.poseNet(video,modelLoaded);
   posenet.on('pose', gotPoses );
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x-5;
        nosey = results[0].pose.nose.y-5;
        console.log("nose x = "+nosex);
        console.log("nose y = "+nosey);
    };  
}

function modelLoaded() {
    console.log('model loaded');
}

function draw() {
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    //circle(nosex,nosey,20);
    image(elephantnose,nosex,nosey,30,30);
}

function take_snapshot() {
    save('Snsh.png');
}