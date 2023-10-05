
$(document).ready(function () {
    $(".container_header button").click(function (e) {
        $(".container_input").slideDown()
    });

    $("#btn_cancel").click(function () {
        $(".container_input").slideUp()
    });

    $("#form").on("submit", function (e) {
        e.preventDefault();

        const newImage = $("#imagemNova").val();

        let novoItem = $("<li></li>");

        $(`<div><img src="${newImage}"/>
      <div class="ancora"> <a href=${newImage} title="abrir imagem "target="_blank">ver foto em tamanho real</a></div></div>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');

    });

})