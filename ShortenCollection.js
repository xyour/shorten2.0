

var ShortenCollection = Backbone.Collection.extend({
	model: Shorten,

	findModel: function(m){
		for (var i=0; i<this.length; i++){
			if (this.models[i].get('id') == m.id)
				return this.models[i];
		}
	}
});

