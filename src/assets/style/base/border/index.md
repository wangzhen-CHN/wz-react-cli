---
title: Border

nav:
  title: 样式
  path: /styles

group:
  title: 基础样式
  path: /base
---

```less
.bc_primary {
  border-color: @c_primary;
}

.bc_success {
  border-color: @c_success;
}

.bc_info {
  border-color: @c_info;
}

.bc_error {
  border-color: @c_error;
}

.bc_warning {
  border-color: @c_warning;
}

.bc_level_1 {
  border-color: @c_line_1;
}

.bc_level_2 {
  border-color: @c_line_2;
}

.bc_level_3 {
  border-color: @c_line_3;
}

.bw1 {
  border-width: 1px;
}

.blw1 {
  border-left-width: 1px;
}

.brw1 {
  border-right-width: 1px;
}

.bbw1 {
  border-bottom-width: 1px;
}

.btw1 {
  border-top-width: 1px;
}

@border-style: solid, dashed, dotted, double;

.make-border-classes(@i: length(@border-style)) when (@i > 0) {
  .make-border-classes(@i - 1);
  @style: extract(@border-style, @i);

  .bs_@{style} {
    border-style: @style;
  }
}

.make-border-classes();
```
