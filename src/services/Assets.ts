import {Loader, Texture} from "excalibur"

const textureFiles = Object.keys(import.meta.glob("/assets/*"))

const Assets = new class {
  loader!: Loader
  private textures = new Map<string, Texture>()

  load() {
    Object.values(textureFiles).forEach((x) => {
      this.textures.set(x, new Texture(x))
    })
    this.loader = new Loader([...this.textures.values()])
    this.loader.suppressPlayButton = true
  }

  getTx(path: string): Texture {
    return this.textures.get(path)!
  }
}

export default Assets
