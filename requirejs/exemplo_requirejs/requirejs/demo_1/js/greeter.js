define(function() {
  // Private greet src that the module user won't be able to change
  var greetSrc = 'img/greet.jpg';

  // Use of the revealing module pattern
  return {
    greet: function() {
      var img = document.createElement('img');
      img.src = greetSrc;

      document.body.appendChild(img);
    }
  };
});