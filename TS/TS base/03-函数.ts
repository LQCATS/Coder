function foo(x: number, y: number): number {
    return x + y;
};
foo(1, 2)


const a = (x: number, y?: number): void => {

};
a(1);

const b = (x: number, y: number = 1): number => {
    return x + y;
};
b(2);

const c = (x: number, ...rest: number[]) => {
    console.log(rest);
};
c(1, 2, 3, 4);

const d: (x: number, y: number) => number = (x, y) => {
    return x + y;
}
export { }