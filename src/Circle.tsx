import * as React from 'react'
import config from './config'
import useGameLoopCallback from './lib/useGameLoopCallback'

const speed = 1

const Circle = () => {
  const [x, setX] = React.useState(30)
  const [y, setY] = React.useState(80)

  const yo = () => {
    setX((prevX) => {
      if (prevX > config.width - 5) return prevX
      return prevX + speed
    })
    setY((prevY) => {
      if (prevY > config.height - 5) return prevY
      return prevY + speed
    })
  }

  useGameLoopCallback(yo)

  React.useEffect(() => {
    console.log({ x, y })
  }, [x, y])

  return <circle cx={x} cy={y} radius="5" />
}

export default Circle
