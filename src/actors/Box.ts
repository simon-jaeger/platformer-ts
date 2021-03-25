import _Actor from "/src/actors/_Actor"
import {CollisionType} from "excalibur"
import Assets from "/src/services/Assets"

export default class Box extends _Actor {
  onInitialize() {
    this.body.collider.type = CollisionType.Active
    // language=file-reference
    this.addDrawing(Assets.getTx('/assets/Box.png'))
  }
}

