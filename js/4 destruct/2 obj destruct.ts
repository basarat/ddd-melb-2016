var foo = {
  bar: {
    bas: 123
  }
};

var {bar: {bas}} = foo;

console.log(bas);


/** Module */
export { foo };