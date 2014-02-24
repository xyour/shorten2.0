
var ShortenViewCollection = Backbone.View.extend({
	//collection: BitCoinWallet,

	initialize: function(){
		var elemTab = $('<table>');
		var tHead = $('<thead>');
		var linha = $('<tr>');
		var hd1 = $('<th>');
		var hd2 = $('<th>');
		var tBody = $('<tbody>');

		elemTab.addClass('table table-striped');
		elemTab.attr('id', 'tabelaURLs');
		hd1.text('Short');
		hd2.text('Original');
		linha.append(hd1);
		linha.append(hd2);
		tHead.append(linha);
		elemTab.append(tHead);
		elemTab.append(tBody);
		this.setElement(elemTab);

		this.collection.on('add', this.addOne, this);
		this.collection.on('change', this.changeOne, this);
		this.collection.on('reset', this.removeAll, this);
	},

	removeAll: function(){
		var a = $('tbody', this.$el);

		$('tr', a).remove();
		//$('<tbody>', this.$el).remove();
		/*
		this.collection.forEach(function(sht){
			sht.remove();
		}, this);
*/
	},

	addOne: function(sht){
		var shortenView = new ShortenView({ model: sht });

		this.$el.append(shortenView.render().el);
	},

	changeOne: function(sht){
		
	},

	render: function(){
		this.collection.forEach(this.addOne, this);
	}
})
