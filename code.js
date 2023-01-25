// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    // if (input === "Alex") {
    //     return ("Hello, Alex!")
    // }else if(input === "Pat"){
    //     return ("Hello, Pat!")
    // } else {
    //     return "Hello, Jane!";
    // }
    if (input === null || input === undefined|| isNaN(input)===false) {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!"
    }
}
function isFive(x) {
    return x==5
}
