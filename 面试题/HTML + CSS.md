# HTML + CSS面试题

## 1. CSS 的定位属性有哪些？区别是什么？

- 绝对定位：absolute
- 相对定位：relative
- 固定定位：fixed
- 粘性定位：sticky（CSS3新增）

区别：

- 是否脱离文档流：
  - absolute、fixed：要脱离
  - relative：不脱离，移动过程中破坏文档流移动，显示在标准文档流的上面
  - sticky：没有粘住时，不脱离文档流，粘住时脱离文档流
- 位移参照物：
  - absolute：相对于离自己最近的具有定位的父级
  - relative：相对于自身进行位移，不设置偏移量不会有任何的效果
  - fixed：相对于文档的显示区域进行移动
  - sticky：相对于父级进行移动

## 2. 什么是盒子模型（标准、怪异）？

- 标准盒模型下盒子的大小 = content + border + padding + margin
- 怪异盒模型下盒子的大小 = width（content + border + padding） + margin

## 3. rem、em、px、vw、vh区别？

- px：绝对单位，单位像素
- em：相对单位，相对于当前元素的font-size
- rem：相对单位，相对于html的font-size
- vw：相对单位，屏幕宽度的1%
- vh：相对单位，屏幕高度的1%

## 4.行内元素与块级元素的区别有哪些？

1. 行内元素：可以多个标签存在一行，不能直接设置行内标签的高度、宽度、行高以及顶和底边距，完全靠内容撑开宽高
2. 块级元素：独占一行，对高度、宽度、行高以及顶和底边距都可设置的属性值生效；如果不给宽度，块级元素就默认为浏览器的宽度，即就是100%宽

## 5.CSS隐藏元素的方式有哪些？区别是什么？

- display: none：

  - 将元素从文档流中移除，并隐藏元素；

  - 隐藏元素后，元素不会占据页面空间，也不会响应用户事件；

- visibility: hidden：

  - 将元素隐藏，但是仍然保留元素的空间。

  - 隐藏元素后，元素不会响应用户事件，但是仍然占据页面空间，因此不会影响页面布局。

- opacity: 0：

  - 将元素的透明度设置为 0，即完全透明。

  - 隐藏元素后，元素仍然占据页面空间，不会影响页面布局，而且仍然响应用户事件。

## 6.列举常见的行内元素和块级元素（各5个）

1. 行内元素：a，span，i，strong，b，em
2. 块级元素：div、p、ul、ol、li、dl、dt、dd、table、form、h1~h6

## 7.HTML5的新特性有哪些？（列举5个）

- 语义化标签：header，footer，section，article。。。
- 多媒体标签：audio、video。。。
- 绘图标签：canvas
- 本地存储：sessionStorage、localStorage
- 百度地图api
- 表单控件：calendar、date、time、email、url、search 。。。

## 8.CSS3的新特性有哪些？（列举5个）

- 伪类选择器：:first-child、:last-child、:nth-child(n)
- 伪元素选择器：::before、::after、::first-line、::first-letter
- 动画、过渡：transform、animation
- 弹性盒子：flex
- 阴影、圆角、渐变...

## 9.标准盒模型和怪异盒模型的区别

- 标准盒模型：宽高 = 内容
- 怪异盒模型：宽高 = 内容 + 内边距 + 边框

## 10.CSS样式中，哪些可以继承哪些不可以？

- 可以继承：

  - 字体样式：font、font-family、font-size、font-weight、font-style、font-variant等

  - 文本样式：text-align、text-indent、text-shadow 等

  - 行高样式：line-height

  - 颜色样式：color等

- 不可以继承：

  - 盒子模型样式：width、height、margin、padding、border 等
  - 定位样式：position、left、top、right、bottom 等
  - 显示样式：display、visibility、overflow 等
