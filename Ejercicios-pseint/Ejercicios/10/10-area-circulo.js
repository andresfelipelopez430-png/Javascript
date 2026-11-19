const inputRadio = document.getElementById("radio");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputRadio.value === "") {
        cajaResultado.textContent = "Escribe el radio";
        return;
    }

    const pi = 3.1416;
    const radio = Number(inputRadio.value);
    const areaCirculo = pi * (radio * radio);

    cajaResultado.innerHTML =
        "Pi (π): <b>" + pi + "</b><br>" +
        "Radio (r): <b>" + radio + "</b><br>" +
        "Área del círculo: <b>" + areaCirculo.toFixed(4) + "</b>";
}

inputRadio.addEventListener("input", calcular);
