function split(wholeArray) {
  const n = wholeArray.length;
  const splitInd = Math.floor(n / 2);
  const firstHalf = [...wholeArray].splice(0, splitInd);
  const secondHalf = [...wholeArray].splice(splitInd);

  return [firstHalf, secondHalf];
}

function merge(sortedLeft, sortedRight, comparator = merge.comparator) {
  // These are our indices
  let leftIndex = 0;
  let rightIndex = 0;

  // These are our elements
  let leftEl = sortedLeft[leftIndex];
  let rightEl = sortedRight[rightIndex];

  let mergedArray = [];
  // Here is our logic

  if (merge.comparator(sortedLeft[sortedLeft.length - 1], rightEl) !== 1) {
    return sortedLeft.concat(sortedRight);
  } else if ( merge.comparator(sortedRight[sortedRight.length - 1], leftEl) !== 1) {
    return sortedRight.concat(sortedLeft);
  } else {
    while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
      if (merge.comparator(leftEl, rightEl) !== 1) {
        mergedArray.push(leftEl);
        leftEl = sortedLeft[++leftIndex]; // ++
      } else {
        mergedArray.push(rightEl);
        rightEl = sortedRight[++rightIndex];
      }
    }
    if (leftIndex < sortedLeft.length) {
      let leftover = sortedLeft.splice(leftIndex);
      mergedArray.push(...leftover); // mutability v. immutability
    }

    if (rightIndex < sortedRight.length) {
      let leftover = sortedRight.splice(rightIndex);
      mergedArray.push(...leftover);
    }
    return mergedArray;
  }
}

function mergeSort(array) {
  if (array.length === 1) return array; // base case
  const [firstHalf, secondHalf] = split(array);
  const firstHalfSorted = mergeSort(firstHalf);
  const secondHalfSorted = mergeSort(secondHalf);
  return merge(firstHalfSorted, secondHalfSorted);
}

merge.comparator = function (a, b) {
  if (a < b) return -1; // returning `-1` means "a goes before b"
  if (a > b) return 1; // returning  `1` means "b goes before a"
  return 0; // returning 0 means "a and b are equivalent"
}
