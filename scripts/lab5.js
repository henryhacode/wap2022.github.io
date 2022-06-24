function sum(array) {
  return array
    .filter(val => val > 20)
    .reduce(function (sum, val, index, array) {
      return sum + val;
    });
}

let arr = [1, 32, 5, 10, 23, 50];
console.log(`input value: ${arr}`);
console.log("Sum result: " + sum(arr));

let s = 'abc';
let getNewArray = array => {
    return array.filter(s => s.length >= 5 && s.includes('a'));
}

let sarr = ['car', 'array', 'abnormal', 'interesting', 'marriage', 'money', 'happpyy', 'motion'];
console.log(`input string array: ${sarr}`)
console.log('filterred array: ' + getNewArray(sarr));
