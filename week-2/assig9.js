/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
// 1. filter() employees from IT department
let filter=employees.filter((element)=>element.department='IT')
console.log(filter)
/*2. map() to add:
            netSalary = salary + 10% bonus*/
let net_salary=employees.map((net)=>net.net_salary=net.salary+(net.salary*10/100))
console.log(net_salary)
console.log(employees)
// 3. reduce() to calculate total salary payout
const total_salary_payout=employees.reduce((accumulator,element)=>accumulator+element.net_salary,0)
console.log("total_salary_payout: ",total_salary_payout)
//4. find() employee with salary 30000
let first=employees.find((element)=>element.salary==30000)
console.log(" ",first)
//5. findIndex() of employee "Neha"
let f=employees.findIndex((element)=>element.name=="Neha")
console.log(" ",f)