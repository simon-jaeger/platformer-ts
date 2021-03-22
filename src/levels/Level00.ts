import {Scene} from "excalibur"
import Block from "/src/actors/Block"
import Player from "/src/actors/Player"
import Spike from "/src/actors/Spike"

export default class Level00 extends Scene {
  onInitialize() {
    const actors = [
      new Player({x: t8, y: t20, width: t2, height: t2}),

      new Block({x: 0, y: 0, width: t1, height: t23}),
      new Block({x: 0, y: t23, width: t32, height: t1}),
      new Block({x: t31, y: 0, width: t1, height: t23}),

      new Block({x: t1, y: t20, width: t4, height: t3}),
      new Block({x: t10, y: t18, width: t4, height: t1}),

      new Block({x: t26, y: t21, width: t1, height: t2}),
      new Spike({x: t27, y: t22, width: t4, height: t1}),
    ]
    actors.forEach(x => this.add(x))
  }
}
