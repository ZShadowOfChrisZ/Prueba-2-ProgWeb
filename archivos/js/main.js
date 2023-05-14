const paginas = ['inicio','nosotros','tienda','organizaciones','contacto'];
const contenedor = document.getElementById("seccionDinamica");

function activarItem(pagina) {
    paginas.map(i => {
        if(i == pagina) {
            $(`#${pagina}`).addClass('bordeActivo');
            $(`#enlace${pagina}`).addClass('textoActivo');
        } else {
            $(`#${i}`).removeClass('bordeActivo');
            $(`#enlace${i}`).removeClass('textoActivo');
        }
    })
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

$(document).ready(function(){
    $('.btn').click(function(){
        $('aside').toggleClass('movimiento');
    });
    cargarIframe("inicio");
});