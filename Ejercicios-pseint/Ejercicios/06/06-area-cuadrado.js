const inputLado = document.getElementById("lado");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputLado.value === "") {
        cajaResultado.textContent = "Escribe la longitud del lado";
        return;
    }

    const lado = Number(inputLado.value);
    const areaCuadrado = lado * lado;

    cajaResultado.innerHTML =
        "Lado (l): <b>" + lado + "</b><br>" +
        "Área del cuadrado: <b>" + areaCuadrado + "</b>";
}

inputLado.addEventListener("input", calcular);
