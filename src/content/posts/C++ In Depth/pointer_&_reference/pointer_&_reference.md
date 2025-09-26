---
title: C++|指针_and_引用
published: 2025-09-22
description: '快速明晰指针和引用，顺便区分(&)(*)(->)'
image: "./pointer_&_reference.png"
tags: []
category: 'C++ In Depth'
draft: false 
---

## 指针与引用

### 引用

引用不是变量，不占用储存空间，由编译器实现。引用是给变量取的别名，它必须初始化且初始化之后无法改变其指定的对象

```cpp
int a = 100;
int& ref = a; // 一个名为ref的int类型的引用的声明，必须初始化，它现在是a的别名
```

### 指针

指针是一种变量,也是用于储存值的，而指针所储存的为地址，指针需要指明指针类型，用于表明其指向变量的类型

```cpp
int* ptr; // 一个名为ptr的int类型指针的声明
```

### 空指针

空指针有很两种，`NULL`(`0`、`(char*) 0`)、`nullptr`

#### `NULL`空指针

NULL是一种定义宏，通常就是`0`(或者是(void*)0,但是这种情况极少，一般是C语言的用法，取决于编译器)

```cpp
#define NULL 0
// 或
#define NULL (void*) 0
```

:::tip[宏]
宏可以简单理解为“取别名”,它在编译前的预处理中被执行，将别名全部替换为指定文本
:::

- `0`

NULL的本质是`(int) 0`，是整型而不是一个指针，这实际上就会导致一些问题

NULL重载函数二义性

```cpp
#include<iostream>
using namespace std;

void function(int input)
{
    cout << "The input is of int type" << endl;
    return;
}

void function(int* input)
{
    cout << "The input is of int* type" << endl;
    return;
}

int main()
{
    function(NULL);  // 从从 NULL 转换为非指针类型“int”[-Wconversion-null]
    return 0;    
}
```

那么其实你可以猜测会输出什么——输出了：“The input is of int type”

- `(void* 0)`

显式定义了指针，但是依然能导致重载错误等错误，不再讨论

- `nullptr`

C++11后引入的特性,现代空指针。

`nullptr`的类型是`std::nullptr_t`,并不是定义宏，这个类型可以隐式转换为任何其他指针类型

在C++11之后，任何的空指针都应该这样写，现代而安全

```cpp
#include<iostream>
using namespace std;

void function(int input)
{
    cout << "The input is of int type" << endl;
    return;
}

void function(int* input)
{
    cout << "The input is of int* type" << endl;
    return;
}

int main()
{
    function(nullptr);
    return 0;    
}
```

现在将输出:“The input is of int* type”

## 指针与引用相关的运算符

### 运算符**&**：`&`

取地址运算符

作用：顾名思义，获取变量在内存中的地址

```cpp
int a = 100;
int* p = &a; // 现在指针p中储存的是a的地址,&a的作用就是获取a的地址
```

### 运算符**Star**: `*`

解引用运算符

作用：通过指针访问或修改该指针所指向的内存地址中存储的值

```cpp
int n = 100;
int* ptr = &n; // 声明指针ptr
*ptr = 10;     // 通过解引用指针修改n,现在n = 10
```

### 运算符**arrows**：`->`

用于通过指针访问结构体或类成员。它等价于指针先解引用，再加上`.`

为什么需要此运算符？

- 因为解引用运算符`*`的优先级比点号运算符`.`高，如果要用它们，那么会写为`(*pointer).member`,不够简洁

```cpp
#include<iostream>
using namespace std;

struct Node
{
    int x;
    int y;
}node;

int main()
{
    node.x = 1;
    node.y = 2;    
    Node* ptr = &node;
    
    cout << ptr->x << " " << ptr->y << endl;
    return 0;    
}
```
