---
title: Margin

nav:
  title: 样式
  path: /styles

group:
  title: 基础样式
  path: /base
---

# Margin

```less
/// 定义margin 2-40 (2的倍数)
.loop(@i) when(@i <= 40) {
  .m@{i} {
    margin: @i + @zero_px;
  }
  .ml@{i} {
    margin-left: @i + @zero_px;
  }
  .mt@{i} {
    margin-top: @i + @zero_px;
  }
  .mr@{i} {
    margin-right: @i + @zero_px;
  }
  .mb@{i} {
    margin-bottom: @i + @zero_px;
  }
  .loop((@i + 2));
}

.loop(2);

.m-auto {
  margin: auto;
}

.m-0-auto {
  margin: 0 auto;
}

.m-auto-0 {
  margin: auto 0;
}

.ml100 {
  margin-left: 100px;
}
```
