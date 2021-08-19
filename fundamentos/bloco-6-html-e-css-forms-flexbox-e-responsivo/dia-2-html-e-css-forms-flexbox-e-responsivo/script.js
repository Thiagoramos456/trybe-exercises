const inputEstado = document.getElementById("estado");
const date = document.getElementById("data-inicio");
const btnSubmit = document.getElementById("btn-submit");
const displayInfo = document.querySelector(".display-info");

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


function createOptionState(name, initials) {
  const option = document.createElement("option");
  option.className = "state";
  option.text = name;
  option.value = initials;
  return option;
}

function loadStates() {
  const states = [
    { nome: "Acre", sigla: "AC" },
    { nome: "Alagoas", sigla: "AL" },
    { nome: "Amapá", sigla: "AP" },
    { nome: "Amazonas", sigla: "AM" },
    { nome: "Bahia", sigla: "BA" },
    { nome: "Ceará", sigla: "CE" },
    { nome: "Distrito Federal", sigla: "DF" },
    { nome: "Espírito Santo", sigla: "ES" },
    { nome: "Goiás", sigla: "GO" },
    { nome: "Maranhão", sigla: "MA" },
    { nome: "Mato Grosso", sigla: "MT" },
    { nome: "Mato Grosso do Sul", sigla: "MS" },
    { nome: "Minas Gerais", sigla: "MG" },
    { nome: "Pará", sigla: "PA" },
    { nome: "Paraíba", sigla: "PB" },
    { nome: "Paraná", sigla: "PR" },
    { nome: "Pernambuco", sigla: "PE" },
    { nome: "Piauí", sigla: "PI" },
    { nome: "Rio de Janeiro", sigla: "RJ" },
    { nome: "Rio Grande do Norte", sigla: "RN" },
    { nome: "Rio Grande do Sul", sigla: "RS" },
    { nome: "Rondônia", sigla: "RO" },
    { nome: "Roraima", sigla: "RR" },
    { nome: "Santa Catarina", sigla: "SC" },
    { nome: "São Paulo", sigla: "SP" },
    { nome: "Sergipe", sigla: "SE" },
    { nome: "Tocantins", sigla: "TO" },
  ];

  for (let index = 0; index < states.length; index += 1) {
    const stateElement = createOptionState(
      states[index].nome,
      states[index].sigla
    );
    inputEstado.appendChild(stateElement);
  }
}

function loadDisplay() {
    const nomeValue = document.getElementById('nome').value;
    const emailValue = document.getElementById('email').value;
    const cpfValue = document.getElementById('cpf').value;
    const enderecoValue = document.getElementById('endereco').value;
    const cidadeValue = document.getElementById('cidade').value;
    const estadoValue = document.getElementById('estado').value;

    const nomeDisplay = document.getElementById("nome-display");
    const emailDisplay = document.getElementById("email-display");
    const cpfDisplay = document.getElementById("cpf-display");
    const enderecoDisplay = document.getElementById("endereco-display");
    const cidadeDisplay = document.getElementById("cidade-display");
    const estadoDisplay = document.getElementById("estado-display");


    nomeDisplay.innerText = nomeValue;
    emailDisplay.innerText = emailValue;
    cpfDisplay.innerText = cpfValue;
    enderecoDisplay.innerText = enderecoValue;
    cidadeDisplay.innerText = cidadeValue;
    estadoDisplay.innerText = estadoValue;

    displayInfo.style.display = "block";
    window.scrollTo(0, document.body.scrollHeight)

}


function init() {
  loadStates();

  date.DatePickerX.init({
    format: "dd/mm/yyyy",
    maxDate: new Date()
  });
}

window.onload = init;
