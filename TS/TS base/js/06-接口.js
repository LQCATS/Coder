"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const student = {
    id: 1,
    name: '张三',
    age: 24,
    // gender: 0
};
// student.id = 2
const foo = (data) => {
    return data;
};
foo({
    id: 2,
    name: '张三',
    age: 24,
    gender: 0
});
const menuData = [
    {
        title: '登录',
        Path: '/login'
    },
    {
        title: '首页',
        Path: '/home'
    },
    {
        title: '首页',
        Path: '/home',
        children: [
            {
                title: '首页',
                Path: '/home'
            },
            {
                title: '首页',
                Path: '/home'
            },
        ]
    }
];
