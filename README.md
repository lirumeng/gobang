## UI篇

### 棋盘的画法
- canvas绘制直线

```javascript
context.moveTo();
context.lineTo();
context.stroke();
```

- 设置画笔颜色

```javascript
context.strokeStyle
```

### 棋子的画法
- canvas画圆

```javascript
context.arc()
```

- 填充渐变色

```javascript
var gradient = context.createRadialGradient(rx1,ry1,r,rx2,ry2,r2);
gradient.addColorStop(0, '#0a0a0a');
gradient.addColorStop(1, '#636766');
```

### 五子棋交互逻辑处理