const paginas = ['inicio','nosotros','tienda','organizaciones','contacto'];
const contenedor = document.getElementById("seccionDinamica");

function activarItem(pagina) {
    if(pagina == 'inicio') {
        mostrarInicio();
        $('#inicio').addClass('bordeActivo');
        $('#enlaceinicio').addClass('textoActivo');
    } else {
        paginas.map(i => {
            if(i == pagina) {
                $(`#${pagina}`).addClass('bordeActivo');
                $(`#enlace${pagina}`).addClass('textoActivo');
            } else {
                $(`#${i}`).removeClass('bordeActivo');
                $(`#enlace${i}`).removeClass('textoActivo');
            }
        })
    }
    
};

function cargarIframe(pagina) {
    $('#loader').show();
    contenedor.innerHTML = '';
    var iframe = document.createElement("iframe");

    iframe.src = `${pagina}.html`;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameborder = "0";

    contenedor.appendChild(iframe);
    
    $('#loader').hide();
};

function mostrarInicio() {
    paginas.map(i => {
        $(`#${i}`).removeClass('bordeActivo');
        $(`#enlace${i}`).removeClass('textoActivo');
    })
    contenedor.innerHTML = '<div class="container"><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li><li data-target="#carouselExampleIndicators" data-slide-to="3"></li></ol><div class="carousel-inner"><div onclick="activarItem(`nosotros`);cargarIframe(`nosotros`);" class="carousel-item active altoCarrusel"><img class="d-block w-100" src="archivos/img/nosotrosImg.png" alt="Fasdasdsadas"></div><div onclick="activarItem(`tienda`);cargarIframe(`tienda`);" class="carousel-item altoCarrusel"><img class="d-block w-100" src="archivos/img/tiendaImg.png" alt="Second slide"></div><div onclick="activarItem(`organizaciones`);cargarIframe(`organizaciones`);" class="carousel-item altoCarrusel"><img class="d-block w-100" src="archivos/img/donacionesImg.png" alt="Third slide"></div><div onclick="activarItem(`contacto`);cargarIframe(`contacto`);" class="carousel-item altoCarrusel"><img class="d-block w-100" src="archivos/img/contactoImg.png" alt="Third slide"></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div></div>';
}

$(document).ready(function(){
    $('.btn').click(function(){
        $('aside').toggleClass('movimiento');
    });
    // cargarIframe("inicio");
});