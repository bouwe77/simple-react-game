import { useEffect, useRef, useState } from 'react'
import { useGameLoop } from './GameLoopContext'
import config from './config'

const speed = 3

const Thingy = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const subscriptionRef = useRef<number | null>(null)

  const { subscribe, unsubscribe } = useGameLoop()

  useEffect(() => {
    const subscriptionId = subscribe(() => {
      setX((x) => x + speed)
      setY((y) => y + speed)
    })
    subscriptionRef.current = subscriptionId

    return () => {
      if (!subscriptionRef?.current) return
      unsubscribe(subscriptionRef.current)
    }
  }, [subscribe, unsubscribe])

  return <rect x={x} y={y} width="10" height="10" />
}

export default Thingy
