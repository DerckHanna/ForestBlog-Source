---
title: 在文章中嵌入视频
published: 2023-08-01
description: 本文演示如何在博客文章中嵌入视频。
tags: [示例, 视频]
category: 示例
draft: false
---

只需从 YouTube 或其他平台复制嵌入代码，然后粘贴到 markdown 文件中即可。

```yaml
---
title: 在文章中嵌入视频
published: 2023-10-19
// ...
---

<iframe 
    width="100%" 
    height="468" 
    src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" 
    title="YouTube 视频播放器" 
    frameborder="0" 
    allowfullscreen>
</iframe>

# 属性有下面这些
# <iframe 
#   width="100%" 
#   height="400" 
#   src="https://www.youtube.com/embed/视频ID" 
#   title="视频标题"
#   frameborder="0" 
#   allowfullscreen>
# </iframe>
```

## YouTube

<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Bilibili

<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV1fK4y1s7Qf&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
