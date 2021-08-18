const inputEstado = document.getElementById("estado");
const date = document.getElementById("data-inicio");

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

function checkDate() {
  const dateInfo = date.value.split("/");
  const day = dateInfo[0];
  const month = dateInfo[1];
  const year = dateInfo[2];

  if (dateInfo.length !== 3) {
    alert("Data com formato errado (dd/mm/yyyy).");
  }

  if (day < 1 && day > 31) {
    alert("Dia inválido. Deve ser entre 1 e 31.");
  }

  if (year < 1 && year > 12) {
    alert("Mês inválido. Deve ser entre 1 e 12.");
  }
}

function init() {
  loadStates();
}

window.onload = init;
