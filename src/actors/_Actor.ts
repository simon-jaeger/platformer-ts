import {Actor, CollisionStartEvent, PostCollisionEvent, Vector} from "excalibur"
import Engine from "/src/services/Engine"

export default abstract class _Actor extends Actor {
  private readonly initialPos!: Vector

  constructor(config) {
    super({
      x: config.x + config.width / 2,
      y: config.y + config.height / 2,
      width: config.width,
      height: config.height,
    })
    if (config.props) Object.assign(this, config.props)
    this.initialPos = this.pos.clone()
    this.on("collisionstart", this.onCollision.bind(this))
    this.on("postcollision", this.whileCollision.bind(this))
  }

  respawn() {
    this.pos = this.initialPos
    Engine.add(this)
  }

  onCollision(e: CollisionStartEvent) {
  }

  whileCollision(e: PostCollisionEvent) {
  }
}
