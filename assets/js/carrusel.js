$(document).ready(function () {


    const container = $('.cards-container');
    const item = $('.BodyMain-card');
    const next = $('.carousel-btn.next');
    const previous = $('.carousel-btn.prev');
    console.log('container :>> ', container);
    console.log('item :>> ', item);

    function moveNext() {
        const maxScroll = container[0].scrollWidth - container[0].clientWidth;
        const currentScroll = container.scrollLeft();
    
        if (currentScroll >= maxScroll) {
            container.animate({
                scrollLeft: 0
            }, 0);

            moveNext();
            
        } else {
            container.animate({
                scrollLeft: "+=365px"
            }, 500);
        }
    }
    
    function movePrevious() {
        const currentScroll = container.scrollLeft();
    
        if (currentScroll <= 0) {
            container.animate({
                scrollLeft: container[0].scrollWidth - container[0].clientWidth
            }, 0);
            movePrevious();
        } else {
            container.animate({
                scrollLeft: "-=365px"
            }, 500);
        }
    }
    
function autoMove (){
    moveNext();
    setTimeout(autoMove,3000);
}

autoMove();


    next.click(moveNext);
    previous.click(movePrevious);

});
