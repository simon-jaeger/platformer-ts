import {Scene} from "excalibur"
import Player from "/src/actors/Player"
import Block from "/src/actors/Block"
import Spike from "/src/actors/Spike"
import mapStructure from "/src/levels/level00.zmap.json"

export default abstract class _Level extends Scene {
  protected actorTypes = {Player, Block, Spike}
  protected abstract map: typeof mapStructure

  onInitialize() {
    this.map.layers[0].objects.forEach(obj => {
      obj.x += obj.width / 2 // shift pos to center
      obj.y += obj.height / 2 //shift pos to center
      this.add(new this.actorTypes[obj.type](obj))
    })
  }
}
