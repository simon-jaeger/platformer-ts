import Engine from "/src/services/Engine"
import * as u from "/src/utils/functions"

const levels = Object.values(import.meta.globEager("/src/levels/Level*.ts")).map(x => x.default)

const Curtain = new class {
  currentLevel = 0
  canvas!: HTMLCanvasElement

  init() {
    levels.forEach((level, i) => {
      Engine.addScene("" + i, new level(Engine))
    })
    this.canvas = document.querySelector("canvas")!
  }

  async goToLevel(n: number, transition=true) {
    if (transition) {
      this.canvas.style.opacity = "0"
      await u.sleep(1000)
    }
    Engine.goToScene("" + n)
    this.currentLevel = n
    if (transition) {
      this.canvas.style.opacity = "1"
      await u.sleep(1000)
    }
  }

  async nextLevel() {
    await this.goToLevel(++this.currentLevel)
  }
}

export default Curtain
