document.addEventListener("DOMContentLoaded", () => {

    console.log("Sistema iniciado");

    // =========================
    // BÚSQUEDA DE PRODUCTOS
    // =========================

    const buscador = document.querySelector("#buscar");

    if (buscador) {

        buscador.addEventListener("keyup", () => {

            const texto = buscador.value.toLowerCase();

            const productos =
                document.querySelectorAll(".producto");

            productos.forEach(producto => {

                const contenido =
                    producto.textContent.toLowerCase();

                producto.style.display =
                    contenido.includes(texto)
                    ? ""
                    : "none";

            });

        });

    }

    // =========================
    // CANTIDAD PRODUCTO
    // =========================

    const btnMenos = document.querySelector(".btn-menos");
    const btnMas = document.querySelector(".btn-mas");
    const cantidad = document.querySelector(".cantidad");

    if (btnMenos && btnMas && cantidad) {

        btnMenos.addEventListener("click", () => {

            let valor = parseInt(cantidad.value) || 1;

            if (valor > 1) {
                cantidad.value = valor - 1;
            }

        });

        btnMas.addEventListener("click", () => {

            let valor = parseInt(cantidad.value) || 1;

            cantidad.value = valor + 1;

        });

    }

    // =========================
    // FORMULARIOS
    // =========================

    const formularios =
        document.querySelectorAll("form");

    formularios.forEach(formulario => {

        formulario.addEventListener("submit", (e) => {

            e.preventDefault();

            alert("Formulario enviado correctamente");

        });

    });

    // =========================
    // AGENDAR CITA
    // =========================

    const btnCita =
        document.querySelector(".btn-confirmar");

    if (btnCita) {

        btnCita.addEventListener("click", () => {

            alert("Cita registrada correctamente");

        });

    }

    // =========================
    // ALERTAS ADMIN
    // =========================

    const btnSolicitudes =
        document.querySelectorAll(".btn-solicitar");

    btnSolicitudes.forEach(btn => {

        btn.addEventListener("click", () => {

            alert("Solicitud enviada");

        });

    });

    // =========================
    // DASHBOARD CARDS
    // =========================

    const cards =
        document.querySelectorAll(".stat-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-5px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0px)";

        });

    });

    // =========================
    // TOGGLES PERFIL
    // =========================

    const toggles =
        document.querySelectorAll(".toggle");

    toggles.forEach(toggle => {

        toggle.addEventListener("click", () => {

            toggle.classList.toggle("active");

        });

    });

});