const accountId = 144553
let accountEmail = "dipanjali@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 2 // not allowed


accountEmail = "dipa@gmail.com"
accountPassword = "21212121"
accountCity = "puri"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])