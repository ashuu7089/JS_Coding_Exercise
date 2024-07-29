
// console.dir()
// For hierarchical listing of arrays and objects.
console.dir(["apples", "oranges", "bananas"]);


// console.table()
// For rows and columns listing of arrays (might not be suitable for objects).
console.table(["apples", "oranges", "bananas"]);



console.table({"a": 1, "b": 2, "c": 3});

console.log("This is the top outer level");


// console.group()
console.group("Task 1");
console.log("Task activity 1");
console.log("Task activity 2");
console.groupEnd();

console.log("Back to the top outer level");

// console.time() & console.timeEnd()
try {
  console.time("recording...");
   someAsyncTask();
} catch (error) {
   // handle error
} finally {
  console.timeEnd("completed");
}

console.clear()