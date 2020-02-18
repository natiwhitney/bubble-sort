function bubbleSort(arr, comparator = bubbleSort.comparator) {
  if (!arr.length || arr.length == 1) {
    return arr;
  }

  let swaps = 1; // array is not yet sorted

  while (swaps) {
    swaps = 0; // set to 0 for iteration
    for (leftIndex = 0; leftIndex < arr.length - 1; leftIndex++) {
      const leftElt = arr[leftIndex];
      const rightElt = arr[leftIndex + 1];
      if (comparator(leftElt, rightElt) === -1) {
        bubbleSort.swap(arr, leftElt, rightElt, leftIndex);
        swaps++;
      }
    }
  }

  return arr;
}

bubbleSort.swap = function(arr, leftElt, rightElt, leftIndex) {
  arr[leftIndex + 1] = leftElt;
  arr[leftIndex] = rightElt;
};

bubbleSort.comparator = function(a, b) {
  if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
  if (a.age > b.age) return 1; // returning  `1` means "b goes before a"
  return 0; // returning 0 means "a and b are equivalent"
};
