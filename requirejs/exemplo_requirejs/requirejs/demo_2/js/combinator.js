define([], function() {

    var Combinator = function(lo, ro, r) {
      this.leftOperand = lo;
      this.rightOperand = ro;
      this.result = r;
      this.toRender = [
        this.leftOperand,
        'plus',
        this.rightOperand,
        'equals',
        this.result
      ];
    };

    Combinator.prototype.renderNext = function(container) {
      require([this.toRender[0]], function(Logo) {

        Logo.render(container);

        this.toRender.splice(0, 1);

        if(this.toRender.length === 0) {
          document.onkeyup = null;
        }
      }.bind(this));
    };

    Combinator.prototype.combine = function(container) {

      document.onkeyup = function(evt) {

        if(evt.which === 32) {
          this.renderNext(container);
        }
      }.bind(this);
    };

    return Combinator;
  }
);