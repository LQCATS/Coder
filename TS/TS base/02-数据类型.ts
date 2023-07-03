//number
var a: number = 1;
//string
let b: string = 'hello';
//undefined
const c: undefined = undefined;
//null
let d: null = null;
//数组
let e: number[] = [1, 2, 3, 4]
//对象
let f: { name: string, age: number } = {
    name: '张三',
    age: 20
}
console.log(f.name);
//any和unknown
let g: any = '1';
let h: unknown = 1;

//any可以赋值给任意数据类型，unknown只能赋值给any和unknow
// a = g
// a = h
// h = g

let i: object[] = [
    {
        name: '张三',
        age: 20,
        children: [
            {
                name: '张三2',
                age: 20,
            }
        ]
    }
]
console.log(i[0]);

//元组，元组中可以保存不同类型的数据
let j: [number, number, string] = [1, 2, '3'];

//枚举，枚举的作用，就是用来对数据中的一些“魔鬼数字”来进行标记，给所有的数字定义一个对应含义的英文单词。
enum GenderState {
    woman,
    man,
    secret
}

let goods: { name: string, age: number, gender: GenderState } = {
    name: 'lisi',
    age: 20,
    gender: GenderState.man
}
console.log(goods.gender);

//void没有任何数据类型，表示函数不能有返回值
function add(): void {

};

export { }