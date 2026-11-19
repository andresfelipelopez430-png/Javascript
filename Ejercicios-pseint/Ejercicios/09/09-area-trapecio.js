const inputBMen = document.getElementById("baseMenor");
const inputBMay = document.getElementById("baseMayor");
const inputAltura = document.getElementById("altura");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputBMen.value === "" || inputBMay.value === "" || inputAltura.value === "") {
        cajaResultado.textContent = "Escribe las bases y la altura";
        return;
    }

    const bMen = Number(inputBMen.value);
    const bMay = Number(inputBMay.value);
    const altura = Number(inputAltura.value);
    const areaTrapecio = ((bMen + bMay) / 2) * altura;

    cajaResultado.innerHTML =
        "Base menor: <b>" + bMen + "</b><br>" +
        "Base mayor: <b>" + bMay + "</b><br>" +
        "Altura: <b>" + altura + "</b><br>" +
        "Área del trapecio: <b>" + areaTrapecio + "</b>";
}

inputBMen.addEventListener("input", calcular);
inputBMay.addEventListener("input", calcular);
inputAltura.addEventListener("input", calcular);
