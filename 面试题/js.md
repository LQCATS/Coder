# JS面试题

## 1.什么是作用域？



作用域指变量的可访问性和可见性，也可以理解是变量的活动范围。

## 2. 什么是作用域链？

当我们在一个作用域当中使用一个变量的时候，会优先在当前作用域中去查找，如果找不到，会继续向上一层作用域查找该变量，直到找到为止。如果找不到，会自动在全局通过var创建一个该变量。

## 3.let、const、var 的区别是什么？

|          | var                                                          | let                                                          | const                                                        |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 作用域   | 在局部作用域内有效                                           | 在块级作用域有效                                             | 在块级作用域有效                                             |
| 重复声明 | 可以（原理：变量提升会初始化变量并赋值undefined，后续声明只是赋值） | 不可以（原理：有变量提升但是并没有初始化变量，只有在赋值的时候才初始化，但是不能初始化多次） | 不可以（原理：有变量提升但是并没有初始化变量，只有在赋值的时候才初始化，但是不能初始化多次） |
| 初始值   | 可以不赋值（会由js自动赋值undefined）                        | 可以不赋值（会由js自动赋值undefined）                        | 必须有初始值，是一个常量                                     |
| 修改     | 可以修改                                                     | 可以修改                                                     | 不可以修改（不能修改指针，但是可以修改值）                   |
| 变量提升 | 有变量提升，初始化变量并赋值undefined                        | 有变量提升，但是不会初始化变量，只有在创建变量的时候才会初始化 | 有变量提升，但是不会初始化变量，只有在创建变量的时候才会初始化 |



## 4. ES6的新特性有哪些？

1. let、const
2. 箭头函数、rest参数、参数默认值
3. 模板字符串
4. Promise
5. 解构赋值
6. 扩展运算符
7. 前端模块化（export、import from）
8. 对象属性的简写
9. class
10. async await
11. Set、Map
12. Symbol

## 5. 什么是Set和Map？

- Set：数据集合，类似于数组，但是每一个数据成员都是唯一的，不会重复，多用于数组去重
- Map：数据字典，类似于对象，但是每一个数据成员都是唯一的

## 6. 箭头函数和普通函数的区别是什么？

|          | 箭头函数                                                     | 普通函数                                          |
| -------- | ------------------------------------------------------------ | ------------------------------------------------- |
| 外形     | 书写比普通函数更加简介，（）=>{};                            | function name() {}                                |
| 匿名函数 | 只能是匿名函数                                               | 可以是匿名函数，也可以是具体名函数                |
| 构造函数 | 不能作为构造函数                                             | 可以作为 构造函数                                 |
| this     | 自身没有this，在声明时可以捕获其所在上下文的this供自己使用，永远也改变不了this的指向 | 有自己的this，可以调用apply()等方法改变自己的this |
| 参数     | 不绑定arguments，取而代之用REST参数代替arguments对象         | 可以绑定arguments，也可以使用REST参数             |



## 7. 什么是暂时性死区？

从变量的创建到语法绑定之间这一段空间，我们就可以理解为‘暂时性死区’，在死区的时候没有办法提前使用这些变量

## 8. 基本数据类型和引用数据类型的区别（内存）？

- 基本数据类型是储存在栈空间的，当let a=10，let b=a，修改b的值时，不会改变a的值
- 引用数据类型时储存在堆空间的，当要使用这个数据时，拿到的是堆空间的地址，let a=地址1，let b=地址1，修改b的值时，地址1会修改，对应的a也会修改

## 9. 数组的方法有哪些？哪些会改变原数组？哪些不会？

会改变：push、unshift、pop、shift、splice、sort、reverse

不会改变：forEach、map、filter、every、some、reduce、find、includes、indexOf、concant、join、slice

## 10. == 和 === 的区别。

1. ==在进行比较时，会先隐式转换，将两个数据转化为同一类数据，然后再进行值和类型的比较
2. ===在进行比较时，直接比较值和数据类型

## 11. var、let、const 的区别。

- 作用域：
  - var：函数作用域（通过函数来划分作用范围）
  - let、const：块级作用域（通过大括号来划分作用范围）
- 变量提升：
  - var：有变量提升
  - let、const：没有变量提升，但是有暂时性死区
- 修改值：
  - var、let：可以重新赋值
  - const：不可以重新赋值（不能修改基本数据类型，以及不能修改引用数据类型的地址）
- 初始值：
  - var、let：可以不设置初始值
  - const：必须设置初始值
- 重复声明（同一作用域下）：
  - var：可以声明同名变量
  - let、const：不能声明同名变量

## 12.JS的数据类型有哪些？

- 基本数据类型：数字，字符串，布尔值，null，undefined，Symbol，bigInt
- 引用数据类型：object

## 12.基本类型数据和引用类型数据的区别

- 存储位置
  - 基本数据类型：数据值保存在栈空间
  - 引用数据类型：数据值保存在堆空间，引用地址保存在栈空间
- 赋值
  - 基本数据类型：“值传递”，赋值完成后两个数据相互独立，其中一个修改不会影响另一个；
  - 引用数据类型：“值传递”，赋值完成后两个地址指向堆空间中的同一条数据，其中一条修改会影响另一个
- 比较方式
  - 基本数据类型：“值比较”
  - 引用数据类型：“址比较”

## 13.改变this指向的方法有哪些？区别是什么？

- 参数区别：

  - call、bind：第一个参数是this新的指向，剩余的参数以逗号分隔依次传递
  - apply：第一个参数是this新的指向，剩余的参数需要以一个数组的形式传递

- 是否立即调用：

  - call、apply：在改变this指向的同时，立即执行当前函数
  - bind：返回一个改变this指向的新函数，需要再次调用才会执行

  ```js
  cosnt obj = {};
  cinst foo = {x,y} =>{};
  foo(1,2);
  
  foo.call(obj,1,2);
  foo.apply(obj,[1,2]);
  foo.bind(obj,1,2)();
  ```

  

- 在实际开发中，大部分修改this指向的场景我们会用箭头函数来实现，箭头函数没有this的指向，可以继承父级的this

## 14.Promise的方法有那些？

1. ``resolve()``：请求成功时，调用``resolve()``，会将Promise的状态从进行中切换为已成功；
2. ``reject()``：请求失败时，调用``reject()``,会将Promise的状态从进行中切换成已失败；
3. ``then()``：当Promise对象的状态从进行中切换成已完成时，会触发``then()``方法；
4. ``catch()``：当Promise对象的状态从进行中切换成为已失败时，触发``catch()``方法；
5. ``finally()``：当Promise对象的状态从进行中切换为已成功或者已失败时，触发``finally()``方法；
6. ``all()``：当数组中所有请求都已成功时，``all()``的结果为已成功，只要有一个请求已失败，``all()``的结果为已失败；
7. ``race()``：数组中最先完成的请求结果，会作为``race()``的结果；
8. ``any()``：数组中最先成功的请求的结果，会作为``any()``；

