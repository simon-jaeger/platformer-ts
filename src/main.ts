import Engine from "/src/services/Engine"
import Level00 from "/src/levels/Level00"
import Level01 from "/src/levels/Level01"
import Assets from "/src/services/Assets"

main()

async function main() {
  Assets.load()
  await Engine.start(Assets.loader)
  Engine.addScene(Level00.name, new Level00(Engine))
  Engine.addScene(Level01.name, new Level01(Engine))
  Engine.goToScene(Level00.name)
  // Engine.isDebug = true
}
