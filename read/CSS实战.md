## 第三章




### 选择器

#### 子选择器
##### :first-child
选中作为其他元素第一个子元素的标签

##### :last-child
=== :first-child

##### :only-child
选中作为其他元素只有一个子元素的标签

##### :nth-child(odd/even/expression)
:nth-child(3)
:nth-child(2n)
:nth-child(-n + 3)

##### :first-of-type
在:first-child基础上增加类型筛选

##### :last-of-type

##### :nth-of-type(odd/even/expression)

#### 兄弟选择器

##### ~
```css
h1 ~ p {}
/* 选中h1所有的兄弟p*/
```

#### 选择符

##### ::first-letter
选择首字母

##### ::first-line
选择首行

##### :target

##### :not()
选择不符合条件的,不能连用，后代、伪元素选择群组选择或组合选择

```css
p:not(.c1) {}


a[href^="https://"]:not([href^="https://123"])
/*以https:// 开头但是不是https://123的  */

.c1:not(div)
div:not(#id)
li:not(:first-child)
```

## 第六章

### 字体

#### 字体下载

```css
@font-face {
    font-family: "";
    src: url("");
}

/* 让浏览器自动去下载字体，url可以是相对路径下的字体文件，src可以通过逗号指定多个，按顺序下载成功后不管后面的 */

```


#### 字体文件类型

##### EOT
IE支持的OpenType

##### ttf/otf
trueType、OpenType,电脑字体常用类型

##### woff
web开放字体格式，体积更小

##### woff2
新版woff

##### svg
可缩放矢量图形

#### 属性

#####  text-transform
uppercase | lowercase | capitalize | none
设置文本的大小写、驼峰

##### font-variant
将修改字母的大小写和字号?

##### text-decoration
下划线、横贯线...

##### letter-spacing
设置字符间隔

##### text-shadow
水平,垂直,模糊,颜色

设置字符阴影，类似boxshadow?

##### line-height


##### text-align
对齐


##### text-indent
缩进

### 列表

#### 属性

##### list-style-type
可设置方框、圆点、数字、罗马数字、字母等列表编号

##### list-style-position
inside | outside
设置编号是缩进还是外放

##### list-style-image
```css
list-style-image: url(path);
路径可以没有引号
```
将编号图标设置为图片

## 第七章

### 盒子模型

#### 属性

##### display

一般display分为块元素和行内元素

display:block
块元素：可设置边距，前后自带换行，占满一行

display:inline
行内元素：只占用内容长度，可与其他元素并行，不可设置边距

display:inline-block
既想是行内元素又想设置边距，使用inline-block


display可划分为内外两块？外部声明代表与其他元素间的关系，内表示内部的设置？
display: block === block-block
display: inline === inline-inline

##### box-sizing
content-box | padding-box | border-box
width包含内容、padding、border

标准盒子时是content-box，IE下是border-box

##### clean
left:强制元素显示在左浮动的元素下
right:同上
both:显示在左右浮动的元素下