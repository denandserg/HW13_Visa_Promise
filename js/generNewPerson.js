let countPerson = 0;
let quantityPerson = 2;
let persons = [];

const inpName = document.getElementById("name");
const inpAge = document.getElementById("age");
const inpGender = document.getElementById("gender");
const inpPasport = document.getElementById("passport");
const inpPayment = document.getElementById("payment");
const inpHealth = document.getElementById("health");
const inpQuantity = document.getElementById("quantity");

function verifyData () {
  quantityPerson = inpQuantity.value;
}

function checkPersonsManual () {
    quantityPerson = inpQuantity.value;
    const arrName = inpName.value.split(', ') || inpName.value;
    const arrAge = inpAge.value.split(', ') || inpAge.value;
    const arrPassport = inpPasport.value.split(', ') || inpPasport.value;
    const arrGender = inpGender.value.split(', ') || inpGender.value;
    const arrPayment = inpPayment.value.split(', ') || inpPayment.value;
    const arrHealth = inpHealth.value.split(', ') || inpHealth.value;
    checkArrLength(arrName, arrAge, arrPassport, arrGender, arrPayment, arrHealth);
    let countPerson = 0;
    while (countPerson < quantityPerson) {
        persons.push(new Person(arrName[countPerson], arrAge[countPerson], arrPassport[countPerson], arrGender[countPerson], arrPayment[countPerson], arrHealth[countPerson]));
        countPerson++;
    }
}

function checkArrLength () {
  for(let i=0; i < arguments.length; i++) {
    while (arguments[i].length < +quantityPerson)  {
      arguments[i].push(undefined);
    }
  }
}

function Person (name, age, isHasPassport, gender, payment, healthy) {
    this.id = this.setID();
    this.name = name || this.setName();
    this.age = age || this.setAge();
    this.isHasPassport = isHasPassport || this.setPassport();
    this.gender = gender || this.setGender();
    this.payment = payment || this.setPayment();
    this.health = healthy || this.setHealth();
    this.check = 0;
}

Person.prototype.setID = function () {
    const date = new Date();
    return `${++countPerson}_${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

Person.prototype.setName = function () {
    const name = faker.name.findName();
    return name;
};

Person.prototype.setAge = function () {
    const age = Math.round(Math.random()*8) + 16 ;
    return age;
};

Person.prototype.setPassport = function () {
    const passInd = Math.round(Math.random());
    const passport = [true, false][passInd];
    return passport;
};

Person.prototype.setGender = function () {
    const genderInd = Math.round(Math.random());
    const gender = ['male', 'female'][genderInd];
    return gender;
};

Person.prototype.setPayment = function () {
    const step = Math.round(Math.random()*200)+900;
    const payment = 100 * Math.round(step/100);
    return payment;
};

Person.prototype.setHealth = function () {
    const health = Math.round(Math.random()*30) + 65;
    return health;
};


