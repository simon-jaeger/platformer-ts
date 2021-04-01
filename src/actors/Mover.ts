import _Actor from "/src/actors/_Actor"
import {CollisionType, Physics, PreCollisionEvent, Side} from "excalibur"
import Assets from "/src/services/Assets"
import Player from "/src/actors/Player"

export default class Mover extends _Actor {
  distance!: number
  hasPlayer = false

  onInitialize() {
    this.body.collider.type = CollisionType.Fixed
    // language=file-reference
    this.addDrawing(Assets.getTx("/assets/Mover.png"))

    this.actions
      .moveBy(0, this.distance * t1, t2)
      .moveBy(0, -this.distance * t1, t2)
      .repeatForever()
  }

  preCollison(e: PreCollisionEvent) {
    // make player stick to mover on contact
    if (e.other !== Player.self) return
    if (Player.self.vel.y < 0) return
    if (e.side !== Side.Top) return
    this.hasPlayer = true
  }

  onPreUpdate() {
    if (this.hasPlayer) {
      Player.self.pos.y = this.pos.y - this.height / 2 - Player.self.height / 2
    }
  }

  onPostUpdate() {
    this.hasPlayer = false
  }
}

