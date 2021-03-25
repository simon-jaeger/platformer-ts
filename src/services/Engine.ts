import {Color, Engine as Excalibur, Physics} from "excalibur"
import Palette from "/src/services/Palette"

const Engine = new Excalibur({
  resolution: {width: t32, height: t24},
  viewport: {width: t32 * 2, height: t24 * 2},
  backgroundColor: Color.fromHex('#3E415F'),
  // backgroundColor: Palette.gray["900"],
  suppressHiDPIScaling: true,
  antialiasing: false,
})
Physics.acc.setTo(0, t48)

export default Engine
