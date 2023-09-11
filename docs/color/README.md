# 颜色

## 十六进制色值转Hsl色值

@[code](../../tpl/color/hexToHsl.js)

#### 用法示例

```javascript
const hexColor = '#336699';
const result = hexToHsl(hexColor);
console.log(result); // 输出: hsl(210, 50%, 40%) */
```

***

## Hsl色值转十六进制色值

@[code](../../tpl/color/hslToHex.js)

#### 用法示例

```javascript
const hslColor = 'hsl(210, 50%, 40%)';
const result = hslToHex(hslColor);
console.log(result); // 输出: #336699
```

***


## darken && lighten

@[code](../../tpl/color/changeLightness.js)

#### 用法示例

```javascript
    console.log(lighten('#336699', 20));  // #6699cc
    console.log(darken('#336699', 20));   // #19334d
```
