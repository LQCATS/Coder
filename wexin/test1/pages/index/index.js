// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    count: 1,
    name: "李四",
    age: 20,
    sex: 0,
    objUser: {
      id: 1,
      name:'张三',
      age: 20
    },
    listUser: [
      {
        id: 2,
        name: '老刘',
        age:28
      },
      {
        id:3,
        name: '老张',
        age: 50
      }
    ]
  }
})
