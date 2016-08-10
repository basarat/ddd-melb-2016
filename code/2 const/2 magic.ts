let x; 

// Low readability
if (x > 10) {
}

// Better!
const maxRows = 10;
if (x > maxRows) {
}

/** Module */
export { maxRows };