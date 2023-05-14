$(document).ready(function(){
    $.getJSON('https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/comunas-regiones.json', function(data) {
        data.regiones.map(i => {
            $('#region').append(`<option value="${i.region}">${i.region}</option>`);
        });
    });

    $('#region').change(function(){
        if($('#region').val() == "") {
            $('#comuna').prop("disabled", true);
        } else {
            $('#comuna').prop("disabled", false);
        }
        $('#comuna').html('<option value="">Seleccionar Comuna</option>')
        $.getJSON('https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/comunas-regiones.json', function(data) {
            data.regiones.forEach((region, index) => {
                if($('#region').val() == region.region){
                    for(let i = 0; i < region.comunas.length; i ++){
                        $('#comuna').append(`<option value="${region.comunas[i]}">${region.comunas[i]}</option>`);
                    }
                }
            });
 
        });   
    })
})

var toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'General Title',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

$("#boton").click(function(){
    if($("#nombre").val().length < 3){
        $("#nombre").css("border","2px solid red");
        toastMixin.fire({
            title: 'Los nombres deben tener más de 3 carácteres',
            icon: 'error'
          });
    
    } else if($("#apellido").val().length < 3){
        toastMixin.fire({
            title: 'Los apellidos deben tener más de 3 carácteres',
            icon: 'error'
          });
        $("#nombre").css("border","2px solid #fff");
        $("#apellido").css("border","2px solid red");
    
    }else if($("#email").val().length < 3){
        toastMixin.fire({
            title: 'El email debe tener más de 3 carácteres',
            icon: 'error'
          });
        $("#nombre").css("border","2px solid #fff");
        $("#apellido").css("border","2px solid #fff");
        $("#email").css("border","2px solid red");
    
    }else if($("#telefono").val().length < 9){
        toastMixin.fire({
            title: 'El teléfono debe tener 8 dígitos',
            icon: 'error'
          });
        $("#nombre").css("border","2px solid #fff");
        $("#apellido").css("border","2px solid #fff");
        $("#email").css("border","2px solid #fff");
        $("#telefono").css("border","2px solid red");
    
    }else if($("#region").val()==""){
        toastMixin.fire({
            title: 'Debes seleccionar una Región',
            icon: 'error'
          });
        $("#nombre").css("border","2px solid #fff");
        $("#apellido").css("border","2px solid #fff");
        $("#email").css("border","2px solid #fff");
        $("#telefono").css("border","2px solid #fff");
        $("#region").css("border","1px solid red");

    }else if($("#comuna").val()==""){
        toastMixin.fire({
            title: 'Debes seleccionar una comuna',
            icon: 'error'
          });
        $("#nombre").css("border","2px solid #fff");
        $("#apellido").css("border","2px solid #fff");
        $("#email").css("border","2px solid #fff");
        $("#telefono").css("border","2px solid #fff");
        $("#region").css("border","1px solid #fff");
        $("#comuna").css("border","1px solid red");
    }else{
        $("#nombre").css("border","1px solid green");
        $("#apellido").css("border","1px solid green");
        $("#email").css("border","1px solid green");
        $("#telefono").css("border","1px solid green");
        $("#comuna").css("border","1px solid green");
        $("#region").css("border","1px solid green");
        
        $("#nombre").val("");
        $("#apellido").val("");
        $("#email").val("");
        $("#telefono").val("");
        $("#comuna").val("");
        $("#region").val("");
        
        toastMixin.fire({
            animation: true,
            title: 'Formulario enviado'
          }); 
    }
});