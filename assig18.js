const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
//Create a shallow copy of user
let shallowuser={...user}
//name in the copied object
shallowuser.name='abhi'
//preferences.theme in the copied object
shallowuser.preferences.theme='light'
//Log both original and copied objects
console.log(user)
console.log(shallowuser)