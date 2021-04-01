import _Actor from "/src/actors/_Actor"
import {CollisionStartEvent, CollisionType} from "excalibur"
import Player from "/src/actors/Player"
import Assets from "/src/services/Assets"
import Curtain from "/src/services/Curtain"

export default class Coin extends _Actor {
  static totalCoins = 0

  onInitialize() {
    this.body.collider.type = CollisionType.Passive
    // language=file-reference
    this.addDrawing(Assets.getTx('/assets/Coin.png'))
    Coin.totalCoins++
  }

  onCollision(e: CollisionStartEvent) {
    if (e.other !== Player.self) return
    this.kill()
    Coin.totalCoins--
    if (Coin.totalCoins <= 0) {
      console.log('next')
      Curtain.nextLevel()
    }
  }
}

