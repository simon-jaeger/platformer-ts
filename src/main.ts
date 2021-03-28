import Engine from "/src/services/Engine"
import Assets from "/src/services/Assets"
import Curtain from "/src/services/Curtain"

main()

async function main() {
  Assets.load()
  Curtain.init()
  await Engine.start(Assets.loader)
  await Curtain.goToLevel(1, false)
}
