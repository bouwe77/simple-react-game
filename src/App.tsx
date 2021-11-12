import { GameLoopProvider as GameLoop } from './lib/GameLoopContext'
import Game from './Game'
import Thingy from './Thingy'
import config from './config'

export default function App() {
  return (
    <GameLoop>
      <Game>
        <svg
          width={config.width}
          height={config.height}
          style={{ border: '1px solid red' }}
        >
          <Thingy />
        </svg>
      </Game>
    </GameLoop>
  )
}
