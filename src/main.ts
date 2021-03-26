import Engine from "/src/services/Engine"
import Level00 from "/src/levels/Level00"
import Level01 from "/src/levels/Level01"
import Assets from "/src/services/Assets"
import Level02 from "/src/levels/Level02"
import Level03 from "/src/levels/Level03"
import Level04 from "/src/levels/Level04"
import Level05 from "/src/levels/Level05"
import Level06 from "/src/levels/Level06"
import Level07 from "/src/levels/Level07"
import Level08 from "/src/levels/Level08"

main()

async function main() {
  Assets.load()
  await Engine.start(Assets.loader)
  Engine.addScene(Level00.name, new Level00(Engine))
  Engine.addScene(Level01.name, new Level01(Engine))
  Engine.addScene(Level02.name, new Level02(Engine))
  Engine.addScene(Level03.name, new Level03(Engine))
  Engine.addScene(Level04.name, new Level04(Engine))
  Engine.addScene(Level05.name, new Level05(Engine))
  Engine.addScene(Level06.name, new Level06(Engine))
  Engine.addScene(Level07.name, new Level07(Engine))
  Engine.addScene(Level08.name, new Level08(Engine))
  Engine.goToScene(Level02.name)
}
