export function hexToHsl(hexColor) {
  // 去除可能存在的 # 符号
  hexColor = hexColor.replace('#', '');

  // 将十六进制颜色值转换为 RGB 值
  const r = parseInt(hexColor.substring(0, 2), 16) / 255;
  const g = parseInt(hexColor.substring(2, 4), 16) / 255;
  const b = parseInt(hexColor.substring(4, 6), 16) / 255;

  // 找出最大值和最小值
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // 计算亮度（Lightness）
  const l = (max + min) / 2;

  // 计算饱和度（Saturation）
  let s = 0;
  let delta;
  if (max !== min) {
    delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  }

  // 计算色相（Hue）
  let h = 0;
  if (max !== min) {
    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h /= 6;
  }

  // 将 HSL 值转换为百分比形式
  const hslColor = `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;

  return hslColor;
}


// 示例用法
/* const hexColor = '#336699';
const result = hexToHsl(hexColor);
console.log(result); // 输出: hsl(210, 50%, 40%) */
