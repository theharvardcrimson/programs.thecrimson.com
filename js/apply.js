jQuery(function() {
    console.log(jQuery('li'));
    jQuery('#categories li').click(function() {
        if (jQuery(this).hasClass('multi')) {
            jQuery('.multi').removeClass('active');
            jQuery(this).addClass('active');
            }
        else {
            var rel_id = jQuery(this).attr('data-form');
            var f = jQuery('#' + rel_id);
            if (!f.hasClass('active')) {
                jQuery('.application').removeClass('active');
                f.addClass('active');
            }
        }
    });
 });
