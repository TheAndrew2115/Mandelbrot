var minval = -0.5;
var maxval = 0.5;

var minSlider;
var maxSlider;

function setup() {
  //createCanvas(360,240);
  createCanvas(400, 400);
  pixelDensity(1);

  minSlider = createSlider(-2.0, 0, -2.0, 0.01);
  maxSlider = createSlider(0, 2.0, 2.0, 0.01);
}

function draw() {
  var max = 50;

  loadPixels();
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {

      var a = map(i,0,width,minSlider.value(),maxSlider.value()); //real coefficient
      var b = map(j,0,height,minSlider.value(),maxSlider.value()); //complex coefficient

      var origA = a;
      var origB = b;

      var z = 0;
      var n = 0;

      while (n < 100) {
        var realComp = a*a - b*b;
        var imComp = 2*a*b;

        a = realComp + origA;
        b = imComp + origB;

        if (abs(a*a+b*b)>2) {
          break;
        }
        n++;
      }
      //var bright = map(n, 0, max, 0, 255); //greyscale version
      //var bright = 200; //pure grey
      var bright = map(n, 0, max, 0, 1); //This is not my idea
      bright = map(sqrt(bright), 0, 1, 0, 255); //Normalizing the brightness and mapping it to a 255 color-range scale

      if (n >= max){
        bright = 0;
      }
      var p = (i + j * width) * 4;
      pixels[p+0] = bright;
      pixels[p+1] = bright;
      pixels[p+2] = bright;
      pixels[p+3] = 255;
    }
  }
  updatePixels();
}
