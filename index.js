const increase = () => {
  let x = 0;
  const increaseInner = () => ++x;
  increaseInner();
  console.log(x);
  return x;
};

console.log(increase()); // output: 1
// console.log(increase()()); // output still: 1

// const useClosure = increase();
// console.log(useClosure()); // output: 1
