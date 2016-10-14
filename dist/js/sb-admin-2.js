var cont = 0;
var width = $(window).width();
var time = 0;

$(function(){

        $('#left').on('click', function(e){
            e.preventDefault();
            $('body').animate( { scrollLeft: '-='+width+'%' }, 1000);
            cont = cont - 1;
        });
        $('#right').on('click', function(e){
            e.preventDefault();
            if (cont >= 4) { 
                 $('body').animate( { scrollLeft: '-='+width*cont+'%' }, 1000);
                 cont = 0;
            }else {
                $('body').animate( { scrollLeft: '+='+width+'%' }, 1000);
                cont = cont + 1;
            }
        });
    /*function moveSlider(direccion) {
        var limite = $()
        indicador = (direccion == 'right') ? indicador+1:indicador-1;
    }*/
});

$(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(function() {
    var imgheight= $('.img-animation').outerHeight()+50;
        $('.detall').css({
            'height': imgheight+'px'
        });
});

$(function () {
    $('carousel').carousel({
        interval:1000
    });
});

$(function (){
    $('.search-input').on('focus',function(){
        $('.sugerent').css({"display":"block"});
    });
    $('.search-input').on('blur',function(){
        $('.sugerent').css({"display":"none"});
    });
});

$(document).ready(

    function(){
    var contview= 0;        
        $('#btn-toggle').on('click',
            function moveUp() {
                if(contview >=0) {
                    $('.seccion_toggle').slideUp(990);
                    $('#index').css({"overflow": "auto"});
                    contview >=1;
                }
            }
        );
});
    

$(function() {
    if ($(window).width() < 767) {
        $('#search-open').on('click',function() {
            $('.hola').hide(500,function(){
                $('.search-responsive').show(500);
                $('#search-closes').show(500);
                $('#search-open').hide(500);
            });
        });
         $('#search-closes').on('click',function() {
            $('.search-responsive').hide(500,function(){
                $('.hola').show(500);
            });
            $('#search-closes').hide(500);
            $('#search-open').show(500);

        });
         $('footer').removeClass('col-md-12');
    }else {
        $('.search-responsive').hide();
        $('.search-responsive').hide();
        $('#search-closes').hide();
        $('#search-closes').hide();
        $('#search-open').hide();
        $('#search-open').hide();
    }
});
/*$(function() {
    var altura = $('#nav').offset().top;
    var altura2 = $('#sidebar').offset().top;
    if ($(window).width() > 768) {
        
        $(window).scroll(function() {
            var altura_del_menu = $('#sidebar').outerHeight(true);
            var windowaltura = $(window).height();
            if ($(window).scrollTop() > altura2){
                if ($(window).height() < altura_del_menu) {
                    $('#sidebar').removeClass('sidebar-fixed').delay(200);
                }else {
                    $('#sidebar').addClass('sidebar-fixed').delay(200);
                }
                
            } else {
                $('#sidebar').removeClass('sidebar-fixed').delay(200);
            }
            if ($(window).scrollTop() > altura ) {
                $('#nav').addClass('nav-fixed').delay(200);
            }else {
                $('#nav').removeClass('nav-fixed').delay(200);
            }
        });
    }else {
        $('#sidebar').removeClass('sidebar-fixed').delay(200);
        $('#nav').removeClass('nav-fixed').delay(200);
    }
});*/
$(function () {
    var navheight = $('#nav2').outerHeight();
    var navheight2 = $('#nav1').outerHeight();
    var navin = $('#navin').outerHeight();
    var navnetwork = $('.nav-network').outerHeight();
    var heightwindows = $(window).height();
    var heightside = (heightwindows-(navin+navheight2+navnetwork));
    if ($(window).width() > 767) {
        $('#sidebar').css({"margin-top":+(navheight-1)+"px"});
        $('#sidebar').css({"position":"fixed"});
        $('#side-menu').css({"height":+heightside+"px"});
        $('#side-menu').css({"overflow":"auto"});
        $('#side-menu').on('click', function (){
            $('.nav-network').css({"box-shadow":"rgb(238, 238, 238) 1px 6px 1px 9px"});
        });

    }else {
        $('#nav1').addClass('navbar-ofer');
        $('#nav2').removeClass('navbar-fixed-top');
        $('#nav2').removeClass('navbar-ofer');
        $('#nav1').addClass('navbar-static-top');
    }
});
$(function() {
    $('#btn-in').on('click',function(){
        $('#login-in').hide(500);
        $('#login-img').show(500);
        $('.login-panel-a').addClass('login-fondo');
        $('#notif-login-in').removeClass('.notif-login-in');
        $('#notif-login-in').css({"display":"none !important"});
        $('#notif > li').css({"display":"block"});
    });
    $('#btn-out').on('click', function() {
        $('#login-in').show(500);
        $('#login-img').hide(500);
        $('.login-panel-a').removeClass('login-fondo');
    });
    $('#btn-add').on('click',function(){
        $('#login-in').hide(500);
        $('#login-add').show(500);
    });
    $('#btn-add-in').on('click',function(){
        $('#login-add').hide(500);
        $('#login-in').show(500);
    });
});




// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function(){

var formulario = document.formulario_registro,
    elementos = formulario.elements;
// Funcion que se ejecuta cuando el evento click es activado

var validarInputs = function(){
    for (var i = 0; i < elementos.length; i++) {
        // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
        console.log(elementos[i]);
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password" || elementos[i].type == "number") {
            // Si es tipo texto, email o password vamos a comprobar que esten completados los input
            if (elementos[i].value.length == 0) {
                console.log('El campo ' + elementos[i].name + ' esta incompleto');
                elementos[i].className = elementos[i].className + " error";
                return false;
            } else {
                elementos[i].className = elementos[i].className.replace(" error", "");
            }
        }
    }

    // Comprobando que las contraseñas coincidan
    if (elementos.pass.value !== elementos.pass2.value) {
        elementos.pass.value = "";
        elementos.pass2.value = "";
        elementos.pass.className = elementos.pass.className + " error";
        elementos.pass2.className = elementos.pass2.className + " error";
    } else {
        elementos.pass.className = elementos.pass.className.replace(" error", "");
        elementos.pass2.className = elementos.pass2.className.replace(" error", "");
    }

    return true;
};

