import _Actor from "/src/actors/_Actor"
import {CollisionType} from "excalibur"
import Palette from "/src/services/Palette"

export default class Block extends _Actor {
  onInitialize() {
    this.body.collider.type = CollisionType.Fixed
    // this.color = Palette.gray["800"]
  }
}

