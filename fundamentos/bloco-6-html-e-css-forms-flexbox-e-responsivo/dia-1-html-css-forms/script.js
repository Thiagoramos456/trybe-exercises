const inputEstado = document.getElementById("estado");
const date = document.getElementById("data-inicio");
const btnSubmit = document.getElementById("btn-submit");
const displayInfo = document.querySelector(".display-info");

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

function checkDate(event) {
  const dateInfo = date.value.split("/");
  let isValid = true;
  let day = dateInfo[0];
  let month = dateInfo[1];
  let year = dateInfo[2];

  if (
    dateInfo.length !== 3 ||
    day.length !== 2 ||
    month.length !== 2 ||
    year.length !== 4
  ) {
    alert("Data com formato errado (dd/mm/yyyy).");
    isValid = false;
  }

  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  if (day < 1 || day > 31) {
    alert("Dia inválido. Deve ser entre 1 e 31.");
    isValid = false;
  }

  if (month < 1 || month > 12) {
    alert("Mês inválido. Deve ser entre 1 e 12.");
    isValid = false;
  }

  if (year < 0) {
    alert("O ano não pode ser negativo.");
    isValid = false;
  }

  return isValid;
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

function sendForm(event) {
  event.preventDefault();
  if(checkDate()) {
    loadDisplay();
  }
}

function init() {
  loadStates();

  btnSubmit.addEventListener("click", sendForm);
}

window.onload = init;
