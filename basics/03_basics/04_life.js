// Immediately Invoked funciton Expression (IIFE)


(function coffee(){
    console.log(`DB CONNECTED`)

})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('rohit')