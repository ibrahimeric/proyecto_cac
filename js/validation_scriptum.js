const d = document;

export default function contactFormValidations() {
    const $form = d.querySelector(".form"),
        $inputs = d.querySelectorAll(".form [required]");
    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
    });

    //d.addEventListener("keyup", e=> {
    //    if (e.target.matches(".form [required]")){
    //         let $input = e.target,
    //            pattern = $input.pattern || $input.dataset.pattern ;}
    //console.log($input, pattern);


    // if (pattern && $input.value!==""){

    //     let regex = new RegExp(pattern);
    //     return !regex.exec($input.value)
    //     ?d.getElementById($input.name).classList.add("is-active")
    //    :d.getElementById($input.name).classList.remove("is-active")
    // }

    // if(!pattern){

    // }
    //});

    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtenemos los valores del formulario
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("consulta").value;

        // Construimos el enlace para enviar el correo
        var mailtoLink = "mailto:r.houseg45@gmail.com" +
            "?subject=" + encodeURIComponent("Nuevo mensaje de " + name) +
            "&body=" + encodeURIComponent("Nombre: " + name + "\nCorreo electrónico: " + email + "\nMensaje: " + message);

        // Abrimos el enlace en una nueva pestaña o ventana
        window.open(mailtoLink, "_blank");
    });

}