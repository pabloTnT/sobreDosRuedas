$(document).ready(function () {
    var imgGrupos = $('#tablaGrupos img').length;
    var imgItem = $('.slider li').length;
    var pagPos = 1;
    for (var i = 0; i < imgItem; i++) {
        $('.paginacion').append('<li class="fa fa-circle"></li>');
    }

    $('.slider li').hide();
    $('.slider li:first').show();
    $('.paginacion li:first').css({
        color: 'red'
    });

    $('.paginacion li').click(paginacion);
    $('.der span').click(siguiente);
    $('.izq span').click(anterior);
    setInterval(siguiente, 4000);
    tabs();
    zoomImag();

    $('.toggle').click(function () {
        $('.formulario').animate({
            height: "toggle",
            'padding.top': 'toggle',
            'padding-bottom': 'toggle',
            opacity: 'toggle'
        }, "slow");
    });

    function paginacion() {

        pagPos = $(this).index() + 1;
        $('.slider li').hide();
        $('.slider li:nth-child(' + pagPos + ')').fadeIn();
        $('.paginacion li').css({
            color: 'grey'
        });
        $('.paginacion li:nth-child(' + pagPos + ')').css({
            color: 'red'
        });

    }

    function siguiente() {
        if (pagPos >= imgItem) {
            pagPos = 1;
        } else {
            pagPos++;
        }
        $('.paginacion li').css({
            color: 'grey'
        });

        $('.paginacion li:nth-child(' + pagPos + ')').css({
            color: 'red'
        });

        $('.slider li').hide();

        $('.slider li:nth-child(' + pagPos + ')').fadeIn(1000);
    }

    function anterior() {
        if (pagPos <= 1) {
            pagPos = imgItem;
        } else {
            pagPos--;
        }
        $('.paginacion li').css({
            color: 'grey'
        });

        $('.paginacion li:nth-child(' + pagPos + ')').css({
            color: 'red'
        });

        $('.slider li').hide();

        $('.slider li:nth-child(' + pagPos + ')').fadeIn();
    }

    function tabs() {
        $('#grupos').fadeIn();
        $('#eventos').hide();
        $('#anuncios').hide();
        $('#iniciarSesion').hide();
        $('#btnGrupos').on('click', function () {
            $('#grupos').fadeIn();
            $('#eventos').hide();
            $('#anuncios').hide();
            $('#iniciarSesion').hide();
        });
        $('#btnEventos').on('click', function () {
            $('#grupos').hide();
            $('#eventos').fadeIn();
            $('#anuncios').hide();
            $('#iniciarSesion').hide();
        });
        $('#btnAnuncios').on('click', function () {
            $('#grupos').hide();
            $('#eventos').hide();
            $('#anuncios').fadeIn();
            $('#iniciarSesion').hide();
        });
        $('#btnIniciar').on('click', function () {
            $('#grupos').hide();
            $('#eventos').hide();
            $('#anuncios').hide();
            $('#iniciarSesion').fadeIn();
        });
    }

    function zoomImag() {
        //    $('#tablaGrupos img').hover(function () {
        $('.imgAnimate').hover(function () {
                $(this).stop().animate({
                    width: '350px',
                    height: '300px'
                });
                $('th h1').css({
                    'display': 'grid',
                    'color': 'white',
                    'top': '100%'
                });
            },
            function () {
                $(this).stop().animate({
                    width: '250px',
                    height: '200px'
                });
                $('th h1').css({
                    'display': 'none'
                });
            });
    }

});
