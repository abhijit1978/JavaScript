// console.log('Hay class ....')
class Employee {
  constructor(name, dept, desig) {
    this.name = name;
    this.dept = dept;
    this.desig = desig;
  }

  printEmp() {
    console.log(`${this.name} works in ${this.dept} department as ${this.desig}`)
  }
}
// console.log(Employee)
const developer = new Employee('Abhijit', 'IT', 'Tech Lead')
console.log(developer);
developer.printEmp()