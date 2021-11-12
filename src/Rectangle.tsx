import * as React from 'react'
import config from './config'
import useGameLoopCallback from './lib/useGameLoopCallback'

const speed = 1

const Rectangle = () => {
  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)

  const move = () => {
    setX((prevX) => {
      if (prevX > config.width - 10) return prevX
      return prevX + speed
    })
    setY((prevY) => {
      if (prevY > config.height - 10) return prevY
      return prevY + speed
    })
  }

  useGameLoopCallback(move)

  React.useEffect(() => {
    console.log({ x, y })
  }, [x, y])

  return <rect x={x} y={y} width="10" height="10" fill="blue" />
}

export default Rectangle
