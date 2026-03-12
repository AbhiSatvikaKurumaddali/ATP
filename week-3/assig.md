db.employees.insertMany([
   {
              empId:003,
              name:"hema",
              skills:["react","MongoDB","html"],
              experiences:[
                     {
                            companyName:"Google",
                            yearsOfExp:2
                     }
              ]
       },
{
              empId:006,
              name:"varun",
              skills:["angular","html","MySQL"],
              experiences:[
                     {
                            companyName:"TCS",
                            yearsOfExp:2
                     },
                {
                            companyName:"Amazon",
                            yearsOfExp:3
                     }
              ]
       },
{
              empId:007,
              name:"karthik",
              skills:["react","angular","MongoDB","HTML"],
              experiences:[
                     {
                            companyName:"Wipro",
                            yearsOfExp:3
                     },
                     {
                            companyName:"Dell",
                            yearsOfExp:3
                     }
              ]
       },
{
              empId:009,
              name:"mahi",
              skills:["html","TailwindCSS","JS"],
              experiences:[
                     {
                            companyName:"Hathway",
                            yearsOfExp:3
                     }
              ]
       },
{
              empId:008,
              name:"ravi",
              skills:["MongoDB","react","node","express"],
              experiences:[
                     {
                            companyName:"JPMC",
                            yearsOfExp:4
                     }
              ]
       }


])


db.employees.find()

db.employees.updateOne({name:"karthik"},{$pull:{skills:"MongoDB"}})

db.employees.find({skills:"react"})

db.employees.updateOne({name:"varun"},{$push:{experiences:{companyName:"Infosys",yearsOfExp:2}}})

db.employees.deleteOne({empId:007})

db.employees.find()