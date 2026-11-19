const inputV1 = document.getElementById("v1");
const inputV2 = document.getElementById("v2");
const inputV3 = document.getElementById("v3");
const inputV4 = document.getElementById("v4");
const inputV5 = document.getElementById("v5");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputV1.value === "" || inputV2.value === "" || inputV3.value === "" || inputV4.value === "" || inputV5.value === "") {
        cajaResultado.textContent = "Escribe los 5 valores";
        return;
    }

    const v1 = Number(inputV1.value);
    const v2 = Number(inputV2.value);
    const v3 = Number(inputV3.value);
    const v4 = Number(inputV4.value);
    const v5 = Number(inputV5.value);

    const sumaTotal = v1 + v2 + v3 + v4 + v5;
    const restaTresPrimeros = sumaTotal - (v1 + v2 + v3);
    const restaDosUltimos = sumaTotal - (v4 + v5);
    const multiplicacion = restaTresPrimeros * restaDosUltimos;
    const division = multiplicacion !== 0 ? (sumaTotal / multiplicacion).toFixed(2) : "Indefinida (división por 0)";

    cajaResultado.innerHTML =
        "Valores: <b>" + v1 + ", " + v2 + ", " + v3 + ", " + v4 + ", " + v5 + "</b><br>" +
        "Suma total: <b>" + sumaTotal + "</b><br>" +
        "Suma - 3 primeros: <b>" + restaTresPrimeros + "</b><br>" +
        "Suma - 2 últimos: <b>" + restaDosUltimos + "</b><br>" +
        "Multiplicación restas: <b>" + multiplicacion + "</b><br>" +
        "División final: <b>" + division + "</b>";
}

inputV1.addEventListener("input", calcular);
inputV2.addEventListener("input", calcular);
inputV3.addEventListener("input", calcular);
inputV4.addEventListener("input", calcular);
inputV5.addEventListener("input", calcular);
