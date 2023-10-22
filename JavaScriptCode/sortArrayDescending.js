function sortArrayDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const numbers = [5, 2, 9, 1, 5, 6];
sortArrayDescending(numbers);
console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]
