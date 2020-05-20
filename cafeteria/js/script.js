$(document).ready(function(){

    /* Efecto menú */

    $('.menu a').each(function(index){
        $(this).css({top: "-200px"}) 
        $(this).animate({top: 0}, 2000 + (index * 500))
    })

    /* Efecto titulo header */

    if ($(window).width() > 800) {
        $('header .textos').css({opacity : 0, marginTop: 0})
    }
        $('header .textos').animate({opacity : 1, marginTop: "-55px"}, 1500)

   /* Efecto parallax en sección acerca de */
   
    $(window).scroll(function(){
        var anchopantalla = $(window).width()
        if (anchopantalla > 800) {
            var scroll = $(window).scrollTop()

            // $('header .textos').css({"transform" : "translate(0 + 'scroll / 2'%)"})
            $('header .textos').css({
                'transform' : 'translate(0, ' + scroll / 2 + '%)'
            })
            $('.acerca-de article').css({
                'transform' : 'translate(0, -' + scroll / 6 + '%)'
            })

        }
    })

    // $(window).resize(function(){
    //     var anchopantalla = $(window).width()
    //     if (anchopantalla < 800) {
    //         $('.acerca-de article').css({
    //             'transform' : 'translate(0, 0)'
    //         })
    //     }
    // })
   
})