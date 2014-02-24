var Greeter = {
  greetSrc: 'img/greet.jpg',
  greet: function() {
    var img = document.createElement('img');
    img.src = this.greetSrc;

    document.body.appendChild(img);
  }
};