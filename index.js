

function students () {
  this.firstName = '',
  this.lastName = '';
  this.email = '';
  this.password = '';
  this.faculty = '';
  this.level = Number('')
}

// console.log(students);

let mathew = new students();
console.log(mathew);
mathew.firstName = 'Mathew';
mathew.lastName = 'Oluwaseun';
mathew.email = 'mathew@gmail.com';
mathew.password = '123456';
mathew.faculty = 'Engineering';
mathew.level = 300;