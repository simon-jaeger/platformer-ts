import _Actor from "/src/actors/_Actor"
import {CollisionStartEvent, CollisionType} from "excalibur"
import Player from "/src/actors/Player"
import Assets from "/src/services/Assets"

export default class Coin extends _Actor {
  onInitialize() {
    this.body.collider.type = CollisionType.Passive
    // language=file-reference
    this.addDrawing(Assets.getTx('/assets/Coin.png'))
  }

  onCollision(e: CollisionStartEvent) {
    if (e.other === Player.self) {
      this.kill()
    }
  }
}

