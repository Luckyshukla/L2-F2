console.log("Exception handiling");

// Pretend this is coming from a server as response
let a = "is Exception in Xenonstack";
a = undefined;
if (a !=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}


try {
    null.console
    console.log("We are inside try block");

    functionname();

} catch(error) {
    console.log(error)
    console.log("Are you okay?");
    console.log(error.name);
    console.log(error.message);

} finally {
    console.log("Finally we will run this")
}
