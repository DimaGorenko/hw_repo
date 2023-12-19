// створити 3 обʼєкти через {}

const dmytro = { sex: "male" };
const anastasiia = { sex: "female" };
const kostyantyn = { sex: "male" };

// створити 3 обʼєкти через Object()

const serhii = new Object({ sex: "male" });
const nataliia = new Object({ sex: "female" });
const yevhenii = new Object({ sex: "male" });

// створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__),
// створити одному в кожному форматі

const myObject = { age: 24 };
const notMyObject = Object.create(myObject);

const myNewObject = {
  age: 25,
};

const notMyNewObject = {};
notMyNewObject.__proto__ = myNewObject;

// створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)

const engineer = {
  name: "Dmytro",
  age: 25,
};

const QA_engineer = Object.create(engineer);

console.log(engineer);
console.log(QA_engineer);

// унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

const person = {
  name: "Anastasiia",
};

Object.setPrototypeOf(engineer, person);

console.log(engineer);
console.log(QA_engineer);
console.log(person);

// Рішення задачки з leetcode

const merge = function (nums1, m, nums2) {
  nums1.splice(m);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};
