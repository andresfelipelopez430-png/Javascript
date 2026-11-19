const inputValor = document.getElementById("valor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    if (inputValor.value === "") {
        cajaResultado.textContent = "Escribe un valor";
        return;
    }

    const valor = Number(inputValor.value);
    const porcentaje = valor * 0.10;

    cajaResultado.innerHTML =
        "Valor ingresado: <b>" + valor + "</b><br>" +
        "El 10% es: <b>" + porcentaje + "</b>";
}

inputValor.addEventListener("input", calcular);
