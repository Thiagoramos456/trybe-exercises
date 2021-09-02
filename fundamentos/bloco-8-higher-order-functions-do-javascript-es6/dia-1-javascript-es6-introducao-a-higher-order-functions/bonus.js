function dragonDamage(strength) {
  // 1 - Crie uma função que retorna o dano do dragão.
  // O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
  const minDamage = 15;
  return Math.floor(Math.random() * (strength - minDamage + 1) + minDamage);
}

function warriorDamage(strength, weaponDmg) {
  // 2 - Crie uma função que retorna o dano causado pelo warrior .
  // O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
  const minDamage = strength;
  const maxDamage = strength * weaponDmg;
  return Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
}

function mageDamage(intelligence) {
  // 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
  // O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
  // A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

  let mana;
  let damage;
  console.log(this.mana);

  if (mana < 15) {
    damage = 'Não possui mana suficiente';
    mana = 0;
  } else {
    const minDamage = intelligence;
    const maxDamage = intelligence * 2;
    mana = this.mana - 15;
    damage = Math.floor(
      Math.random() * (maxDamage - minDamage + 1) + minDamage
    );
  }

  return { damage, mana };
}

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

console.log(mage.damage(5));
