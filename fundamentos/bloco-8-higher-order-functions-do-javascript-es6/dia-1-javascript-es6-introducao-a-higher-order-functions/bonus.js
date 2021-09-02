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

const dragonDamage = (strength) => {
  // 1 - Crie uma função que retorna o dano do dragão.
  const minDamage = 15;
  return Math.floor(Math.random() * (strength - minDamage + 1) + minDamage);
};

const warriorDamage = (strength, weaponDmg) => {
  // 2 - Crie uma função que retorna o dano causado pelo warrior .
  const minDamage = strength;
  const maxDamage = strength * weaponDmg;
  return Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
};
