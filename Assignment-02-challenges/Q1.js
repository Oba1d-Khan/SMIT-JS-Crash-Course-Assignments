// **    Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.   **

function returnNumber(num) {
  return function (num2) {
    console.log(num + num2);
  };
}

let closure = returnNumber(7);
closure(3);
