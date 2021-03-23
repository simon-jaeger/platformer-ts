import _Level from "/src/levels/_Level"
import map from "/src/levels/level00.zmap.json"
import Disappearer from "/src/actors/Disappearer"

export default class Level00 extends _Level {
  protected map = map

  onInitialize() {
    super.onInitialize()
    // this.add(new Disappearer({x: t4, y: t4, width: t6, height: t6}))
  }
}
