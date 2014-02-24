// document.getElementById('greet').onclick = function() {
//   alert('this is no real greeting... I demand a modular and enthusiastic greeting!');
// };

document.getElementById('greet').onclick = function() { 
  require(['greeter'], function(Greeter) {
    Greeter.greet();
  });
};