---
title: Float

nav:
  title: 样式
  path: /styles

group:
  title: 基础样式
  path: /base
---

# Float

```less
.fl {
  float: left;
}

.fr {
  float: right;
}

.clearfix {
  display: inline-table;
  *zoom: 1;

  ::after {
    display: block;
    clear: both;
    height: 0;
    font-size: 0;
    visibility: hidden;
    content: ' ';
  }
}
```
