const inputPrimero = document.getElementById("primerValor");
const inputSegundo = document.getElementById("segundoValor");
const inputTercero = document.getElementById("tercerValor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputPrimero.value === "" || inputSegundo.value === "" || inputTercero.value === "") {
        cajaResultado.textContent = "Escribe los 3 valores";
        return;
    }

    const v1 = Number(inputPrimero.value);
    const v2 = Number(inputSegundo.value);
    const v3 = Number(inputTercero.value);
    const suma = v1 + v2 + v3;

    cajaResultado.innerHTML =
        "Valores: <b>" + v1 + ", " + v2 + ", " + v3 + "</b><br>" +
        "Suma total: <b>" + suma + "</b>";
}

inputPrimero.addEventListener("input", calcular);
inputSegundo.addEventListener("input", calcular);
inputTercero.addEventListener("input", calcular);
