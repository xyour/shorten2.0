
var shortenColl = new ShortenCollection();
var shortenViewC = new ShortenViewCollection({collection: shortenColl});

// $.ajax({url: 'http://kurto.r42.in/recent', success: function(recent) { console.log(recent); } })

$.ajax({url: 'http://kurto.r42.in/recent', success: function(recent) { 
	var shorten;
	var shortenView;

	for (var i=0; i<recent.length; i++){
		shorten = new Shorten();
		shorten.set({
			id: recent[i].id, 
			originalURL: recent[i].url,
			count: recent[i].count
		});
		shortenView = new ShortenView({model: shorten});
		shortenColl.add(shorten);
	}
	
/*
	for (var i=0; i<recent.length; i++){
		var linha = $('<tr>');
		var col1 = $('<td>');
		var col2 = $('<td>');

		col1.text(shorten.get('staticURL') + recent[i].id);
		col2.text(recent[i].url);

		if (recent[i].count>0){
			var elCount = $('<span>');
			elCount.text(recent[i].count);
			elCount.addClass('badge');
			col1.append(elCount);
		}

		linha.append(col1);
		linha.append(col2);
		$('#tabelaURLs').append(linha);
	}
*/
	//console.log(recent); 
} })


$('#conteudo').append(shortenViewC.$el);

/*
Objecto para cada link:7
	count: 1
	id: "6SIxup"
	url: "http://slbenfica.pt"
*/