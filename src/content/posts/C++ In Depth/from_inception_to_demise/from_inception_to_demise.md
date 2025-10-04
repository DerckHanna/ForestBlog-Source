---
title: C++|起始终末函数们的区别
published: 2025-09-29
description: '区分begin-begin、cbegin-cend、front-back,并进行纵向对比'
image: "./from_inception_to_demise.png"
tags: ['区别辨析']
category: 'C++ In Depth'
draft: false 
---

> 封面来源: [次元小镇](https://dimtown.com/50821.html)
> 画师：日本插画师みふる

## 起始终末函数们

本文讨论的函数为:

- `begin()`和`end()`
- `cbegin()`和`cend()`
- `front()`和`back`

## 区别辨析

### `begin()`与`end()`

- `begin()`将返回容器的首位元素的迭代器，当容器为空时，作用等同于end
- `end()`将返回容器末尾后面一个位置的迭代器

:::tip[Tips:]

- 返回的是`迭代器`
- 当容器为空时依然可以正常使用

:::

### `cbegin()`与`cend()`

这二者是**C++11**引入的函数，基本功能与`begin()`和`end()`并无差别，不过这二者返回的是`常量位置迭代器`，不允许通过迭代器修改容器内元素，避免意外修改

### `front()`与`back()`

- `front()`返回的是容器**第一个位置**的**引用**
- `back()`返回的是容器**最后一个位置**的**引用**

:::tip[Tips:]

- 返回的是`引用`
- 当容器为空时使用，会造成未定义行为(UH)

:::

## 总结

| 函数    | 返回类型 | 作用           | 适用容器                          | 空容器行为      |
| ------- | -------- | -------------- | --------------------------------- | --------------- |
| cbegin() | const_iterator | 获取指向第一个元素的迭代器 | 所有STL容器                       | 与 cend() 相等   |
| cend()   | const_iterator | 获取指向尾后位置的迭代器   | 所有STL容器                       |  获取指向尾后位置的迭代器  |
| begin() | iterator | 获取指向第一个元素的迭代器 | 所有STL容器                       | 与 end() 相等   |
| end()   | iterator | 获取指向尾后位置的迭代器   | 所有STL容器                       | 获取指向尾后位置的迭代器 |
| front() | 元素引用 | 直接访问首元素 | vector, deque, list, forward_list | 未定义行为      |
| back()  | 元素引用 | 直接访问尾元素 | vector, deque, list               | 未定义行为      |