var validarRadios = function(){
    var opciones = document.getElementsByName('sexo'),
        resultado = false;

    for (var i = 0; i < elementos.length; i++) {
        if(elementos[i].type == "radio" && elementos[i].name == "sexo"){
            // Recorremos los radio button
            for (var o = 0; o < opciones.length; o++) {
                if (opciones[o].checked) {
                    resultado = true;
                    break;
                }
            }

            if (resultado == false) {
                elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                console.log('El campo sexo esta incompleto');
                return false;
            } else {
                // Eliminamos la clase Error del radio button
                elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                return true;
            }
        }
    }
};

var validarCheckbox = function(){
    var opciones = document.getElementsByName('terminos'),
        resultado = false;

    for (var i = 0; i < elementos.length; i++) {
        if(elementos[i].type == "checkbox"){
            for (var o = 0; o < opciones.length; o++) {
                if (opciones[o].checked) {
                    resultado = true;
                    break;
                }
            }

            if (resultado == false) {
                elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                console.log('El campo checkbox esta incompleto');
                return false;
            } else {
                // Eliminamos la clase Error del checkbox
                elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                return true;
            }
        }
    }
};

var enviar = function(e){
    if (!validarInputs()) {
        console.log('Falto validar los Input');
        e.preventDefault();
    } else if (!validarRadios()) {
        console.log('Falto validar los Radio Button');
        e.preventDefault();
    } else if (!validarCheckbox()) {
        console.log('Falto validar Checkbox');
        e.preventDefault();
    } else {
        console.log('Envia');
        e.preventDefault();
    }
};

