// Purpose: Experimentation with JavaScript
// Author:  Edward White
// Date:    19/08/24

/*
** JavaScript is not a strongly-typed language - all variable types are implicitly defined by their use.
**
** "Hoisting" a variable is where the declaration of a variable is automatically brought up to the
** top such that the variable can be referenced before it has been declared.
** This can be achieved with the "let" keyword.
*/

let a = 4;      // Variable with an Number value.
let b = "yes";  // Variable with a String value.
let c = true;   // Variable with a Boolean value.

// A simple FOR loop which prints the numbers 0 to 9.
for (let j = 0; j < 10; j++) {
    console.log(j);
    a = j;
}

// A simple IF-ELSE block which prints the incremented number when it is greater than 5.
if (a > 5) {
    console.log(a);
} else {
    console.log('Variable "a" was less than 6.');
}

// A simple WHILE loop which prints the numbers 'a' to 20.
while (a < 20) {
    console.log(a);
    a++;
}

// A simple DO-WHILE loop which prints the numbers 'a' to 30.
do {
    console.log(a);
    a++;
} while (a < 20);
