let deniedNamePerson;
const arrPersonName = [];
const rowNamePerson = document.getElementById('rowNamePerson');
const rowMigService = document.getElementById('rowMigService');
const rowPolice = document.getElementById('rowPolice');
const rowMedecin = document.getElementById('rowMedecin');
const rowBank = document.getElementById('rowBank');
const rowDecision = document.getElementById('rowDecision');

function findName(array, value) {
    if (array.indexOf) {
      return array.indexOf(value);
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }
    return -1;
}

function checkNamePerson(arr) {
    for (let i = 0; i < arr.length; i++) {
      createElem(arr[i].name, rowNamePerson, 'check-name', `name_${arr[i].id}`, true);
       if(findName(arrPersonName, arr[i].name) === -1) {
        arrPersonName.push(arr[i].name);
       } else {
           deniedNamePerson = arr[i].name;
           return false;
       }
    }
    return true;
}

function createElem (text, parentElement, classs, id, flag) {
    const divElem = document.createElement('div');
    divElem.id = id;
    divElem.innerHTML = `<span id="span_${id}" class="${classs}" data-flag="${flag}">${text}</span>`;
    parentElement.appendChild(divElem);
}

function createElemVisa (text, parentElement, classs, id, flag) {
  const divElem = document.createElement('div');
  divElem.id = id;
  divElem.innerHTML = `<span id="span_${id}" class="${classs}" data-flag="${flag}">${text}</span>`;
  parentElement.appendChild(divElem);
}

function createElemPolice1 (text, parentElement, classs, id, flag) {
  const divElem = document.createElement('div');
  divElem.id = id;
  divElem.innerHTML = `<span id="span_1_${id}" class="${classs}" data-flag="${flag}">${text}</span>`;
  parentElement.appendChild(divElem);
}

function createElemPolice2 (text, classs, id, flag, count) {
  const spanElem = document.createElement('span');
  spanElem.classList.add(classs);
  spanElem.id = `span_${count}_${id}`;
  spanElem.innerHTML = text;
  spanElem.dataset.flag = flag;
  document.getElementById(`${id}`).appendChild(spanElem);
}

function createElemMedical1 (text, parentElement, classs, id, flag) {
  const divElem = document.createElement('div');
  divElem.id = id;
  divElem.innerHTML = `<span id="span_1_${id}" class="${classs}" data-flag="${flag}">${text}</span>`;
  parentElement.appendChild(divElem);
}

function createElemMedical2 (text, classs, id, flag) {
  const spanElem = document.createElement('span');
  spanElem.classList.add(classs);
  spanElem.innerHTML = text;
  spanElem.id = `span_2_${id}`;
  spanElem.dataset.flag = flag;
  document.getElementById(`${id}`).appendChild(spanElem);
}

function migrationService(arr) {
    return new Promise((resolve, reject) => {
        if (checkNamePerson(arr)) {
          for (let i = 0; i < arr.length; i++) {
            createElem('yes', rowMigService, 'check', `verify_${arr[i].id}`, true);
            console.log('Name verify');
            resolve(arr);
        } }else {
          createElem('no', rowMigService, 'check-no', false);
            reject(`Person '${deniedNamePerson}' has already applied for validation`);
        }
    });
}

function makeArrPersonsPromises(arr) {
    let promiseForOnePerson = [];
    arr.forEach(person => {
        const policePromise = policePromise1(person)
            .then(person => policePromise2(person))
            .then(person => policePromise3(person))
        //    .catch(reason => {throw new Error(reason)});
        const medicalPromise = medicalPromise1(person)
            .then(person => medicalPromise2(person))
        //   .catch(reason => {throw new Error(reason)});
        const bankPromise = bankPromise1(person);
        //   .catch(reason => {throw new Error(reason)});
        promiseForOnePerson.push([person, policePromise, medicalPromise, bankPromise]);

    });
    return promiseForOnePerson;
}

function makePromiseAll (arr) {
    let arrOfPromiseAll = [];
    arr.forEach( personPromises => {
        arrOfPromiseAll.push(Promise.all(personPromises));
    });
    return arrOfPromiseAll;
}






