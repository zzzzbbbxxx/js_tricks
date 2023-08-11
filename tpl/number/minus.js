
// 0.3 - 0.2 != 0.1
/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {number}
 */
function minus(a, b) {
  const strA = String(a)
  const strB = String(b)

  const dotPositionA = strA.indexOf('.')
  const dotPositionB = strB.indexOf('.')

  const maxFloatLength = Math.max(dotPositionA > 0 ? dotPositionA : 0, dotPositionB > 0 ? dotPositionB : 0)

  return (a * Math.pow(10, maxFloatLength) - b * Math.pow(10, maxFloatLength)) / Math.pow(10, maxFloatLength)

}

// 示例
console.log(`.3 - .2 = ${.3 - .2} ;`, minus(.3, .2));
console.log(`1.6 - 1.4 = ${ 1.6 - 1.4 } ;`,minus(1.6, 1.4));
console.log(`1.00006 - 1.00004 = ${ 1.6 - 1.4 } ;`,minus(1.6, 1.4));

