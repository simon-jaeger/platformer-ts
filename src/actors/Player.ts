import {
  CollisionType,
  Input,
  PostCollisionEvent,
  Side,
  SpriteSheet,
  Vector,
} from "excalibur"
import Engine from "/src/services/Engine"
import _Actor from "/src/actors/_Actor"
import Assets from "/src/services/Assets"
import Disappearer from "/src/actors/Disappearer"
import * as u from "/src/utils/functions"

enum Animation { Idle, Run, Jump, Fall, Death }

export default class Player extends _Actor {
  static self: Player
  private movePower = t8
  private jumpPower = t18
  private forward = true
  private running = false
  private midAir = false
  private airJumpUsed = false

  onInitialize() {
    Player.self = this
    this.body.collider.type = CollisionType.Active
    this.body.collider.offset = new Vector(0, 3)

    // language=file-reference
    const sprites = new SpriteSheet(Assets.getTx("/assets/Player.png"), 12, 3, t2, t2)
    this.addDrawing(Animation.Idle, sprites.getAnimationBetween(Engine, 0, 11, 50))
    this.addDrawing(Animation.Run, sprites.getAnimationBetween(Engine, 12, 24, 50))
    this.addDrawing(Animation.Jump, sprites.getSprite(24))
    this.addDrawing(Animation.Fall, sprites.getSprite(25))
    {
      const death = sprites.getAnimationBetween(Engine, 36, 42, 50)
      death.loop = false
      this.addDrawing(Animation.Death, death)
    }
  }

  onPreUpdate() {
    this.vel.x = 0
    this.running = false
    if (Engine.input.keyboard.isHeld(Input.Keys.Left)) {
      this.vel.x = -this.movePower
      this.forward = false
      this.running = true
    }
    if (Engine.input.keyboard.isHeld(Input.Keys.Right)) {
      this.vel.x = this.movePower
      this.forward = true
      this.running = true
    }
    if (Engine.input.keyboard.wasPressed(Input.Keys.Space) && !this.midAir) {
      this.vel.y = -this.jumpPower
    }
    if (Engine.input.keyboard.wasPressed(Input.Keys.Space) && this.midAir && !this.airJumpUsed) {
      this.vel.y = -this.jumpPower
      this.airJumpUsed = true
    }
  }

  onPostUpdate() {
    this.midAir = true // mid-air if not overwritten by whileCollision()
  }

  postCollison(e: PostCollisionEvent) {
    // touching ground --> reset jump related properties
    if (e.other.body.collider.type !== CollisionType.Passive && e.side === Side.Top) {
      this.midAir = false
      this.airJumpUsed = false
    }
  }

  async onPostKill() {
    this.vel.x = 0
    this.vel.y = 0
    this.scene.add(new Disappearer(this.pos.x, this.pos.y))
    await u.sleep(500)
    this.respawn()
  }

  onPreDraw() {
    if (this.running) {
      this.setDrawing(Animation.Run)
    } else {
      this.setDrawing(Animation.Idle)
    }
    if (this.midAir) {
      this.setDrawing(this.vel.y < 0 ? Animation.Jump : Animation.Fall)
    }
    this.currentDrawing.flipHorizontal = !this.forward
  }
}

