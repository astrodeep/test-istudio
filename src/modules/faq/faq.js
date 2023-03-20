//BEGIN
$(".faq-article__appellation").on("click", function(e) {

    e.preventDefault();
    let $this = $(this);

    if (!$this.hasClass("active")) {
        $(".faq-article__description").stop().slideUp(400);
        $('.faq-article__appellation').removeClass("active");
    }
    $this.toggleClass("active");
    $this.next().stop().slideToggle();


});
//END
