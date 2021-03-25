import {Loader, SpriteFont, Texture, TileMap} from "excalibur"
import {TiledResource} from "@excaliburjs/excalibur-tiled"

const textureFiles = Object.keys(import.meta.glob("/assets/*"))
const mapFiles = import.meta.globEager("/src/levels/*.zmap.json")

const Assets = new class {
  loader!: Loader
  private textures = new Map<string, Texture>()
  private maps = new Map<string, TiledResource>()

  load() {
    console.log(mapFiles)
    Object.values(textureFiles).forEach((x) => {
      this.textures.set(x, new Texture(x))
    })
    Object.keys(mapFiles).forEach((x) => {
      this.maps.set(x, new TiledResource(x))
    })

    this.loader = new Loader([...this.textures.values(), ...this.maps.values()])
    this.loader.backgroundColor = '#000000'
    this.loader.logo = ''
    this.loader.suppressPlayButton = true
  }

  getTx(path: string): Texture {
    return this.textures.get(path)!
  }

  getMap(path: string): TileMap {
    return this.maps.get(path)!.getTileMap()
  }
}

export default Assets
