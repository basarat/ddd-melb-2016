let foo = 123;
if (true) {
    let foo = 456;
}
console.log(foo); // 123

/** Module */
export { foo };