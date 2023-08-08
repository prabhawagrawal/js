const sym = Symbol("key1");
const jsUser = {
    name: "Prabhaw",
    age: 11,
    location: "Pune",
    mail: "prabhaw.agrawal@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Saturday"]
};

jsUser.greeting = function(){
    console.log(`Hello ${jsUser["name"]}!`);
}

console.log(jsUser.greeting());