var focusInput = function(){
    this.parentElement.children[1].className = "label active";
    this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
};

var blurInput = function(){
    if (this.value <= 0) {
        this.parentElement.children[1].className = "label";
        this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
    }
};

// --- Eventos ---
formulario.addEventListener("submit", enviar);

for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password" || elementos[i].type =="number") {
        elementos[i].addEventListener("focus", focusInput);
        elementos[i].addEventListener("blur", blurInput);
    }
}

}())

$(function(){
    var s = $('input'), f = $('form'), a = $('.after'), m = $('h4');

    s.focus(function(){
      if( f.hasClass('open') ) return;
      f.addClass('in');
      setTimeout(function(){
        f.addClass('open');
        f.removeClass('in');
      }, 1300);
    });

    a.on('click', function(e){
      e.preventDefault();
      if( !f.hasClass('open') ) return;
       s.val('');
      f.addClass('close');
      f.removeClass('open');
      setTimeout(function(){
        f.removeClass('close');
      }, 1300);
    })

    f.submit(function(e){
      e.preventDefault();
      m.html('Thanks, high five!').addClass('show');
      f.addClass('explode');
      setTimeout(function(){
        s.val('');
        f.removeClass('explode');
        m.removeClass('show');
      }, 3000);
    })
});

$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 767) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
     return this.href == url;
    }).addClass('active').parent();

    while(true){
        if (element.is('li')){
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});
/*SideBar-Secund Effect*/

$(function () {


        var contadores = 0;

        function sidebarin() {
            $('#sidebar-secund').hide(function() {
                $('#sidebar').removeClass('c');
                $('#sidebar').addClass('o');
                $('.animation-nav').animate({backgroundColor: 'rgba(255,255,255,1)'});
                $('#sidebar-primary').show('fast');
            });
            return (0);
        }

        function sidebarout() {
            $('#sidebar-primary').hide(function() {
                $('#sidebar').removeClass('o');
                $('#sidebar').addClass('c');
                $('.animation-nav').animate({backgroundColor: 'rgba(120,132,254,1)'});
                $('#sidebar-secund').show('fast');
            });
            return (0);
        }

        function medirchats() {
            var navheight2 = $('#nav1').outerHeight();
            $('#chats').css({
                "margin-top": + navheight2 + "px"
            });
        }

        function sidebarinchats() {
            $('#chats').removeClass('cc');
            $('#chats').addClass('o',function(){

                $('.chats-list').removeClass('hiden');
                $('.chats-list').addClass('showw'); 
            });
            $('.icon-chats').hide(); 
        }

        function sidebaroutchats() {
            $('#chats').removeClass('o')
            $('#chats').addClass('cc',function(){
                $('.chats-list').removeClass('showw');
                $('.chats-list').addClass('hiden');
            });
            $('.icon-chats').show();
            contadores = 0; 
        }

        function medirlist() {
            var navheight2 = $('#nav1').outerHeight();
            var heightwindows = $(window).height();
            var heightchats = heightwindows-(navheight2+110);
            $('.chats .list').css({
                'height': heightchats + 'px'
            });
            return (0);
        }

        function medirhistory() {
            var navheight2 = $('#nav1').outerHeight();
            var heightwindows = $(window).height();
            var chatsbody = heightwindows-(135+100+navheight2);
            $('.chat-history').css({
                'height': chatsbody + 'px'
            });
            return (0);
        }

        function animationviewchat() { 

            $('#chats').addClass('oo');
            $('#chats').removeClass('o'); 
            $('.chats-message').addClass('showw');
            $('.chats-message').removeClass('hiden');
        }
        function animationclosechat() { 
            $('#chats').removeClass('oo');
            $('#chats').removeClass('o'); 
            $('.chats-message').removeClass('showw');
            $('.chats-message').removeClass('hiden');
        }

        function viewchatmessage() {
            $('.chats-message').removeClass('hiden');
            $('.chats-message').addClass('showw');
            return (0);
        }

        function viewchatlist() {
           $('.chats-list').removeClass('hiden');
            $('.chats-list').addClass('showw');
            return (0);
        }

        function chat() {

            $('#chats').show("fast",function() {
                if (time == 1) {
                    viewchatlist(),medirlist()
                }

                if (time == 0) {
                    viewchatlist(),medirlist()
                }
                
                $('.after').on('click',function(){
                    animationclosechat()
                });

                var estado = 0;
                $('.l').on('click',function(){

                        if (estado == 0) {
                            animationviewchat(),medirhistory()
                            estado = 1;
                        }else

                        if (estado == 1) {
                            animationclosechat()
                            estado = 0;
                        }
                });

                $('.close-chat').on('click',function() {
                    $('.chats-list').removeClass('showw');
                    $('.chats-list').addClass('hiden');

                    $('.chats-message').removeClass('showw');
                    $('.chats-message').addClass('hiden');

                    sidebaroutchats()
                });
            });
          
            return (0);
        }

        $('#open-chat').on('click',function() {
            sidebarinchats(),'fast',chat();
            time = 1;
        });

        $('.icon-chats').on('click',function() {
            sidebarinchats(),'fast',chat();
            time = 0;
        });

        $('#sidebar').hover(function() {
            sidebarin();
        }, function() {        
            sidebarout();
        });            
    
});



