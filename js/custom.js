jQuery(document).ready(function($) {
    $('.req_modal').click(function(){
        $('.ui.modal').modal('show');
    });
    $(".aura-link .fa.fa-caret-down").click(function(){
        $('.aura-link:hover .mobile').toggle();
      });

    $(".top-move").click(function (e) {
        $("html, body").animate({scrollTop: 0}, "slow");
        e.preventDefault();
    });


    $(".top-move").click(function (e) {
        $("html, body").animate({scrollTop: 0}, "slow");
        e.preventDefault();
    });


    $(".mobile-menu").click(function(e){
        $(this).prev(".menu-responsive").toggleClass("m-show");
        e.preventDefault();
    });

    function minheader() {
        var wd = $(window).scrollTop();
        if ($(window).width() > 768) {
            if (wd >= 180) {
                $("main > header .navbar_header").addClass("min-header");
                $(".min-header .logo").attr("src", "/images/logo-aura.png");
            }
            else {
                $(".min-header .logo").attr("src", "/images/logo-aura.png");
                $("main > header .navbar_header").removeClass("min-header");
            }
        }
    }

    minheader();
    $(document).scroll(function () {
        minheader();
        social_sroll();
    });
        function social_sroll(){
        var ss = $(window).scrollTop();
        if (ss >= 171){
            $(".share").addClass("ss_top");

        }
        else{
            $(".share").removeClass("ss_top");
        }
    }
    function banner_inner_load(){
            var bbimg  =$(".bb-img").text();
            if (bbimg  != 0){
                $(".blog-banner").attr("style", "background:url("+bbimg+") no-repeat; background-size:cover;" );
            }
    
        }
    
        $(".inner-child-features").click(function(e){
            var  ainn = $(".inner-child-features.inner-icf-active").hasClass("inner-icf-active");
            if(ainn === false){
                $(this).addClass("inner-icf-active");
            }
            else
            {
                $(".inner-child-features").removeClass("inner-icf-active");
            }
    e.preventDefault();
        });
    banner_inner_load();


});