import {Engine as Excalibur, Physics} from "excalibur"
import Palette from "/src/services/Palette"

const Engine = new Excalibur({
  viewport: {width: t32, height: t24},
  backgroundColor: Palette.gray["900"],
})
Physics.acc.setTo(0, t48)

export default Engine