$(function() {
    if (width >= 767) {
        $('#mosaico').on('click',function() {
            $('#view .art').each(function(index){
                $(this).removeClass('col-md-12');
                $(this).addClass('col-md-4');
                $('.img-art-view').removeClass('img-height');
                $('.img-art-view').removeClass('img-width');
                $('.detall-art').removeClass('detall-art-list');
                $('.detall-art').addClass('padding-mosaico');
                $('.detall-art').removeClass('detall-art-img');
                $('.text-art').hide();
            });
        }); 
        $('#list').on('click',function() {
            $('#view .art').each(function(index){
                $(this).removeClass('col-md-4');
                $(this).addClass('col-md-12');
                $('.img-art-view').addClass('img-height');
                $('.img-art-view').addClass('img-width');
                $('.detall-art').removeClass('detall-art-list');
                $('.detall-art').removeClass('padding-mosaico');
                $('.detall-art').addClass('detall-art-img');
                $('.text-art').show();
            });
        });
    }
    /*Cariito de Compras Responsive Lista*/
    if (width <= 767){
        $('#view-cart-shopping .art').each(function(index){
            $('.img-art-view').removeClass('img-height');
            $('.img-art-view').removeClass('img-width');
            $('.detall-art').removeClass('detall-art-list');
            $('.detall-art').addClass('padding-mosaico');
            $('.detall-art').removeClass('detall-art-img');
            $('.text-art').hide();
        });
    }
});
/*Windows Modal View Art*/
$(function() {
    $('#view').on('click','#view-art', function() {
        $('body').css({"overflow":"hidden"});
        $('.windows-modal').css({"display":"block"});
        $('.windows-modal #art-detall').addClass('animate-view');
        $('.windows-modal #art-detall').removeClass('animate-hide');
    });
    $('#hide-art').on('click', function() {
        $('body').css({"overflow":"auto"});
        $('.windows-modal #art-detall').addClass('animate-hide');
        $('.windows-modal').css({"display":"none"});
        $('.windows-modal #art-detall').removeClass('animate-view');
        
    });
});

/*/Windows Modal View Art*/
/*detall product*/
$(function(){
    var open = $('#btn-d-usua'), close = $('#close');
    var map= $('#map');

    $(open).on('click',function (){
        $('.descrip-usua').show(500);
    });

    $(close).on('click',function(){
        $('.descrip-usua').hide(500);
    });

    $(map).on('click', function (){
        if (cont == 0) {
            $('.map').show(500);
            cont = 1;
        }else {
            $('.map').hide(500);
            cont = 0;
        }
    });
});
/*detall product*/