"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//number
var a = 1;
//string
let b = 'hello';
//undefined
const c = undefined;
//null
let d = null;
//数组
let e = [1, 2, 3, 4];
//对象
let f = {
    name: '张三',
    age: 20
};
console.log(f.name);
//any和unknown
let g = '1';
let h = 1;
//any可以赋值给任意数据类型，unknown只能赋值给any和unknow
// a = g
// a = h
// h = g
let i = [
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
];
console.log(i[0]);
//元组，元组中可以保存不同类型的数据
let j = [1, 2, '3'];
//枚举，枚举的作用，就是用来对数据中的一些“魔鬼数字”来进行标记，给所有的数字定义一个对应含义的英文单词。
var GenderState;
(function (GenderState) {
    GenderState[GenderState["woman"] = 0] = "woman";
    GenderState[GenderState["man"] = 1] = "man";
    GenderState[GenderState["secret"] = 2] = "secret";
})(GenderState || (GenderState = {}));
let goods = {
    name: 'lisi',
    age: 20,
    gender: GenderState.man
};
console.log(goods.gender);
//void没有任何数据类型，表示函数不能有返回值
function add() {
}
;
