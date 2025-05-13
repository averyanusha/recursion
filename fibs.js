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
  if (n === 0){
    return 0;
  }
  if (n === 1) {
    return 1;
  } else {
    return (fibsRec(n - 1) + fibsRec(n - 2));
  }
}

console.log(fibsRec(8));
