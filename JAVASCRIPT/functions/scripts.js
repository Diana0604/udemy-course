function sampleFunction() {
    console.log("sample function");
}

//function declaration
function funcWithArgument(arg) {
    console.log("argument is: " + arg);
}

//function expression
var sayHi = function(){
    console.log("Hello");
    return "Hello";
}

function startSinging(){
    // call function sing every 1000 seconds
    return setInterval(function(){
        console.log("twinkle twinkle...");
        console.log("how I wonder...");
    }, 1000);
}

function singAndStop(){
    var x = startSinging();
    setTimeout(function() {
        clearInterval(x);
    }, 4000);
}