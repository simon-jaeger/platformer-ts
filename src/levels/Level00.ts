import _Level from "/src/levels/_Level"
import map from "/src/levels/level00.zmap.json"
import Text from "/src/actors/Text"

export default class Level00 extends _Level {
  protected map = map

  onInitialize() {
    super.onInitialize()
    // this.add(new Text('some text'))
  }
}
