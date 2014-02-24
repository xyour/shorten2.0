
var ShortenView = Backbone.View.extend({

	template: _.template($('#listaURLs').html()),
	//template: '',

	initialize: function(){
		this.model.on('change', this.render, this);
	},

	render: function(){
		
		var elem = $('<tr>');
		var col1 = $('<td>');
		var col2 = $('<td>');
		var link1 = $('<a>');
		var link2 = $('<a>');

		link1.attr("href", this.model.get('shortURL'));
		link1.html(this.model.get('shortURL'));
		col1.append(link1);
		// Adiciona número de acessos
		if (this.model.get('count') > 0){
			var elCount = $('<span>');
			elCount.text(this.model.get('count'));
			elCount.addClass('badge');
			col1.append(elCount);
		}
		link2.attr("href", this.model.get('originalURL'));
		link2.html(this.model.get('originalURL'));
		col2.append(link2);

		elem.append(col1);
		elem.append(col2);

		this.setElement(elem);
		

		// this.$el.html(html);
		// this.$el.html(this.template(this.model.attributes));

		return this;
	}
})
