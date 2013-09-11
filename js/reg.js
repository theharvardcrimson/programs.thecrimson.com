$(document).ready(function(){
	var $iframe = $('iframe');

	$iframe.load(function(){
		$iframe.contents().find('input[name="entry.580305412"], input[name="returning_students"], input[name="entry.1881152076"]').change(function(){
			updatePrice();
		});
	});
});

function updatePrice() {
	var $iframe = $('iframe').contents();

	var price = 30; // Base price is $30

	var totval = parseInt($iframe.find('input[name="entry.580305412"]').val());
	var retval = parseInt($iframe.find('input[name="returning_students"]').val());

	var tot_students = isNaN(totval) ? 0 : totval;
	var ret_students = isNaN(retval) ? 0 : retval;
	var review = $iframe.find('input[name="entry.1881152076"]:checked').val() == 'Yes';

	price += (tot_students - ret_students) * 65;
	price += ret_students * 55;
	if (review) {
		price += 50;
	}

	$('div#pricebox').html('$' + price);
	$('form[name="_xclick"] > input[name="amount"]').val(price);
}