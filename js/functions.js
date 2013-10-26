jQuery(document).ready(function ($) {

    // prodcut other images

    $(".item-other-images-car").carouFredSel({
    	width : "100%",
        auto: false,
        prev: "#other-prev",
        next: "#other-next"
    });

    // need products

    $("#b-blocks-car").carouFredSel({
    	width : "100%",
        auto: false,
        prev: "#b-toprev",
        next: "#b-tonext"
    });

    // see also

    $(".see-also-car").carouFredSel({
    	width : "100%",
        auto: false,
        prev: "#also-prev",
        next: "#also-next"
    });

    // product page fancybox

    $(".fancybox").fancybox({

        prevEffect: 'none',
        nextEffect: 'none',
        helpers: {
            title: {
                type: 'inside'
            },
            thumbs: {
                width: 70,
                height: 70
            }
        }
    });

    //вешаем плагин на контейнер-картинку
    $(".my-foto-container").imagezoomsl({

        innerzoommagnifier: true,
        classmagnifier: window.external ? window.navigator.vendor === "Yandex" ? "" : "round-loupe" : "",
        magnifierborder: "5px solid #F0F0F0", // fix для Opera, Safary, Yandex		  
        zoomrange: [2, 8],
        zoomstart: 2,
        magnifiersize: [150, 150]
    });


    //клик по превью-картинке
    $(".my-foto").click(function () {

        var that = this;
        $('.mine-image').attr("href", $(that).attr("data-large"))
        //копируем атрибуты из превью-картинки в контейнер-картинку
        $(".my-foto-container").fadeOut(600, function () {

            $(this).attr("src", $(that).attr("data-middle")) // путь до small картинки
            .attr("data-large", $(that).attr("data-large")) // путь до big картинки

            //дополнительные атрибуты, если есть
            //.attr("data-title",       $(that).attr("data-title"))       // заголовок подсказки
            //.attr("data-help",        $(that).attr("data-help"))        // текст подсказки    
            //.attr("data-text-bottom", $(that).attr("data-text-bottom")) // текст снизу картинки

            .fadeIn(1000);
        });

        return false;
    });


    $('.js #open-nav-mobile').click(function (e) {
		$('body').toggleClass('active');
		e.preventDefault();
    });

});