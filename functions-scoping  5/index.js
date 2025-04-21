function greet() {
    console.log("Hello, welcome!");
}
greet();  
// with parameter
function user_greet(name) {
    console.log("my name is " + name);
}
user_greet("ahmad hassan");  
// scoping 
let a = 20 ;
{
    let a = 30 ;
    console.log(a);
}
console.log(a);
