describe('Split Array function', function () {

  beforeEach(function() {
    const arrLength = Math.floor(Math.random() * 10) + 1;
    testArr = [];
    for (let i = 0; i < arrLength; i++) {
      testArr.push(Math.floor(Math.random() * 10));
    }
    sortedTestArr = [...testArr].sort();
  });

  it('is able to split an array into two halves', function() {
    expect(split(testArr).length).toEqual(2)
  });
  it('has all of the same elements as the original array', function() {
    const [firstHalf, secondHalf] = split(testArr)
    expect(firstHalf.concat(secondHalf).sort()).toEqual(testArr.sort())
  });
})

describe('Merge function', function(){
  beforeEach(function() {
    const arrLength = Math.floor(Math.random() * 10) + 1;
    testArr = [];
    for (let i = 0; i < arrLength; i++) {
      testArr.push(Math.floor(Math.random() * 10));
    }
    sortedTestArr = [...testArr].sort();
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    const [firstHalf, secondHalf] = split(testArr)
    expect(merge(firstHalf.sort(), secondHalf.sort())).toEqual(testArr.sort())
  });

  it('is able to combine two arrays already sorted with respect to one other into one sorted array', function() {
    const firstHalf = [1,2,3]
    const secondHalf = [3,4,5]
    expect(merge(firstHalf,secondHalf)).toEqual([1,2,3,3,4,5])
    expect(merge(secondHalf,firstHalf)).toEqual([1,2,3,3,4,5])
  });

});

describe('Merge sort function', function(){
  beforeEach(function() {
    const arrLength = Math.floor(Math.random() * 10) + 1;
    testArr = [];
    for (let i = 0; i < arrLength; i++) {
      testArr.push(Math.floor(Math.random() * 10));
    }
    sortedTestArr = [...testArr].sort();
  });

  it('is able to sort an array', function(){
    expect(mergeSort(testArr)).toEqual(sortedTestArr)
  });

  it('returns a single element array', function(){
    const arr = [1]
    expect(mergeSort(arr)).toEqual(arr)
  });

});
