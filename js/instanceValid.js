let setPersonAgePolice = 18;
let setPersonAgeMalePolice = 22;
let setPersonAgeFemalePolice = 18;
let setPersonHealthMedical = 75;
let setPersonHealthMedicalMale = 75;
let setPersonHealthMedicalFemale = 85;
let setPersonPaymantBankMale = 1000;
let setPersonPaymantBankFemale = 950;
let setTimeoutBank = 40000;
let setTimeoutMedicalHealth = 15000;
let setTimeoutMedicalHealthGender = 15000;
let setTimeoutPoliceAge = 5000;
let setTimeoutPoliceGender = 8000;
let setTimeoutPolicePassport = 12000;
let flag = 0;


function setConfig () {
  setPersonAgePolice = document.getElementById('minAgePolice').value || 18;
  setPersonAgeMalePolice = document.getElementById('minAgePoliceMale').value || 22;
  setPersonAgeFemalePolice = document.getElementById('minAgePoliceFemale').value || 18;
  setPersonHealthMedical = document.getElementById('minHealthMedic').value || 75;
  setPersonHealthMedicalMale = document.getElementById('minHealthMale').value || 75;
  setPersonHealthMedicalFemale = document.getElementById('minHealthFemale').value || 85;
  setPersonPaymantBankMale = document.getElementById('minPaymantMale').value || 1000;
  setPersonPaymantBankFemale = document.getElementById('minPaymantFemale').value ||  950;
}

function checkVerifyVisa() {
   for (let i = 0; i<persons.length; i++) {
       let flag = [];

       const spanCheckName = document.getElementById(`span_verify_${persons[i].id}`);
       const spanCheckPolice1 = document.getElementById(`span_1_police_${persons[i].id}`);
     const spanCheckPolice2 = document.getElementById(`span_2_police_${persons[i].id}`);
     const spanCheckPolice3 = document.getElementById(`span_3_police_${persons[i].id}`);
       const spanCheckMedicine1 = document.getElementById(`span_1_medicine_${persons[i].id}`);
     const spanCheckMedicine2 = document.getElementById(`span_2_medicine_${persons[i].id}`);
       const spanCheckBank = document.getElementById(`span_bank_${persons[i].id}`);
     const spanVisa = document.getElementById(`span_visa_${persons[i].id}`);

     function hasProperty (el) {
       if (el) {
         flag.push(el.dataset.flag);
       }
     }

       hasProperty(spanCheckName);
     hasProperty(spanCheckPolice1);
     hasProperty(spanCheckPolice2);
     hasProperty(spanCheckPolice3);
     hasProperty(spanCheckMedicine1);
     hasProperty(spanCheckMedicine2);
     hasProperty(spanCheckBank);

     verifyDataSet(flag);

       function verifyDataSet (flag) {
         let bool = 0;
           for(let i = 0; i < flag.length; i++) {
             if(flag[i]==='true'){
                 bool++
             }
           }
           if (bool === 7) {
                spanVisa.style.backgroundColor = 'green';
             spanVisa.innerHTML = 'yes';
           }
       }
   }
}

function checkPoliceAge (person) {
    if (person.age >= setPersonAgePolice) {
        return true;
    }
    return false;
}

function checkPoliceGenderMale (person) {
    if (person.gender === 'male' &&  person.age > setPersonAgeMalePolice) {
        return true;
    }
    return false;
}

function checkPoliceGenderFemale (person) {
    if (person.gender === 'female' &&  person.age > setPersonAgeFemalePolice) {
        return true;
    }
    return false;
}

function checkMedicalPersonHealth (person) {
    if (person.health > setPersonHealthMedical) {
        return true;
    }
    return false;
}

function checkMedicalPersonHealthMale (person) {
    if (person.health > setPersonHealthMedicalMale && person.gender === 'male') {
        return true;
    }
    return false;
}

function checkMedicalPersonHealthFemale (person) {
    if (person.health > setPersonHealthMedicalFemale && person.gender === 'female') {
        return true;
    }
    return false;
}

function checkBankPersonPaymentMale (person) {
    if(person.gender === 'male' && person.payment > setPersonPaymantBankMale) {
        return true;
    }
    return false;
}

function checkBankPersonPaymentFemale (person) {
    if(person.gender === 'female' && person.payment > setPersonPaymantBankFemale) {
        return true;
    }
    return false;
}

function policePromise1 (person) {
    return new Promise (( resolve, reject ) => {
        return setTimeout( () => {
            if (checkPoliceAge(person)) {
                createElemPolice1('yes', rowPolice, 'check', `police_${person.id}`, true);
                createElemVisa('no', rowDecision, 'check-no', `visa_${person.id}`);
              flag++;
                console.log(`${person.name} check police 1`);
                resolve(person);
            } else {
              createElemVisa('no', rowDecision, 'check-no', `visa_${person.id}`);
              createElemPolice1('no', rowPolice, 'check-no', `police_${person.id}`, false);
                console.log(`${person.name} NOT check police 1`);
                reject('Age must be over 18')
            }
        }, setTimeoutPoliceAge);
    });
}

