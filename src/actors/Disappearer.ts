import {Animation, CollisionType, SpriteSheet} from "excalibur"
import Engine from "/src/services/Engine"
import Assets from "/src/services/Assets"
import _Actor from "/src/actors/_Actor"

export default class Disappearer extends _Actor {
  animation!: Animation

  constructor(x: number, y: number) {
    super({x, y, width: t6, height: t6})
  }

  onInitialize() {
    this.body.collider.type = CollisionType.PreventCollision

    // language=file-reference
    this.animation = (new SpriteSheet(Assets.getTx("/assets/Disappearer.png"), 5, 1, t6, t6))
      .getAnimationBetween(Engine, 0, 5, 50)
    this.animation.loop = false
    this.addDrawing(null, this.animation)
  }

  onPostUpdate() {
    if (this.animation.isDone()) this.kill()
  }
}

