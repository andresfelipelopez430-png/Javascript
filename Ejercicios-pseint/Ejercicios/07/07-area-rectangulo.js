const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputBase.value === "" || inputAltura.value === "") {
        cajaResultado.textContent = "Escribe la base y la altura";
        return;
    }

    const base = Number(inputBase.value);
    const altura = Number(inputAltura.value);
    const areaRectangulo = base * altura;

    cajaResultado.innerHTML =
        "Base: <b>" + base + "</b><br>" +
        "Altura: <b>" + altura + "</b><br>" +
        "Área del rectángulo: <b>" + areaRectangulo + "</b>";
}

inputBase.addEventListener("input", calcular);
inputAltura.addEventListener("input", calcular);
