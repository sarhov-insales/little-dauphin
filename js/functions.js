jQuery(document).ready(function ($) {

    // prodcut other images

    $(".item-other-images-car").carouFredSel({
        auto: false,
        prev: "#other-prev",
        next: "#other-next"
    });

    // need products

    $("#b-blocks-car").carouFredSel({
        auto: false,
        prev: "#b-toprev",
        next: "#b-tonext"
    });

    // see also

    $(".see-also-car").carouFredSel({
        auto: false,
        prev: "#also-prev",
        next: "#also-next"
    });

    // product page fancybox

	$(".fancybox").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});



});