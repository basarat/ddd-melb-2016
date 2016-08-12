const foo = { bar: 123 };
foo = { bar: 456 }; // ERROR 

foo.bar = 456; // Allowed!

/** Module */
export { foo };