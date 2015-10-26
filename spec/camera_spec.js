// Create a super 8 camera
// It starts out with no film.
// Write a function to add a film cartridge. ( a cartridge contains 3,600 frames )
// Write a function to shoot film at normal speed (18 fps). It should only shoot if there is film in the camera and prompt you to add film if it is empty.
// Write a function to shoot film at slow motion (36 fps). It should only shoot if there is film in the camera and prompt you to add film if it is empty.
// Write a function to shoot film at fast motion (9 fps). It should only shoot if there is film in the camera and prompt you to add film if it is empty.
// What other features can a camera have? Add more.
// When you are done make the camera run.

var Camera = require('../camera.js');

describe('Camera', function() {
  
  it("It starts out with no film", function() {
    var camera = new Camera();
    expect(camera.film).toEqual(0)
  });

  it("Write a function to add a film cartridge. ( a cartridge contains 3,600 frames ", function() {
    var camera = new Camera();
    camera.addFilm();
    expect(camera.film).toEqual(3600)
  });
 
  it("should only shoot if there is film in the camera", function() {
    var camera = new Camera();
    expect(camera.ready()).toEqual("Not ready. Load film")
  });
 
  it("should only shoot if there is film in the camera", function() {
    var camera = new Camera();
    camera.addFilm()
    expect(camera.ready()).toEqual("Ready.." + camera.film + " ..frames left" )
  });

  it("should shoot film at normal speed (18 fps)", function() {
    var camera = new Camera();
    camera.addFilm();
    camera.shoot('normalSpeed');
    expect(camera.speed).toEqual(18)
  });

  it("should shoot film at slow Motion (36 fps)", function() {
    var camera = new Camera();
    camera.addFilm();
    camera.shoot('slowMotion');
    expect(camera.speed).toEqual(36)
  });

  it("should shoot film at fast Motion (9 fps)", function() {
    var camera = new Camera();
    camera.addFilm();
    camera.shoot('fastMotion');
    expect(camera.speed).toEqual(9)
  });



})
