function selectNavBtn(btn_id){
	$("li.active").removeClass("active");
	$(btn_id).addClass("active");
}

$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('.first-row').offset().top; // pixels to the top of first-row
        if(scroll > os){
            $(".custom-navbar").addClass("bottom-nav-border");
        }
        else if (scroll < os){
        	$(".custom-navbar").removeClass("bottom-nav-border");
        }
    });
});

$(".nav-link").click(function(){
	selectNavBtn(this);
});