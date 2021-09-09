// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

// Adicione o código do exercício aqui:

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((aCount, name) => aCount + name.split('').reduce((aCountName, char) => char.toLowerCase() === 'a' ? aCountName + 1 : aCountName, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);
