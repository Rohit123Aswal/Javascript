const accountId = 14453    //  const is used to assign a value to a varible which can't be change further
let accoutEmail = "rohit@gmail.com"   // let is used to declare a variable
var accountPasword = "12345"    //  var is second type to declare a variable
accountCity = "Jaipur"

// accountId = 2  // not allowed 

let accounState;

accountPasword = "21212121"
accountCity = "kotdwar"
accoutEmail = "abc@gmail.com"


console.log(accountId);

/*  
Prefer not use to var
because of issue in block scope and function scope
*/


console.table([accountId,accoutEmail,accountPasword,accountCity,accounState])

