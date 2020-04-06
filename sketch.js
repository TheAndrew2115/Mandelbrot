function setup() {
  createCanvas(360, 240);
  pixelDensity(1);
  loadPixels();

  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      var p = (i + j * width) * 4;
      pixels[pix+0] = 51;
      pixels[pix+1] = 51;
      pixels[pix+2] = 51;
      pixels[pix+3] = 51;
    }
  }
  updatePixels();
}
