/**
 * App entry point
 *
 */
requirejs.config({
  baseUrl: '.',
  paths: {
    // Libs
    'text'         : 'lib/text',
    'underscore'   : 'lib/underscore',

    // Common modules
    'plus'         : 'js/common/plus',
    'equals'       : 'js/common/equals',
    'otter'        : 'js/common/otter',

    // Logo modules
    'teddy'        : 'js/logos/teddy',
    'happy_otter'  : 'js/logos/hipster_otter',
    'glasses'      : 'js/logos/glasses',
    'hipster_otter': 'js/logos/hipster_otter',

    // Combinator
    'combinator': 'js/combinator',
  },
  // Configure the loading of non AMD modules
  shim: {
    'underscore': {
      exports: '_'
    }
  }
});

// Click handler for displaying COMBO 1
var combo1Button = document.getElementById('combo1');

combo1Button.onclick = function() {
  require(['combinator'], function(Combinator) {
    var c = new Combinator('otter', 'teddy', 'happy_otter');
    c.combine(document.getElementById('combo1-container'));
  });
};

// Click handler for displaying COMBO 2
var combo2Button = document.getElementById('combo2');

combo2Button.onclick = function() {
  require(['combinator'], function(Combinator) {
    var c = new Combinator('otter', 'glasses', 'hipster_otter');
    c.combine(document.getElementById('combo2-container'));
  });
};
