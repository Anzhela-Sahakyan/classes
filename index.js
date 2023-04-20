// function fakeMap(fn, array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(fn(array[i], i, array));
//   }
//   return newArray;
// }

// let array = [1, 2, 3];

// array.map((el) => el * 2);
// const res = fakeMap((el) => el * 2, array);
// console.log(res);

String.prototype.toJadenCase = function () {
  let array = this.split(" ");
  array = array.map((el) => {
    return el[0].toUpperCase() + el.slice(1);
  });
  return array.join(" ");
};

let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());
