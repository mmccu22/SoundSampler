let soundFx = new Tone.Players({

  Drums: "Audios/Drums.wav",

  Sing: "Audios/Sing.wav",

  Train: "Audios/Train.wav",

  Trump: "Audios/Trump.wav",

});

 

let slider;

let deylaySlider,fbSlider, distSlider;

let delAmt = new Tone.FeedbackDelay("8n", 0.5).toDestination();

let distAmt = new Tone.Distortion(0.5);

soundFx.connect(delAmt);

delAmt.connect(distAmt);

distAmt.toDestination();


function setup() {

  //Sound buttons

  let Drums = createButton('Drums');

  let Sing = createButton('Sing');

  let Train = createButton('Train');

  let Trump = createButton('Trump');

 Drums.position(20,100);

 Sing.position(100,100);

 Train.position(100,120);

  Trump.position(20,120);

 

  Drums.size(50);

  Sing.size(50);

  Train.size(50);

Trump.size(50);

  createCanvas(450, 400);

 

 

  deylaySlider = createSlider(0,1, 0, 0.05);

  deylaySlider.position(10,200);

  deylaySlider.size(80);

  deylaySlider.mouseMoved(()=> delAmt.delayTime.value = deylaySlider.value());

 

  fbSlider = createSlider(0,1, 0, 0.05);

  fbSlider.position(10,250 );

 fbSlider.size(80);

  fbSlider.mouseMoved(() => delAmt.feedback.value = fbSlider.value());

 

  distSlider = createSlider(0,255, 0, 0.05);

  distSlider.position(10, 300);

  distSlider.size(80);

  distSlider.mouseMoved(() => distAmt.Distortion = distSlider.value());

 

  Drums.mousePressed(()=>{

    soundFx.player('Drums').start();

  });

 

  Sing.mousePressed(()=>{

    soundFx.player('Sing').start();

  });


  Train.mousePressed(()=>{

    soundFx.player('Train').start();
  });

  Trump.mousePressed(()=>{

    soundFx.player('Trump').start();

  });

}

function draw() {

  background(220, 100, 800);

  text('Choose a Sound!', 130,50);

  text('<-- This slider is to delay each sound: ' +  delAmt.delayTime.value * 100.00 + '%', 130,210);

  text('<--This slider is to add feedback delay to each sound: ' +   delAmt.feedback.value * 100.00 + '%', 130,260);

  text('<--This slider is to add distortion to each sound', 130,310);

}