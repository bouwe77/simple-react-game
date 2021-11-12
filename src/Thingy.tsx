import * as React from 'react'
import config from './config'
import useGameLoopCallback from './useGameLoopCallback'

const speed = 1

const Thingy = () => {
  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)

  const yo = () => {
    setX((prevX) => {
      if (prevX > config.width - 10) return prevX
      return prevX + speed
    })
    setY((prevY) => {
      if (prevY > config.height - 10) return prevY
      return prevY + speed
    })
  }

  useGameLoopCallback(yo)

  React.useEffect(() => {
    console.log({ x, y })
  }, [x, y])

  return <rect x={x} y={y} width="10" height="10" />
}

export default Thingy
