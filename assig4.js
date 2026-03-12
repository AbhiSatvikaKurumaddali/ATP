/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/
const temperatures = [32, 35, 28, 40, 38, 30, 42];
// 1. filter() temperatures above 35
let t=temperatures.filter((element)=>element>35)
console.log("temperatures above 35: ",t)
// 2. map() to convert all temperatures from Celsius → Fahrenheit
let fahrenheit=temperatures.map(element=>(element*9/5)+32)
console.log("converting in fahrenheit: ",fahrenheit)
//3. reduce() to calculate average temperature
const avg=temperatures.reduce((accumulator,element)=>(accumulator+element)/temperatures.length)
console.log("average of temperatures: ",avg)
//4. find() first temperature above 40
let first=temperatures.find((element)=>element>40)
console.log("first temperature above 40: ",first)
//5. findIndex() of temperature 28
let i=temperatures.findIndex((element)=>element===28)
console.log("index of temperature 28: ",i)