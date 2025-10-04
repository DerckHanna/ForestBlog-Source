---
title: LeetcodeProblem-11
published: 2025-09-12
description: '力扣第11题个人题解'
image: "./LeetcodeLogo.png"
tags: ['Lc']
category: 'Leetcode'
draft: false 
---

> 封面：Leetcode Logo

---

## 11. 盛最多水的容器

### 题目描述

给定一个长度为 `n` 的整数数组 `height` 。有 `n` 条垂线，第 `i` 条线的两个端点是 `(i, 0)` 和 `(i, height[i])` 。

找出其中的两条线，使得它们与 `x` 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

**说明：** 你不能倾斜容器。

### 示例

#### 示例 1

![示例图](./question_11.jpg)

**输入：** `[1,8,6,2,5,4,8,3,7]`

**输出：** `49`

**解释：** 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

#### 示例 2

**输入：** `height = [1,1]`

**输出：** `1`

### 提示

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

---

### 1. 暴力想法

- 遍历`i`作左边界的全部情况
- 同时遍历`j`作右边界的全部情况

时间复杂度达到$O(n)$，用时太多，必须考虑其他方法

### 2. 双指针

由题目，得到计算储水量的公式

- 设该区间左边界下标为`a`，右为`b`
- 那么对应高度值各自为`H(a)`,`H(b)`
- 总储水量设定特定的`a`,`b`的对应值为`f`

$f = min(H(a), H(b)) * (b - a)$

设定两个下标`a`,`b`最开始位于左右边界，考虑移动两个下标以获取答案

答案要求得`f_Max`，思考如何移动才可能获得最大的答案

假设我们每次移动H较大的下标

```cpp
    if H(a) > H(b) && move(a)-> :
    {        if(a1增大)
        {
            assert(f减小);
        }else
        {
            assert(f减小)
        }
    }
    else if H(a) < H(b) && <-move(b):
    {
        同理
    }
```

由此我们可以看出，想使得`f`增大，只可能移动`H`较小的对应坐标

最终得双指针解题思路:

设定`a`,`b`每次移动对应H值较小的哪一个，维护一个`ans`值获取移动过程中产生的可能最大值

#### 双指针·代码

```cpp
class Solution {
public:
    int maxArea(vector<int>& height) {
        int a = 0;
        int b = height.size() - 1;
        int ans = 0;
        while(a < b)
        {
            ans = max(ans,(b - a) * min(height[a], height[b]));
            if(height[a] > height[b])
            {
                // a更高，移动b
                b--;          
            }else
            {
                a++;          
            }
        }
        return ans;
    }
};
```

### 3. 动态规划

- 同理设定`a`,`b`,`f`
我们先朴素的考虑分解问题，尝试dp

- 设定`dp[i][j]`为:以`i`为左边界，`j`为右边界所能得到的最大储水值

- 状态转移方程:$$dp[i][j] = max(dp[i+1][j], dp[i][j-1], f)$$

- 边界条件: `if(i == j)return 0;`

- 考虑优化：不进行滚动数组优化

可以发现该做法的时间复杂度极高，实际上比暴力更慢，因为不仅要算出全部的`i`,`j`区间的对应储水值，还会产生重复计算

#### 灵光一现的优化(贪心)

实际上和双指针同理发现了，如果移动H较大下标，那么无法得到可能的最大值，于是修改了状态转移方程

$$if (i > j) : dp[i][j] = max(f, dp[i][j-1]$$

$$if (i < j) : dp[i][j] = max(f, dp[i+1][j]$$

实际实现使用递归记录左右边界即可避免开空间复杂度为平方级的数组

#### DP·代码

```cpp
class Solution {
private:
    int ans = 0;
public:
    int GetAns(vector<int> &height, int x, int y)
    {
        if(x == y)
        {
            return 0;
        }

        ans = max(ans,  min(height[x], height[y]) * (y - x));
        if(height[x] > height[y])
        {
            y--;
        }else
        {
            x++;
        }
        
        ans = max(ans, GetAns(height, x, y));
        return ans;
    }
    int maxArea(vector<int>& height) {
        return GetAns(height, 0, height.size() - 1);
    }
};
```
