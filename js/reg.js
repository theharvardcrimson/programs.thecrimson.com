$(document).ready(function(){
	var $iframe = $('iframe');

	$iframe.ready(function){
		$iframe.contents().find('input[name="entry.580305412"], input[name="returning_students"], input[name="entry.1881152076"]').change(function(){
			updatePrice();
		});
	});
});

function updatePrice() {
	var $iframe = $('iframe').contents();

	var price = 30; // Base price is $30

	var tot_students = parseInt($iframe.find('input[name="entry.580305412"]').val());
	var ret_students = parseInt($iframe.find('input[name="returning_students"]').val());
	var review = $iframe.find('input[name="entry.1881152076"]:checked').val() == 'Yes';

	price += (tot_students - ret_students) * 65;
	price += ret_students * 55;
	if (review) {
		price += 50;
	}

	$('div#pricebox').html('$' + price);
}