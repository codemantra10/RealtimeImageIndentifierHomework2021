function setup(){
    canvas=createCanvas(350,350);
    canvas.position(550,250);
    video=createCapture(VIDEO);
    video.hide();
    console.log(ml5.version);
    imageIndentifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TxFhP675n/model.json",modelLoaded);
   
    }
    function draw(){
    image(video,0,0,350,350);
    imageIndentifier.classify(video,gotResult);
    }
    function modelLoaded(){
    console.log("Great Job...you are a rockstar🤘🏽");
    }
    function gotResult(Error,Result){
    if (Error) {
    console.log(Error);    
    }
    else{
    console.log(Result);
    accuracy=Math.floor(Result[0].confidence*100)+"%";
document.getElementById("itemname").innerHTML=Result[0].label;
document.getElementById("number").innerHTML=accuracy
    }
    }
