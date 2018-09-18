var botaoPaciente = document.querySelector("#adicionar-paciente");
botaoPaciente.addEventListener("click", function(event) {

	//Para o comportamento padrao do elemento
	event.preventDefault();

	//Seleciona o formulario
	var form = document.querySelector("#form-adiciona");

	//Obtem os dados do paciente
	var paciente = obtemPacienteDoFormulario(form);

	//Adiciona o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(montaTr(paciente));

	//Limpa o formulario
	form.reset();
});

function obtemPacienteDoFormulario(form) {

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTd(valor, classe) {

	var td = document.createElement("td");
	td.textContent = valor;
	td.classList.add(classe);

	return td;
}

function montaTr(paciente) {

	var tr = document.createElement("tr");

	tr.appendChild(montaTd(paciente.nome, "info-nome"));
	tr.appendChild(montaTd(paciente.peso, "info-peso"));
	tr.appendChild(montaTd(paciente.altura, "info-altura"));
	tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	tr.appendChild(montaTd(paciente.imc, "info-imc"));

	return tr;
}