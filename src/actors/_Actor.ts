import {
  Actor,
  CollisionStartEvent,
  PostCollisionEvent,
  PreCollisionEvent,
  Vector,
} from "excalibur"
import Engine from "/src/services/Engine"

export default abstract class _Actor extends Actor {
  private readonly initialPos!: Vector

  constructor(config) {
    super({
      x: config.x,
      y: config.y,
      width: config.width,
      height: config.height,
    })
    if (config.properties) config.properties.forEach(x => this[x.name] = x.value)
    this.initialPos = this.pos.clone()
    this.on("collisionstart", this.onCollision.bind(this))
    this.on("precollision", this.preCollison.bind(this))
    this.on("postcollision", this.postCollison.bind(this))
  }

  respawn() {
    this.pos = this.initialPos
    Engine.add(this)
  }

  onCollision(e: CollisionStartEvent) {
  }

  preCollison(e: PreCollisionEvent) {
  }

  postCollison(e: PostCollisionEvent) {
  }
}
