
window.onload = function() {
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

//   particlesJS.load('particles-js2', 'assets/particles2.json', function() {
//     console.log('callback - particles.js config loaded');
//   });

//   particlesJS.load('particles-js3', 'assets/particles3.json', function() {
//     console.log('callback - particles.js config loaded');
//   });

//   particlesJS.load('particles-js4', 'assets/particles4.json', function() {
//     console.log('callback - particles.js config loaded');
//   });
}

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
