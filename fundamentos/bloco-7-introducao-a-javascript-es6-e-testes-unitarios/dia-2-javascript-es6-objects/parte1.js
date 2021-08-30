const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const costumerName = order.name;
  const costumerPhone = order.phoneNumber;
  const deliveryAddress = order.address;

  return `Olá ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${costumerPhone}, R. ${deliveryAddress.street}, Nº: ${deliveryAddress.number}, AP: ${deliveryAddress.apartment}`;
};

// console.log(customerInfo(order));

const formatProducts = (order) => {
  const pizzas = Object.keys(order.pizza);
  const drinks = order.drinks;
  const orderProducts = [];

  // Add pizzas to the format array.
  Object.assign(orderProducts, pizzas);

  // Add drinks to the format array.
  for (let drink in drinks) {
      orderProducts.push(drinks[drink].type);
  }

  return orderProducts.slice(0, -1).join(", ") + ' e ' + orderProducts.slice(-1);
};

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luíz Silva';
  const costumerName = order.name;
  const products = order.order;
  const paymentValue = order.payment.total;
  return `Olá ${costumerName}, o total do seu pedido de ${formatProducts(products)} é R$ ${Number(paymentValue).toFixed(2)}`;
};

console.log(orderModifier(order));
