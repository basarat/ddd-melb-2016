let someArr = Array.from({ length: 3 });
let indexes1 = []
for (let index = 0; index < someArr.length; index++) {
  indexes1.push(index);
}
console.log(indexes1);

const indexes2 = someArr.map((x, i) => i);
console.log(indexes2);
 

/** Module */
export { someArr };