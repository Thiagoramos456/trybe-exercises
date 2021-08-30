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

// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addEntry = (object, key, value) => {
  object[key] = value;
};

addEntry(lesson2, "turno", "manhã");

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (object) => {
  const keys = [];
  for (key in object) {
    keys.push(key);
  }
  return keys;
};

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (object) => {
  return Object.keys(object).length;
};

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValues = (object) => {
  return Object.values(object);
};

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = (lessons) => {
  let studentsQuantity = 0;
  for (lesson in lessons) {
    studentsQuantity += lessons[lesson].numeroEstudantes;
  }
  return studentsQuantity;
};

console.log("Tem " + totalStudents(allLessons) + " estudantes.");

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (lesson, index) => {
  return Object.values(lesson)[index];
};

console.log(getValueByNumber(lesson1, 0));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (lesson, key, value) => {
  return lesson[key] === value;
};

console.log(verifyPair(lesson3, "turno", "noite"));
// Output: true,
console.log(verifyPair(lesson3, "materia", "Maria Clara"));
// Output: false

// -------------------- Bônus --------------------

// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const mathStudents = (lessons) => {
  let studentsQuantity = 0;

  for (lesson in lessons) {
    const actualLesson = lessons[lesson];
    if (actualLesson.materia === "Matemática") {
      studentsQuantity += actualLesson.numeroEstudantes;
    }
  }

  return studentsQuantity;
};

console.log(mathStudents(allLessons));

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (lessons, teacher) => {
  let studentsQuantity = 0;
  let classes = [];

  for (lesson in lessons) {
    const actualLesson = lessons[lesson];
    if (actualLesson.professor === teacher) {
      studentsQuantity += actualLesson.numeroEstudantes;
      classes.push(actualLesson.materia);
    }
  }

  const teacherClassesInfo = {
      professor: teacher,
      aulas: classes,
      studentsQuantity: studentsQuantity
  }

  return teacherClassesInfo;
};

console.log(createReport(allLessons, 'Maria Clara'))
