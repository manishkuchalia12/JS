/*  Var , let , const
var a; ->declaration
 var a = 10; ->declaration and initialization and ye window mein add hota hai 
 -->var:Function-scoped or globally-scoped.
 Can be redeclared and updated.
 Variables declared with var are hoisted to the top of their scope.
--> let:Block-scoped.Cannot be redeclared within the same scope but can be updated.
 Variables declared with let are also hoisted, but not initialized.
--> const:Block-scoped.Cannot be redeclared or updated.Must be initialized at the time of declaration.
 */
// Using var
function varExample() {
    if (true) {
        var x = 10;
        console.log("Inside if block, x =", x); 
    }
    console.log("Outside if block, x =", x); 
}

varExample();

// Using let
function letExample() {
    if (true) {
        let y = 20;
        console.log("Inside if block, y =", y); 
    }
    // console.log("Outside if block, y =", y); // Error: y is not defined
}

letExample();

// Using const
function constExample() {
    const z = 30;
    console.log("Initial value of z =", z); 

    // z = 40; // Error: Assignment to constant variable
}

constExample();

//TDZ (let) - utna area jitna mein js ko pata to hai ki variable exist karta hai par wo aapko value nahi  de sakta 
