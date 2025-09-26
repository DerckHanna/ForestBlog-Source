---
title: Markdown 示例
published: 2023-10-01
description: 一个简单的 Markdown 博客文章示例
tags: []
category: Blog Guide
draft: false
---

# 一级标题

段落之间用空行分隔。

第二段落。*斜体*、**粗体**和`等宽字体`。项目列表看起来像：

- 这个项目
- 那个项目
- 另一个项目

注意 --- 不考虑星号 --- 实际文本内容从第4列开始。

> 块引用是
> 这样写的。
>
> 如果你喜欢，它们可以
> 跨多个段落。

使用3个破折号表示长破折号。使用2个破折号表示范围（例如，"全部在第12--14章"）。三个点...将被转换为省略号。
支持Unicode。☺

## 二级标题

这是一个编号列表：

1. 第一项
2. 第二项
3. 第三项

再次注意实际文本如何从第4列开始（距离左侧4个字符）。这是一个代码示例：

    # 让我重申...
    for i in 1 .. 10 { do-something(i) }

如您所猜，缩进4个空格。顺便说一下，您可以使用分隔块来代替缩进块：

```
define foobar() {
    print "Welcome to flavor country!";
}
```

（这样更容易复制和粘贴）。您可以选择标记分隔块以便Pandoc进行语法高亮：

```python
import time
# 快，数到十！
for i in range(10):
    # （但不要*太*快）
    time.sleep(0.5)
    print i
```

### 三级标题

现在是一个嵌套列表：

1. First, get these ingredients:

    - carrots
    - celery
    - lentils

2. Boil some water.

3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

再次注意文本如何始终对齐4空格缩进（包括上面继续第3项的最后一行）。

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

`这是一个指向网站的链接，指向本地文档的链接，以及指向当前文档中章节标题的链接` `这是一个脚注`

[^1]: Footnote text goes here.
`这是一个脚注`

表格可以看起来像这样:

(这个用不了 : Fuwari 主题使用的是标准 Markdown 解析器，不直接支持 Pandoc 特有的极简表格语法（如无竖线的表格）,这部分我用代码块括起来，不用看)

```md collapse={1-43}
size material color

---

9 leather brown
10 hemp canvas natural
11 glass transparent

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

---

keyword text

---

red Sunsets, apples, and
other red or reddish
things.

green Leaves, grass, frogs
and other things it's
not easy being.

---

接下来是一条水平分割线。

---

这是一个定义列表：

苹果
: 适合做苹果酱。
橙子
: 柑橘类！
西红柿
: "tomato"中没有"e"。

同样，文本缩进4个空格。（在每个术语/定义对之间放一个空行以使内容更分散。）
```

标准markdown下的表格文档为:

## 基础表格

| 姓名 | 年龄 | 职业 |
|------|------|------|
| 张三 | 25   | 设计师 |
| 李四 | 30   | 开发者 |
| 王五 | 35   | 产品经理 |

## 带对齐方式的表格

| 左对齐内容 | 居中对齐内容 | 右对齐内容 |
| :--------- | :----------: | ---------: |
| 文本1      |    文本2     |      数值1 |
| 长文本示例 |   居中文本   |     12345 |

这是一个"行块"：

| 第一行
| 第二行
| 第三行

图像可以这样指定：

`[//]: # (![example image]&#40;./demo-banner.png "An exemplary image"&#41;)`

行内数学方程这样插入：$\omega = d\phi / dt$。显示数学应该独占一行并用双美元符号括起来：

$$I = \int \rho R^{2} dV$$

$$
\begin{equation*}
\pi
=3.1415926535
 \;8979323846\;2643383279\;5028841971\;6939937510\;5820974944
 \;5923078164\;0628620899\;8628034825\;3421170679\;\ldots
\end{equation*}
$$

And note that you can backslash-escape any punctuation characters which you wish to be displayed literally, ex.: `foo`, *bar*, etc.
`请注意，您可以用反斜杠转义任何希望按字面显示的标点字符，例如：`foo`、*bar*等。`
