class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

const p1 = new Point(0, 10);
const p2 = new Point(10, 20);

const p3 = p1.add(p2); // {x:10,y:30}

console.log(JSON.stringify(p3));

/** Module */
export { Point };