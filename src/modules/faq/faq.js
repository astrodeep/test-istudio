//BEGIN
/*$(".faq-article__appellation").on("click", function(e) {

    e.preventDefault();
    let $this = $(this);

    if (!$this.hasClass("active")) {
        $(".faq-article__description").stop().slideUp(400);
        $('.faq-article__appellation').removeClass("active");
    }
    $this.toggleClass("active");
    $this.next().stop().slideToggle();


});*/
//END


// JS
let acc = document.getElementsByClassName("faq-article__appellation");
let i, clicked= false;

let panel = acc[0].nextElementSibling;
acc[0].classList.toggle("active");
panel.style.maxHeight = panel.scrollHeight + "px";

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        clicked = true;

        if(clicked){

            for (k = 0; k < acc.length; k++) {
                acc[k].classList.remove("active");
                acc[k].nextElementSibling.style.maxHeight = null;
            }
            clicked = false;

        }

        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });

}
