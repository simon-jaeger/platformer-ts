import Engine from "/src/services/Engine"
import Level00 from "/src/levels/Level00"

main()

async function main() {
  await Engine.start()
  Engine.addScene(Level00.name, new Level00(Engine))
  Engine.goToScene(Level00.name)
  Engine.isDebug = true
}
