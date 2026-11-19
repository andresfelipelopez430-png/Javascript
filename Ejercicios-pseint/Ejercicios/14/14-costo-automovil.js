const inputPrecio = document.getElementById("precio");
const inputGanancia = document.getElementById("ganancia");
const inputImpuesto = document.getElementById("impuesto");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputPrecio.value === "" || inputGanancia.value === "" || inputImpuesto.value === "") {
        cajaResultado.textContent = "Completa los datos del vehículo";
        return;
    }

    const precioBase = Number(inputPrecio.value);
    const pctGanancia = Number(inputGanancia.value) / 100;
    const pctImpuesto = Number(inputImpuesto.value) / 100;

    const valorGanancia = precioBase * pctGanancia;
    const valorImpuesto = precioBase * pctImpuesto;
    const costoTotal = precioBase + valorGanancia + valorImpuesto;

    cajaResultado.innerHTML =
        "Precio base: <b>$" + precioBase.toLocaleString("es-CO") + "</b><br>" +
        "Ganancia (12%): <b>$" + valorGanancia.toLocaleString("es-CO") + "</b><br>" +
        "Impuesto (6%): <b>$" + valorImpuesto.toLocaleString("es-CO") + "</b><br>" +
        "Costo total: <b>$" + costoTotal.toLocaleString("es-CO") + "</b>";
}

inputPrecio.addEventListener("input", calcular);
inputGanancia.addEventListener("input", calcular);
inputImpuesto.addEventListener("input", calcular);

calcular();
