// Referencia del botón
const botonRegistrar = document.getElementById("boton-registrar");

// Evento para registrar los datos en la tabla
botonRegistrar.addEventListener("click", () => {
    try {
        // Verificación de campos vacíos
        const campos = [
            document.getElementById("remitente-nombre").value,
            document.getElementById("destinatario-nombre").value,
            document.getElementById("mercancia-descripcion").value,
            // Agrega más campos aquí según se necesite
        ];

        for (let i = 0; i < campos.length; i++) {
            if (!campos[i]) {
                throw new Error("Todos los campos deben estar completos.");
            }
        }

        // Datos del remitente, destinatario y mercancía
        const remitente = document.getElementById("remitente-nombre").value;
        const destinatario = document.getElementById("destinatario-nombre").value;
        const descripcion = document.getElementById("mercancia-descripcion").value;
        const peso = document.getElementById("mercancia-peso").value + " kg";
        const dimensiones = document.getElementById("mercancia-largo").value + "x" +
                            document.getElementById("mercancia-ancho").value + "x" +
                            document.getElementById("mercancia-alto").value + " m";
        const fechaSalida = document.getElementById("mercancia-fecha-salida").value;
        const fechaLlegada = document.getElementById("mercancia-fecha-llegada").value;
        const precio = "$" + document.getElementById("mercancia-precio").value;

        // Creación de fila y columnas para la tabla
        const fila = document.createElement("tr");
        const columnas = [remitente, destinatario, descripcion, peso, dimensiones, fechaSalida, fechaLlegada, precio];

        columnas.forEach(dato => {
            const td = document.createElement("td");
            td.textContent = dato;
            fila.appendChild(td);
        });

        document.getElementById("tabla-registros").appendChild(fila);

        // Limpieza de campos
        ["remitente-nombre", "destinatario-nombre", "mercancia-descripcion", "mercancia-peso", 
         "mercancia-largo", "mercancia-ancho", "mercancia-alto", "mercancia-fecha-salida", 
         "mercancia-fecha-llegada", "mercancia-precio"].forEach(id => {
            document.getElementById(id).value = "";
        });

    } catch (error) {
        alert(error.message);
    }
});
