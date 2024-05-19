/*
Write a function called make_shirt() that accepts a size and the text of a message that should
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
message printed on it. Call the function.
*/
function make_shirt(size, message) {
    console.log("You selected ".concat(size, " shirt, with ").concat(message, " written on it."));
}
make_shirt("Large", "codeWithLaraib");
make_shirt("small", "HeHe");
