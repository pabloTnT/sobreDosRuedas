$(document).ready(function(){
    var imgItem = $('.slider li').length;
    var pagPos = 1;
    for(var i = 0; i<imgItem; i++){
        $('.paginacion').append('<li class="fa fa-circle"></li>');
    }
    
$('.slider li').hide();
$('.slider li:first').show();
$('.paginacion li:first').css({color:'red'});
    
$('.paginacion li').click(paginacion);
$('.der span').click(siguiente);
$('.izq span').click(anterior);
setInterval(siguiente, 5000);
tabs();
    
function paginacion(){
    
    pagPos = $(this).index()+1;
    $('.slider li').hide();
    $('.slider li:nth-child('+pagPos+')').fadeIn();
    $('.paginacion li').css({color:'grey'});
    $('.paginacion li:nth-child('+pagPos+')').css({color:'red'});
    
}
    
function siguiente(){
    if(pagPos >= imgItem){
        pagPos = 1;
    }else{
        pagPos++;
    }
    $('.paginacion li').css({color:'grey'});
    
    $('.paginacion li:nth-child('+pagPos+')').css({color:'red'});
    
    $('.slider li').hide();
    
    $('.slider li:nth-child('+pagPos+')').fadeIn(1000);
}

function anterior(){
if(pagPos <= 1){
        pagPos = imgItem;
    }else{
        pagPos--;
    }
    $('.paginacion li').css({color:'grey'});
    
    $('.paginacion li:nth-child('+pagPos+')').css({color:'red'});
    
    $('.slider li').hide();
    
    $('.slider li:nth-child('+pagPos+')').fadeIn();
}
    
function tabs(){
    $('#grupos').show();
    $('#eventos').hide();
    $('#anuncios').hide();
    $('#btnGrupos').on('click', function(){
    $('#grupos').show();
    $('#eventos').hide();
    $('#anuncios').hide();  
                     });
    $('#btnEventos').on('click', function(){
    $('#grupos').hide();
    $('#eventos').show();
    $('#anuncios').hide();  
                     });
    $('#btnAnuncios').on('click', function(){
    $('#grupos').hide();
    $('#eventos').hide();
    $('#anuncios').show();  
                     });
}
});