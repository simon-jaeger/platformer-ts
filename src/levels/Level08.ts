import _Level from "/src/levels/_Level"
import map from "/src/levels/level08.zmap.json"
import Assets from "/src/services/Assets"

export default class Level08 extends _Level {
  protected map = map

  onInitialize() {
    super.onInitialize()
    // language=file-reference
    this.add(Assets.getMap('/src/levels/level08.zmap.json'))
  }
}
