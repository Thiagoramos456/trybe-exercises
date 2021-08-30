const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addEntry = (object, key, value) => {
  object[key] = value;
};

addEntry(lesson2, "turno", "manhã");

const listKeys = (object) => {
  const keys = [];
  for (key in object) {
    keys.push(key);
  }
  return keys;
};

const objectLength = (object) => {
  return Object.keys(lesson2).length;
};

