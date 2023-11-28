function taskBlock() {
  // Variables declared with let are block-scoped
  let variable1 = "I am outside the block";

  if (true) {
    // Using let inside the block to avoid overwriting
    let variable1 = "I am inside the block";
    console.log(variable1); // Output: I am inside the block
  }

  console.log(variable1); // Output: I am outside the block
}

// Example usage
taskBlock();
