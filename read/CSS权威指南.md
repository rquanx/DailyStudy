## 第一章

### 元素

#### link

##### 属性

media

> 设定样式应用于哪些媒体类型



altername style sheet

> 设定为候选样式表，可根据浏览器设置切换使用不同的样式，结合title属性进行使用



#### style

##### @import

在css代码中Import其他样式



```css
@import url(./a.css)
```



##### 兼容老浏览器

一般对于无法识别的内容，浏览器会自动过滤，但如果style标签无法被识别时style内的样式内容会被当作文本进行显示，为了避免这种情况，可以将style内容进行注释，这样能识别的浏览器可正常使用，不能识别的会忽略

```html
<style><!--
    h1 { color: red}
--></style>
```





## 第二章

### 选择器

#### 声基本明

选择器 { 属性: 值; }

选择器 { 属性: v1 v2 v3; }



#### 元素选择器



##### 逗号

```css
h1,p { color: red }
/* === */
h1 { color: red }
p { color: red }
```



##### *

所有



#### 类选择器

##### 结合元素选择器

```css
p.myclass {}
/*选中class为myclass的p元素*/
```

##### 多类选择

```css
.c1.c2 {}
/*匹配同时含有c1和c2的元素*/
```



#### 属性选择器

单纯的类选择器或ID选择器可能不全面，主要是为了应对其他的标记语言



##### 简单属性选择

```css
h1[class] {}
/*选中有class属性的h1*/

h1[class][title] {}
/*同时有多个属性*/
```



##### 根据属性值选择

可为任何元素指定属性和值的组合，值必须完全匹配，如选中类时，多个类是无效的

```css
a[href="https://www.xxx.com"] {}
/*选中href属性为...的元素*/

a[href="https://www.xxx.com"][title="123"] {}
/*选中href属性为...且title为123的元素*/
```



##### 根据部分属性值选择

使用~符号

```css
p[class~="c1"] {}
/* 可以匹配  <p class="c1 c2" />*/
```



##### 子串属性匹配

```css
[foo^="bar"] foo属性以bar开头
[foo$="bar"] foo属性以bar开结尾
[foo*="bar"] foo属性包含bar
```



##### 特定属性选择

```css
[lang|="213"]
```



#### 后代选择器

使用空格进行连接

```css
h1 p {}
/*选择h1中后代p*/
```



##### 子元素选择

```css
h1 > p {}
/*选择h1下第一个p元素*/
```



##### 相邻兄弟

```css
h1 + p {}
/*选中紧临h1的后一个p元素*/
```



#### 伪类选择器

:visited

:link

:lang(fr)



##### 静态伪类

:first-child

> p:first-child
>
> 对应于某个元素下，第一个子元素是p的p元素



##### 动态伪类

:hover

:focus

:active



> 通过动态伪类，可以实现hover后内容放大效果，但是规范指出，“文档第一次显示后，用户代理不必重绘文档”，所以这不一定会生效



##### 伪类结合使用

```css
a:link:hover {}
a:visited:hover {}
```



#### 伪元素选择器

:first-letter

:first-line



:before

:after

> 在元素前后插入





## 第三章

#### 优先级

- id	0,1,0,0

- 类、属性、伪类	0,0,1,0

- 元素、伪元素	0,0,0,1
- 内联声明	1,0,0,0
- 通配符 0（有优先级中最低）
- 继承 无（比通配符更低）



虽然ID选择器和属性选择器都能选中到id元素，但是他们的优先级是不一样的



#### 继承

有的属性会在子元素一直继承下去，有的属性不继承（边框、内外边距、背景）





## 第四章

#### 颜色

##### 写法

rgb(0,0,0)

rgb(0%,0%,0%)

#F00	简写16进制

#FF0000	16进制



##### 安全色

避免抖动的颜色

00,33,66,99,CC,FF组合的16进制色



#### 长度

##### 绝对长度

in、cm、mm、pt、pc几乎不使用



##### 相对长度

em	相对于父元素的font-size大小

ex	小写x的高度？

px	像素点



## 第五章



### 字体

#### 分类

除特定分类大致分为5种

- serif

- sans-serif

- monospace

- cursive

- fantasy



#### 字体设置



##### font-family

当字体名出现空格或包含特殊字符时则使用单引号括起

```css
body { font-family: sans-serif;}
/*只设置字体分类，但不关心实际使用的字体*/

body { font-family: Times,TimesNR,Georgia;}
/*会安装顺序使用字体，前面的字体没安装使用后面的*/
```



##### font-weight

可能多个值都会映射至同样的大小，但绝不比前一个值小



bolder、lighter让字体变大、变小一级



## 第六章

### 文本

#### 文本缩进text-indent



#### text-align



#### line-height





## 第七章



