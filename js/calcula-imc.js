var titulo = document.querySelector(".titulo");
titulo.textContent = "Novo título";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdImc = paciente.querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var pesoEhValido = true;
	var alturaEhValida = true;

	if (peso <= 0 || peso >= 1000) {
		pesoEhValido = false;
		tdPeso.textContent = "Peso inválido";
	}

	if (altura <= 0 || altura >= 3.00) {
		tdAltura.textContent = "Altura inválida";
		alturaEhValida = false;
	}

	if (pesoEhValido && alturaEhValida) {
		tdImc.textContent = calculaImc(peso, altura);
	} else {
		paciente.classList.add("paciente-invalido");
	}
}

function calculaImc(peso, altura) {

	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}