import {CollisionType, Input, PostCollisionEvent, Side} from "excalibur"
import Engine from "/src/services/Engine"
import _Actor from "/src/actors/_Actor"
import Palette from "/src/services/Palette"

export default class Player extends _Actor {
  static self: Player
  private movePower = t8
  private jumpPower = t20
  private midAir = false

  onInitialize() {
    Player.self = this
    this.body.collider.type = CollisionType.Active
    this.color = Palette.blue["300"]
  }

  onPreUpdate() {
    this.vel.x = 0
    if (Engine.input.keyboard.isHeld(Input.Keys.Left)) {
      this.vel.x = -this.movePower
    }
    if (Engine.input.keyboard.isHeld(Input.Keys.Right)) {
      this.vel.x = this.movePower
    }
    if (Engine.input.keyboard.wasPressed(Input.Keys.Space) && !this.midAir) {
      this.vel.y = -this.jumpPower
    }
  }

  onPostUpdate() {
    this.midAir = true // mid-air if not overwritten by whileCollision()
  }

  whileCollision(e: PostCollisionEvent) {
    if (e.other.body.collider.type !== CollisionType.Passive && e.side === Side.Top) this.midAir = false
  }
}

