// Function using const for variable instantiation
function taskFirst() {
  const pi = 3.14;
  const maxAttempts = 5;
  const greeting = "Hello, World!";
  
  console.log("Variables instantiated using const:");
  console.log("pi:", pi);
  console.log("maxAttempts:", maxAttempts);
  console.log("greeting:", greeting);
}

// Function using let for variable instantiation
function taskNext() {
  let counter = 0;
  let message = "Welcome to the next task!";
  let isActive = true;
  
  console.log("\nVariables instantiated using let:");
  console.log("counter:", counter);
  console.log("message:", message);
  console.log("isActive:", isActive);
  
  // Modifying a variable declared with let
  counter++;
  console.log("\nAfter modifying counter (using let):");
  console.log("counter:", counter);
}

// Example usage
taskFirst();
taskNext();
