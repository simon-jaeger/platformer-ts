import {Label, SpriteFont} from "excalibur"
import Assets from "/src/services/Assets"

export default class Text extends Label {
  constructor(config) {
    const characters = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`
    const font = new SpriteFont(Assets.getTx('/assets/Text.png'), characters , false, 16, 6, 8, 12)
    super(config.text.text, config.x, config.y, '', font)
    this.fontSize = 12
  }
}

