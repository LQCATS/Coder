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
