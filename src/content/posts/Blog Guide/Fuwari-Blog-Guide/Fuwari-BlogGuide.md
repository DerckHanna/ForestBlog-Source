---
title: Fuwari 简单使用指南
published: 2024-04-01
description: "如何使用此博客模板"
image: "./Fuwari-BlogGuide.jpeg"
tags: []
category: Blog Guide
draft: false
---

> 封面图片来源: [来源](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

此博客模板基于 [Astro](https://astro.build/) 构建。本指南未提及的内容，您可以在 [Astro 文档](https://docs.astro.build/) 中找到答案。

## 文章的前言部分 (Front-matter)

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我的新 Astro 博客的第一篇文章
image: ./cover.jpg
tags: [示例标签1, 示例标签2]
category: 前端开发
draft: false
---
```

| Attribute     | Description                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 文章的标题                                                                                                                                                                                      |
| `published`   | 文章发布的日期                                                                                                                                                                            |
| `description` | 文章的简短描述。在首页显示                                                                                                                                                   |
| `image`       | The cover image path of the post.<br/>1. Start with `http://` or `https://`: Use web image<br/>2. Start with `/`: For image in `public` dir<br/>3. With none of the prefixes: Relative to the markdown file |
| `tags`        | 	文章的标签                                                                                                                                                                                       |
| `category`    | 文章的分类                                                                                                                                                                                   |
| `draft`        | 如果文章仍是草稿，则不会显示                                                                                                                                                    |

```md
image翻译:
文章的封面图片路径。
1. 以 http:// 或 https:// 开头：使用网络图片
2. 以 / 开头：位于 public 目录中的图片
3. 无前缀：相对于 markdown 文件的路径
```

## 文章文件的存放位置



您的文章文件应放置在`src/content/posts/` 目录下。您也可以创建子目录来更好地组织文章和资源文件。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
