# React

## 1.React组件通信

1. 父传子：props
2. 子传父：回调函数
3. 非父子：事件总线
4. 嵌套组件：context
5. 状态机：Redux

## 2.React类组件中的性能问题

性能问题：类组件的数据无论是否发生改变，只要调用setState，都会触发render函数

解决方案：

1. shouldComponentUpdate：在该生命周期函数中，获取到变化前后的数据进行对比，如果变化前后数据相等，说明数据没有发生变化，返回false来阻止render的执行；如果变化前后数据不相等，说明数据发生变化，返回true来执行render。
2. PureComponent：创建类组件时去继承PureComponent，PureComponent中已经通过shouldComponentUpdate对render进行了优化。

## 3.useEffect的使用

## 4.类组件和函数组件的区别

1. 语法层面：
   - 类组件：基于ES6的class；
   - 函数组件：基于函数；
2. this：
   - 类组件：访问组件数据和方法需要通过this
   - 函数组件：不需要使用this
3. 内部状态：
   - 类组件：类组件中通过state定义内部状态
   - 函数组件：在16.8之前，函数组件没有内部状态，16.8之后，通过useState定义内部状态
4. 生命周期：
   - 类组件：类组件中有自己的生命周期函数
   - 函数组件：在16.8之前，函数组件没有生命周期函数，16.8之后，通过useEffect模拟生命周期函数
5. hook：
   - 类组件：不能使用hook
   - 函数组件：可以使用hook

​    

