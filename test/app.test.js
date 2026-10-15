function greet(name) {
  return `Hello, ${name}!`;
}

if (greet("World") === "Hello, World!") {
  console.log("Test passed!");
} else {
  console.log("Test failed!");
  process.exitCode = 1;
}
