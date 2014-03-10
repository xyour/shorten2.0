// Classe BitCoin

var Shorten = Backbone.Model.extend({
	defaults: {
		shortURL: '',
		originalURL: '',
		count: 0,
		id: '',
		staticURL: 'http://api.julio.r42.in/'
	},

	initialize: function(){
		this.on('change:id', this.changeId, this);
		this.on('invalid', this.printErrorMessage, this);
	},

	changeId: function(){
		this.set({shortURL: ('' + this.get('staticURL') + this.get('id')) });
		//console.log(this.attributes);
	},

	validate: function(attributes){
		
	},

	printErrorMessage: function(){
		console.log(this.validationError);
	}
});
