function foo<T>(x: T, y: T): T {
    return x;
}
foo<number>(1, 2);

function a<T, K>(x: T, y: K) {

}

a<number, boolean>(1, true);
a<number, string>(1, '2');


interface Person<T> {
    name: string,
    age: T
}

const student: Person<number> = {
    name: 'zhangsan',
    age: 20
}

const teacher: Person<string> = {
    name: 'lisi',
    age: '40'
}