function policePromise2 (person) {
    return new Promise((resolve, reject) => {
        return setTimeout( () => {
            if (person.gender === 'male') {
                if (checkPoliceGenderMale(person)) {
                  createElemPolice2('yes', 'check', `police_${person.id}`, true, 2);
                  flag++;
                  console.log(`${person.name} check police 2`);
                  resolve(person);
                } else {
                  createElemPolice2('no', 'check-no', `police_${person.id}`, false, 2);
                  console.log(`${person.name} NOT check police 2`);
                  reject('For male age must be more than 22 year')
                }
            }
          if (person.gender === 'female') {
            if (checkPoliceGenderFemale(person)) {
              createElemPolice2('yes', 'check', `police_${person.id}`, true, 2);
              flag++;
              console.log(`${person.name} check police 2`);
              resolve(person);
            }
                   else {
              createElemPolice2('no', 'check-no', `police_${person.id}`, false, 2);
                    console.log(`${person.name} NOT check police 2`);
                    reject('For female age must be more than 18 year')
                  }

            }
        }, setTimeoutPoliceGender);
    });
}

function policePromise3 (person) {
    return new Promise((resolve, reject) => {
        return setTimeout( () => {
            if (person.isHasPassport) {
              createElemPolice2('yes', 'check', `police_${person.id}`, true, 3);
              console.log(`${person.name} check police 3`);
              flag++;
                resolve(true);
            } else {
              createElemPolice2('no', 'check-no', `police_${person.id}`, false, 3);
              console.log(`${person.name} NOT check police 3`);
                reject('Person have not a passport');
            }
        }, setTimeoutPolicePassport);
    });
}


function medicalPromise1 (person) {
    return new Promise (( resolve, reject ) => {
        return setTimeout( () => {
            if (checkMedicalPersonHealth(person)) {
              createElemMedical1('yes', rowMedecin, 'check', `medicine_${person.id}`, true);
              flag++;
              console.log(`${person.name} check medical 1`);
                resolve(person);
            } else {
              createElemMedical1('no', rowMedecin, 'check-no', `medicine_${person.id}`, false);
              console.log(`${person.name} NOT check medical 1`);
                reject('Health must be over 75%');
            }
        }, setTimeoutMedicalHealth);


    })
}

function medicalPromise2 (person) {
    return new Promise((resolve, reject) => {
        return setTimeout( () => {
          if (person.gender === 'male') {
            if (checkMedicalPersonHealthMale(person)) {
              createElemMedical2('yes', 'check', `medicine_${person.id}`, true);
              flag++;
              console.log(`${person.name} check medical 2`);
              resolve(true);
            } else {
              createElemMedical2('no', 'check-no', `medicine_${person.id}`, false);
              console.log(`${person.name} NOT check medical 2`);
              reject('For male healthy must be more than 75%');
            }
          }
          if (person.gender === 'female') {
            if (checkMedicalPersonHealthFemale(person)) {
              createElemMedical2('yes', 'check', `medicine_${person.id}`, true);
              flag++;
              console.log(`${person.name} check medical 2`);
                resolve(true);
            } else {
              createElemMedical2('no', 'check-no', `medicine_${person.id}`, false);
              console.log(`${person.name} NOT check medical 2`);
                reject('For female healthy must be more than 85%');
            }
        }
        }, setTimeoutMedicalHealthGender);
    });
}

function bankPromise1 (person) {
    return new Promise (( resolve, reject ) => {
        return setTimeout( () => {

          if (person.gender === 'male') {
            if (checkBankPersonPaymentMale(person)) {
              createElem('yes', rowBank, 'check', `bank_${person.id}`, true);
              flag++;
              console.log(`${person.name} check bank`);

              resolve(true);
            } else {
              createElem('no', rowBank, 'check-no', `bank_${person.id}`, false);
              console.log(`${person.name} NOT check bank`);
              reject('Payment must be over 1000$');

            }
          }
          if (person.gender === 'female') {
            if (checkBankPersonPaymentFemale(person)) {
              createElem('yes', rowBank, 'check', `bank_${person.id}`, true);
              flag++;
              console.log(`${person.name} check bank`);

              resolve(true);
            } else {
              createElem('no', rowBank, 'check-no', `bank_${person.id}`, false);
              console.log(`${person.name} NOT check bank`);

              reject('Payment must be over 950$');
            }
          }

        }, setTimeoutBank);

    });
}

