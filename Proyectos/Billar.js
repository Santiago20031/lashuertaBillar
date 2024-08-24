// script.js
function calcularPrecio(mesaId) {
    // Obtener valores de entrada para la mesa específica
    const horaInicio = document.getElementById(`horaInicio${mesaId}`).value;
    const horaFinal = document.getElementById(`horaFinal${mesaId}`).value;
    const precioHora = parseFloat(document.getElementById(`precioHora${mesaId}`).value);

    if (horaInicio && horaFinal && !isNaN(precioHora)) {
        // Convertir horas a formato de Date para calcular la diferencia
        const inicio = new Date(`1970-01-01T${horaInicio}:00Z`);
        const final = new Date(`1970-01-01T${horaFinal}:00Z`);

        // Calcular la diferencia en minutos
        let diferenciaMinutos = (final - inicio) / 1000 / 60;
        if (diferenciaMinutos < 0) {
            diferenciaMinutos += 1440; // Si la diferencia es negativa, añadir 24 horas en minutos (cruce de medianoche)
        }

        // Convertir minutos a horas y minutos
        const horas = Math.floor(diferenciaMinutos / 60);
        const minutos = Math.round(diferenciaMinutos % 60);

        // Calcular precio total
        const precioTotal = diferenciaMinutos / 60 * precioHora;

        // Mostrar resultados en las celdas correspondientes
        document.getElementById(`totalHoras${mesaId}`).value = `${horas}h ${minutos}m`;
        document.getElementById(`precioPagar${mesaId}`).value = `$${precioTotal.toFixed(2)}`;
    } else {
        alert(`Por favor, ingrese todas las horas y el precio por hora correctamente para la Mesa ${mesaId}.`);
    }
}
