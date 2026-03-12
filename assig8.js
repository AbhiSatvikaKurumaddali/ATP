/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//1. filter() students who passed (marks ≥ 40)
let passed=students.filter((element)=>element.marks>=40)
console.log("students who passed(marks>=40: ",passed)
// 2. map() to add a grade field ≥90 → A ≥75 → b ≥60 → C else → D
let grade=students.map(function(student){
    if(student.marks>=90)
    {
        return student.grade='A'
    }
    else if(student.marks>=75)
    {
        return student.graade='B'
    }
    else if(student.marks>=60)
    {
        return student.grade='C'
    }
    else{
        return student.grade='D'
    }
})
console.log(students)
//3. reduce() to calculate average marks
const avg=students.reduce((accumulator,element)=>(accumulator.marks+element.marks)/students.length)
console.log(" ",avg)
//4. find() the student who scored 92
let first=students.find((element)=>element.marks>90)
console.log(" ",first)
//5. findIndex() of student "Kiran"
let f=students.findIndex((element)=>element.name=="Kiran")
console.log(" ",f)