import _Level from "/src/levels/_Level"
import map from "/src/levels/level00.zmap.json"
import Text from "/src/actors/Text"
import Assets from "/src/services/Assets"

export default class Level00 extends _Level {
  protected map = map

  onInitialize() {
    super.onInitialize()
    // language=file-reference
    this.add(Assets.getMap('/src/levels/level00.zmap.json'))
  }
}
