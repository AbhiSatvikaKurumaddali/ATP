let user = {
      name: "Ravi",
      city: "Hyderabad"
    };
//Create a new object updatedUser
let updatedUser={...user}
//Copy all properties from user
//Add a new property age: 25
updatedUser.age=25
//Print both objects
console.log(user)
console.log(updatedUser)