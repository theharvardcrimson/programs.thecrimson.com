$(document).ready(function(){
	var $iframe = $('iframe');

	$iframe.load(function(){
		$iframe.contents().find('input').change(function(){
			updatePrice();
		});
	});
});

function updatePrice() {
	if (window.springEarlyRegistration === undefined) {
		window.springEarlyRegistration = false;
	}

	var $iframe = $('iframe').contents();

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


	var price = 0; // Base price is $0
	var price = 0;

	var per_student_fee;
	if (window.fallEarlyRegistration) {
		if (tot_students >= 5) {
			per_student_fee = new_school.startsWith('No') ? 70 : 80;
		} else {
			per_student_fee = 90;
		}
	} else {
		if (tot_students >= 5) {
			per_student_fee = new_school.startsWith('No') ? 85 : 100;
		} else {
			per_student_fee = 105;
		}
	}

	price += per_student_fee * tot_students;
	price += 10*certs + 20*shirts + 30*sweatshirts + 50*packages;

	if (review) {
		price += 50;
	}

	$('div#pricebox').html('$' + price);
	$('form[name="_xclick"] > input[name="amount"]').val(price);
}
