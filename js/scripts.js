$(document).ready(function() {
	$('ul.sections li').click(function() {
		var selector = $(this).attr('data-section');
		$('ul.sections li, .section-content table').removeClass('active');
		$(this).addClass('active');
		$(selector).addClass('active');
	});
});