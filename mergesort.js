function mergeSort (arr){
  if(arr.length <= 1) {
    return arr; 
  }
  let middle = Math.floor(arr.length/2);
  let first = arr.slice(0, middle);
  let second = arr.slice(middle);
  const firstSorted = mergeSort(first);
  const secondSorted = mergeSort(second);
  return merge(firstSorted, secondSorted);
}

function merge (firstSorted, secondSorted) {
  let result = [];
  let i = 0;
  let l = 0;
  while (i < firstSorted.length && l < secondSorted.length){
    if (firstSorted[i] < secondSorted[l]){
      result.push(firstSorted[i]);
      i++;
    } else {
      result.push(secondSorted[l]);
      l++;
    }
  }
  while (i < firstSorted.length) {
    result.push(firstSorted[i]);
    i++;
  }
  while (l < secondSorted.length) {
    result.push(secondSorted[l]);
    l++;
  }
  return result;
}

console.log(mergeSort([2, 5, 1, 0, 6, 3, 1]));
