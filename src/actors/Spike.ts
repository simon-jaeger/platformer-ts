import {CollisionStartEvent, CollisionType} from "excalibur"
import _Actor from "/src/actors/_Actor"
import Palette from "/src/services/Palette"
import Player from "/src/actors/Player"
import * as u from "/src/utils/functions"

export default class Spike extends _Actor {
  onInitialize() {
    this.body.collider.type = CollisionType.Fixed
    this.color = Palette.red["400"]
  }

  async onCollision(e: CollisionStartEvent) {
    if (e.other !== Player.self) return
    Player.self.kill()
    await u.sleep(500)
    Player.self.respawn()
  }
}

