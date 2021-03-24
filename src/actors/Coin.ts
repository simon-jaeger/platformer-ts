import _Actor from "/src/actors/_Actor"
import {CollisionStartEvent, CollisionType} from "excalibur"
import Player from "/src/actors/Player"
import Palette from "/src/services/Palette"

export default class Coin extends _Actor {
  onInitialize() {
    this.body.collider.type = CollisionType.Passive
    this.color = Palette.yellow["400"]
    this.width = t1*0.75
    this.height = t1*0.75
  }

  onCollision(e: CollisionStartEvent) {
    if (e.other === Player.self) {
      this.kill()
    }
  }
}

