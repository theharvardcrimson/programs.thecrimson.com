$(document).ready(function(){
	var $iframe = $('iframe');

	$iframe.load(function(){
		$iframe.contents().find('input').change(function(){
			updatePrice();
		});
	});
});

function updatePrice() {
	var $iframe = $('iframe').contents();

	var price = 30; // Base price is $30

	var totval = parseInt($iframe.find('#total_students').val());
	var retval = parseInt($iframe.find('#returning_students').val());

	var certs_val = parseInt($iframe.find('#certificates').val());
	var shirts_val = parseInt($iframe.find('#shirts').val());
	var sweatshirts_val = parseInt($iframe.find('#sweatshirts').val());
	var packages_val = parseInt($iframe.find('#packages').val());


	var certs = isNaN(certs_val) ? 0 : certs_val;
	var shirts = isNaN(shirts_val) ? 0 : shirts_val;
	var sweatshirts = isNaN(sweatshirts_val) ? 0 : sweatshirts_val;
	var packages = isNaN(packages_val) ? 0 : packages_val;

	var tot_students = isNaN(totval) ? 0 : totval;
	var ret_students = isNaN(retval) ? 0 : retval;
	var review = $iframe.find('#review input:checked').val() == 'Yes';
	var new_school = $iframe.find('#new_school input:checked').val() || "";
	var is_school = $iframe.find('#is_school input:checked').val() || "";

	var returning_student_fee = 55;
	var new_student_fee = 65;
	if (new_school.startsWith('Yes')) {
		new_student_fee = 75;
		price += 20;
	}
	if (is_school.startsWith('No')) {
		price = 0;
	}

	tot_students = Math.max(tot_students, ret_students);
	price += (tot_students - ret_students) * new_student_fee;
	price += ret_students * returning_student_fee;
	price += 10*certs + 20*shirts + 30*sweatshirts + 50*packages;

	if (review) {
		price += 50;
	}

	$('div#pricebox').html('$' + price);
	$('form[name="_xclick"] > input[name="amount"]').val(price);
}
