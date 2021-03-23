import {Engine as Excalibur, Physics} from "excalibur"
import Palette from "/src/services/Palette"

const Engine = new Excalibur({
  resolution: {width: t32, height: t24},
  viewport: {width: t32 * 2, height: t24 * 2},
  backgroundColor: Palette.gray["900"],
})
Physics.acc.setTo(0, t48)

export default Engine
