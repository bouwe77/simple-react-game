import * as React from 'react'
import { GameLoopProvider as GameLoop, useGameLoop } from './GameLoopContext'

export default function App() {
  return (
    <GameLoop>
      <Game />
    </GameLoop>
  )
}

const Game = () => {
  const [helloWorldId, setHelloWorldId] = React.useState(null)
  const { subscribe, unsubscribe } = useGameLoop()

  React.useEffect(() => {
    const helloWorldId = subscribe(() => {
      console.log('hello world')
    })

    setHelloWorldId(helloWorldId)

    return () => {
      unsubscribe(helloWorldId)
    }
  }, [subscribe, unsubscribe])

  return (
    <>
      The game... <button onClick={() => unsubscribe(helloWorldId)}>weg</button>
    </>
  )
}
