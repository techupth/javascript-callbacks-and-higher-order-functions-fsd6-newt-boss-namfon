const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

function salary() {
  let updatedSalaries = [];
  for (let i = 0; i < employeeSalaries.length; i++) {
    updatedSalaries.push(employeeSalaries[i] + 5000);
  }
  return updatedSalaries;
}

function increaseSalary() {
  newEmployeeSalaries = salary();
}

increaseSalary();
console.log(newEmployeeSalaries);
