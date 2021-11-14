# simple-react-game

This is a POC for a library to create simple React games.

At the moment it only contains a game loop, which you can use in your own code to define which callback(s) should be called by the game loop.

# Usage

First, add a game loop to your app:

```js
const App = () => {
  return (
    <GameLoop>
      <Game />
    </GameLoop>
  )
}
```

The `Game` component contains logic how to move an object:

```js
const Game = () => {
  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)

  const moveRect = () => {
    setX((prevX) => prevX + 1)
    setY((prevY) => prevY + 1)
  }

  // Tell the game loop to call the moveRect function on every tick.
  useGameLoopCallback(moveRect)

  return (
    <svg width="100" height="100">
      <rect x={x} y={y} width="10" height="10" />
    </svg>
  )
}
```

# Inspiration

The talks by Johannes Stein about game development in React (for example [this one](https://www.youtube.com/watch?v=jtvRRd9cTTI) or [this one](https://www.youtube.com/watch?v=JaK-RrYPPRk&t=662s)), where he uses the [react-game-kit](https://github.com/FormidableLabs/react-game-kit) library by Ken Wheeler.
