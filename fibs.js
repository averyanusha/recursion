function fibs (n){
  if (n < 2)
    return n;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log(fibs(12));

function fibsRec (n) {
  if (n === 1){
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  } else {
    let result = fibsRec(n - 1);
    result.push(result[result.length -1] + [result.length - 2]);
    return result;
  }
}

console.log(fibsRec(8));
