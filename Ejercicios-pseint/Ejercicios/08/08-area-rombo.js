const inputDMen = document.getElementById("diagonalMenor");
const inputDMay = document.getElementById("diagonalMayor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputDMen.value === "" || inputDMay.value === "") {
        cajaResultado.textContent = "Escribe ambas diagonales";
        return;
    }

    const dMen = Number(inputDMen.value);
    const dMay = Number(inputDMay.value);
    const areaRombo = (dMen * dMay) / 2;

    cajaResultado.innerHTML =
        "Diagonal menor: <b>" + dMen + "</b><br>" +
        "Diagonal mayor: <b>" + dMay + "</b><br>" +
        "Área del rombo: <b>" + areaRombo + "</b>";
}

inputDMen.addEventListener("input", calcular);
inputDMay.addEventListener("input", calcular);
