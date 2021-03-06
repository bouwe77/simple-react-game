import * as React from 'react'
import config from './config'
import useGameLoopCallback from './lib/useGameLoopCallback'

const speed = 1

const Circle = () => {
  const [x, setX] = React.useState(30)
  const [y, setY] = React.useState(80)

  const move = () => {
    setX((prevX) => {
      if (prevX > config.width - 5) return prevX
      return prevX + speed
    })
    setY((prevY) => {
      if (prevY > config.height - 5) return prevY
      return prevY + speed
    })
  }

  useGameLoopCallback(move)

  React.useEffect(() => {
    console.log({ x, y })
  }, [x, y])

  return <circle cx={x} cy={y} r="5" fill="green" />
}

export default Circle
