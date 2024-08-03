let arr = [ 10, 3, 5, 6, 2 ]; 
let n = arr.length;
// Initialize the arrays
let left = Array(n).fill(1);
let right = Array(n).fill(1);
let prod = Array(n).fill(0);

// Construct the left array
for (let i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
}

// Construct the right array
for (let j = n - 2; j >= 0; j--) {
    // console.log("j", j, "right[j]", right[j], "arr[j+1]", arr[j+1], "right[i+1]", right[j+1]);
    right[j] = arr[j + 1] * right[j + 1];
    // console.log(right[j]);
}

// Construct the product array using left and right
for (let i = 0; i < n; i++) {
    
    prod[i] = left[i] * right[i];
    console.log(prod[i]);
}
