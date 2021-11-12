import { GameLoopProvider as GameLoop } from './lib/GameLoopContext'
import Game from './Game'
import Rectangle from './Rectangle'
import Circle from './Circle'
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
          <Rectangle />
          <Circle />
        </svg>
      </Game>
    </GameLoop>
  )
}
