import {hexToHsl} from "./hexToHsl";
import {hslToHex} from "./hslToHex";


function lighten(color, amount) {
  return changeLightness(color, amount)
}

function darken(color, amount) {
  return changeLightness(color, -amount)
}

function changeLightness(color, amount) {
  const hslColor = hexToHsl(color)

  const hexReg = /(hsl\(\d+,\s*\d+%,\s*)(\d+)(%\))/

  let i, lighteness

  if (i = hexReg.exec(hslColor)) {

    lighteness = parseFloat(i[2])

    lighteness += amount

    lighteness = lighteness > 100 ? 100 : lighteness < 0 ? 0 : lighteness
  }

  const newHslColor = hslColor.replace(hexReg, `$1${lighteness}$3`)
  console.log(`--- before: ${hslColor}, --- after: ${newHslColor}`)

  return hslToHex(hslColor.replace(hexReg, `$1${lighteness}$3`));
}

