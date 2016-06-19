$(document).ready(function() {
	var creatures = [];
	$.ajax({
		type: 'GET',
		contentType: 'application/json',

		url: 'http://127.0.0.1:3000/creature',
		success: function(data) {

			console.log('success');
			console.log(data);
		}
	});
	var npcNum = 20;

	while (npcNum--) {
		$('#elementBox').append('<div class="npc">name</div>');
		// var npc = document.createElement('div');
		// npc.setAttribute('class', 'npc');
		// npc.innerHTML = 'Name' + (20 - npcNum);
	}
	//$('#elementBox').scrollTo('100%');

})