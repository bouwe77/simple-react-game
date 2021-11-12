import * as React from 'react'
import { useGameLoop } from './GameLoopContext'

const useGameLoopCallback = (callback: () => void) => {
  const { subscribe, unsubscribe } = useGameLoop()
  const subscriptionRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const subscriptionId = subscribe(callback)
    subscriptionRef.current = subscriptionId

    return () => {
      if (!subscriptionRef?.current) return
      unsubscribe(subscriptionRef.current)
    }
  }, [subscribe, unsubscribe, callback])
}

export default useGameLoopCallback
