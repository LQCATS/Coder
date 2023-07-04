interface Person {
    readonly id: number,
    name: string,
    age: number,
    gender?: number
};

const student: Person = {
    id: 1,
    name: '张三',
    age: 24,
    // gender: 0
};

// student.id = 2

const foo = (data: Person): Person => {
    return data;
};

foo({
    id: 2,
    name: '张三',
    age: 24,
    gender: 0
});


interface memuItem {
    title: string,
    Path: string,
    children?: memuItem[]
}

const menuData: memuItem[] = [
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
]

export {}