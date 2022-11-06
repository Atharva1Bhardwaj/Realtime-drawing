nose_x = 0;
nose_y = 0;
left_wrist = 0;
right_wrist = 0;
difference = 0;
function setup(){
    canvas= createCanvas(500, 500);
    canvas.position(100,150);

    video= createCapture(VIDEO);
    video.position(850, 150);
    video.size(500,500);

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    background('#Ffcba4');
    fill('#006994');
    stroke('#4166f5');
    square(nose_x, nose_y, difference);
}

function modelLoaded(){
    console.log("Hello !!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x ;
        nose_y = results[0].pose.nose.y ;
        console.log(nose_x);
        console.log(nose_y);
        left_wrist = results[0].pose.leftWrist.x ;
        right_wrist = results[0].pose.rightWrist.x ;
        console.log(left_wrist);
        console.log(right_wrist);
        difference = left_wrist - right_wrist;
        console.log(difference);
    }
    else {
        console.log("nop");
    }
}