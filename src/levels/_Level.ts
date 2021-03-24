import {Scene} from "excalibur"
import Player from "/src/actors/Player"
import Block from "/src/actors/Block"
import Spike from "/src/actors/Spike"
import Text from "/src/actors/Text"
import mapStructure from "/src/levels/level00.zmap.json"

export default abstract class _Level extends Scene {
  protected actorTypes = {Player, Block, Spike, Text}
  protected abstract map: typeof mapStructure

  onInitialize() {
    this.map.layers[0].objects.forEach(obj => {
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
