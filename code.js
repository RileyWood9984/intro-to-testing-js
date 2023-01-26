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
function isFive(input) {
    if (input===5||input==="5") {
        return (input == 5)
    } else{
    return false
    }
}
function isVowel(inp){
    console.log(inp.toLowerCase())
    let input= inp.toLowerCase()

    if (isNaN(input)===false){
        return false
    }else if(input==='a'||input==='e'||input==='i'||input==='o'||input==='u'){
        return true
    }
    else {
        return false
    }
}
