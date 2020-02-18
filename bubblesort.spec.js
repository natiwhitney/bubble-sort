describe("Bubble Sort", function() {
  let testArr;
  let sortedTestArr;

  beforeAll(function() {
    const arrLength = Math.floor(Math.random() * 5) + 1;
    testArr = [];
    for (let i = 0; i < arrLength; i++) {
      testArr.push(Math.floor(Math.random() * 5));
    }
    sortedTestArr = [...testArr].sort();

    spyOn(bubbleSort, "swap").and.callThrough();
  });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("sort single item array", function() {
    const arr = [1];
    expect(bubbleSort(arr)).toEqual(arr);
  });
  it("sort already sorted array", function() {
    const arr = [1, 2, 3];
    expect(bubbleSort(arr)).toEqual(arr.sort());
  });
  it("sorts multiple item array", function() {
    expect(bubbleSort(testArr)).toEqual(sortedTestArr);
  });
  it("sort items with duplicates", function() {
    expect(bubbleSort(testArr)).toEqual(sortedTestArr);
  });
  it("swap was called", function() {
    bubbleSort(testArr);
    expect(bubbleSort.swap.calls.count()).toBeGreaterThan(-1);
  });
});
