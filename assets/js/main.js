$(document).ready(function () {
    const module = {
        cacheDom: function () {
            this.functionalities = $('.hover');
            this.cards = $('.BodyMain-card');
            this.parrafo = $('.parrafo');
            this.parrafo1 = $('.parrafo-1');
            this.parrafo10 = $('.parrafo-1-0');
           

        },

        main: function () {
            this.cacheDom();
            this.bindEvents();
            // console.log('container :>> ', this.container);
            // console.log('item :>> ', this.item);
            // console.log('next :>> ', this.next);
            // console.log('previous :>> ', this.previous);
        },

        

        bindEvents: function () {
            this.functionalities.each(function () {
                $(this).on("mouseover", function () {
                    const motionShoes = $(this).find('.BodyMain-card-shoes');
                    motionShoes.addClass('BodyMain-card-efects');
                });

                $(this).on("mouseout", function () {
                    const motionShoes = $(this).find('.BodyMain-card-shoes');
                    motionShoes.removeClass('BodyMain-card-efects');
                });
            });

            this.cards.each(function () {
                const buttonsContainer = $(this).find('.buttons-container');
                const parrafoVisible = $(this).find('.parrafo');
                const parrafo1Visible = $(this).find('.parrafo-1');
                const parrafo10Visible = $(this).find('.parrafo-1-0');

                $(this).on('mouseenter', () => {
                    buttonsContainer.addClass('active');
                    setTimeout(() => {
                        parrafoVisible.addClass('parrafo-visible');
                        parrafo1Visible.addClass('parrafo-1-visible');
                        parrafo10Visible.addClass('parrafo-1-0-visible');
                    }, 500);
                });

                $(this).on('mouseleave', () => {
                    buttonsContainer.removeClass('active');
                    parrafoVisible.removeClass('parrafo-visible');
                    parrafo1Visible.removeClass('parrafo-1-visible');
                    parrafo10Visible.removeClass('parrafo-1-0-visible');
                });
            });

            
        },


    };

    module.main();
});
