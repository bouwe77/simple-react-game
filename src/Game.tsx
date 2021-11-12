import * as React from 'react'
import { useGameLoop } from './lib/GameLoopContext'

type Props = { children: React.ReactNode }

const Game = ({ children }: Props) => {
  const { subscribe, unsubscribe } = useGameLoop()

  React.useEffect(() => {
    // const helloWorldId = subscribe(() => {
    //   console.log('hello world')
    // })

    return () => {
      // unsubscribe(helloWorldId)
    }
  }, [subscribe, unsubscribe])

  return (
    <>
      <h1>My Game</h1>
      {children}
    </>
  )
}

export default Game
