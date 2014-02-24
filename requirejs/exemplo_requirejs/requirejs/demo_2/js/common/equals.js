define(
  [
    'underscore',
    'text!templates/image.html'
  ],
  function(_, templateText) {

    var compiledTemplate = _.template(templateText);
    var html = compiledTemplate({ name: 'equals' });

    return {
      render: function(container) {
        var span = document.createElement('span');
        span.innerHTML = html;
        container.appendChild(span);
      }
    };
  }
);