import {Scene} from "excalibur"
import mapStructure from "/src/levels/level00.zmap.json"
import Player from "/src/actors/Player"
import Block from "/src/actors/Block"
import Spike from "/src/actors/Spike"
import Text from "/src/actors/Text"
import Coin from "/src/actors/Coin"

export default abstract class _Level extends Scene {
  protected actorTypes = {Player, Block, Spike, Text, Coin}
  protected abstract map: typeof mapStructure

  onInitialize() {
    this.map.layers[1].objects!.forEach(obj => {
      // fix tiled position
      if (obj.type === Text.name) {
        obj.y += t1
      } else {
        obj.x += obj.width / 2
        obj.y += obj.height / 2
      }
      this.add(new this.actorTypes[obj.type](obj))
    })
  }
}
