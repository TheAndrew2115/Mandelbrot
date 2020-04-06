function setup() {
  //createCanvas(360,240);
  createCanvas(720, 720);
  pixelDensity(1);
  loadPixels();

  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {

      var a = map(i,0,width,-3,3); //real coefficient
      var b = map(j,0,height,-3,3); //complex coefficient

      var origA = a;
      var origB = b;

      var z = 0;
      var n = 0;

      while (n < 100) {
        var realComp = a*a - b*b;
        var imComp = 2*a*b;

        a = realComp + origA;
        b = imComp + origB;

        if (abs(a+b) > 10) {
          break;
        }
        n++;
      }
      var bright = map(n, 0, 100, 0, 255);

      var p = (i + j * width) * 4;
      pixels[p+0] = bright;
      pixels[p+1] = bright;
      pixels[p+2] = bright;
      pixels[p+3] = 255;
    }
  }
  updatePixels();
}
