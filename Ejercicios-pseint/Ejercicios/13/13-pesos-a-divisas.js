const inputPesos = document.getElementById("pesos");
const inputTasaDolar = document.getElementById("tasaDolar");
const inputTasaEuro = document.getElementById("tasaEuro");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputPesos.value === "" || inputTasaDolar.value === "" || inputTasaEuro.value === "") {
        cajaResultado.textContent = "Escribe el valor en pesos y las tasas";
        return;
    }

    const pesos = Number(inputPesos.value);
    const tasaDolar = Number(inputTasaDolar.value);
    const tasaEuro = Number(inputTasaEuro.value);

    const dolares = pesos / tasaDolar;
    const euros = pesos / tasaEuro;

    cajaResultado.innerHTML =
        "Pesos (COP): <b>$" + pesos.toLocaleString("es-CO") + "</b><br>" +
        "Dólares (USD): <b>$" + dolares.toFixed(2) + "</b><br>" +
        "Euros (EUR): <b>€" + euros.toFixed(2) + "</b>";
}

inputPesos.addEventListener("input", calcular);
inputTasaDolar.addEventListener("input", calcular);
inputTasaEuro.addEventListener("input", calcular);
