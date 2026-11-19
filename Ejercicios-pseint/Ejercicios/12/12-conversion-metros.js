const inputMetros = document.getElementById("metros");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputMetros.value === "") {
        cajaResultado.textContent = "Escribe los metros";
        return;
    }

    const m = Number(inputMetros.value);

    cajaResultado.innerHTML =
        "Metros: <b>" + m + " m</b><br>" +
        "Kilómetros: <b>" + (m / 1000) + " km</b><br>" +
        "Hectómetros: <b>" + (m / 100) + " hm</b><br>" +
        "Decámetros: <b>" + (m / 10) + " dam</b><br>" +
        "Decímetros: <b>" + (m * 10) + " dm</b><br>" +
        "Centímetros: <b>" + (m * 100) + " cm</b><br>" +
        "Milímetros: <b>" + (m * 1000) + " mm</b>";
}

inputMetros.addEventListener("input", calcular);
