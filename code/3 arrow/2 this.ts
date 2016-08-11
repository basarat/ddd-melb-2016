function Person(age) {
    this.age = age
    this.growOld = () => {
        this.age++;
    }
}
const person = new Person(1);
const growOld = person.growOld;

console.log(person.age);
growOld();
console.log(person.age);