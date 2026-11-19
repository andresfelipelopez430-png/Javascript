const inputCentigrados = document.getElementById("centigrados");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputCentigrados.value === "") {
        cajaResultado.textContent = "Escribe los grados Centígrados";
        return;
    }

    const gc = Number(inputCentigrados.value);
    const gf = (gc * 9 / 5) + 32;

    cajaResultado.innerHTML =
        "Grados Centígrados: <b>" + gc + " °C</b><br>" +
        "Grados Fahrenheit: <b>" + gf + " °F</b>";
}

inputCentigrados.addEventListener("input", calcular);
