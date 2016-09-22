function obtener(archivo, modalCont) {
    $.get(
        archivo,
        "",
        function(data) {
            modalCont.innerHTML = data;
        },
        "html"
    );
}

//var modalContent = ["uno","dos","tres","cuatro","cinco <br> seis"];
$contModal = $('.cont-reading');
var modalCont = document.getElementById('modal-body');

$contModal.each(function(index, content){
    $(this).click(function(){
        var archivo = "/contenido/" + index + ".html";
        obtener(archivo, modalCont);
        //modalCont.innerHTML = obtener(archivo);//modalContent[index];
    });
});