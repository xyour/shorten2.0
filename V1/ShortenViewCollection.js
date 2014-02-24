
var ShortenViewCollection = Backbone.View.extend({
	//collection: BitCoinWallet,

	initialize: function(){
		var elemTab = $('<table>');
		var linha = $('<tr>');
		var hd1 = $('<th>');
		var hd2 = $('<th>');

		elemTab.addClass('table table-striped');
		hd1.text('Short');
		hd2.text('Original');
		linha.append(hd1);
		linha.append(hd2);
		elemTab.append(linha);
		this.setElement(elemTab);

		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addAll, this);
	},

	addAll: function(){
		this.collection.forEach(this.addOne, this);
	},

	addOne: function(sht){
		var shortenView = new ShortenView({ model: sht });
		
		//this.$el = $('#tabelaURLs');

		this.$el.append(shortenView.render().el);

		// $('#tabelaURLs').append(shortenView.render().el);
	},

	render: function(){
		
		this.collection.forEach(this.addOne, this);

		// return this;
	}
})
