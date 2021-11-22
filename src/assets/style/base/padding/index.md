---
title: Padding

nav:
  title: 样式
  path: /styles

group:
  title: 基础样式
  path: /base
---

# Padding

```less
// 定义padding 2-40 (2的倍数)
.loop(@i) when(@i <= 40) {
  .p@{i} {
    padding: @i + @zero_px;
  }
  .pl@{i} {
    padding-left: @i + @zero_px;
  }
  .pt@{i} {
    padding-top: @i + @zero_px;
  }
  .pr@{i} {
    padding-right: @i + @zero_px;
  }
  .pb@{i} {
    padding-bottom: @i + @zero_px;
  }
  .loop((@i + 2));
}

.loop(2);
```
