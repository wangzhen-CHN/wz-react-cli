---
title: Flex

nav:
  title: 样式
  path: /styles

group:
  title: 基础样式
  path: /base
---

# Flex

flex 布局

```less
// 缩写声明 fx:flex v:vertical（垂直方向） h:horizontal（水平方向）
.fx {
  display: flex;
}

.fx-inline {
  display: inline-flex;
}

.fx-flex1 {
  flex: 1;
}

.fx-row {
  .fx;
  flex-direction: row;
}

.fx-row-reverse {
  .fx;
  flex-direction: row-reverse;
}

.fx-col {
  .fx;
  flex-direction: column;
}

.fx-col-reverse {
  .fx;
  flex-direction: column-reverse;
}

.fx-wrap {
  .fx;
  flex-wrap: wrap;
}

.fx-nowrap {
  .fx;
  flex-wrap: nowrap;
}

.fx-wrap-reverse {
  .fx;
  flex-wrap: wrap-reverse;
}

.fx-h-center {
  .fx;
  justify-content: center;
}

.fx-h-start {
  justify-content: flex-start;
}

.fx-h-end {
  .fx;
  justify-content: flex-end;
}

.fx-h-between {
  .fx;
  justify-content: space-between;
}

.fx-h-around {
  .fx;
  justify-content: space-around;
}

.fx-h-evenly {
  .fx;
  justify-content: space-evenly;
}

.fx-h-initial {
  .fx;
  justify-content: initial;
}

.fx-v-center {
  .fx;
  align-items: center;
}

.fx-v-start {
  .fx;
  align-items: flex-start;
}

.fx-v-end {
  .fx;
  align-items: flex-end;
}

.fx-v-stretch {
  .fx;
  align-items: stretch;
}

.fx-v-baseline {
  .fx;
  align-items: baseline;
}

.fx-v-initial {
  .fx;
  align-items: initial;
}

.fx-center {
  .fx;
  align-items: center;
  justify-content: center;
}

// 垂直居中 水平两端对齐
.fx-v-center-h-between {
  .fx;
  align-items: center;
  justify-content: space-between;
}
```
