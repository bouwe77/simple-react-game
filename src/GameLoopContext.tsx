import * as React from 'react'

const GameLoopContext = React.createContext()

function GameLoopProvider({ children }) {
  const callbacksRef = React.useRef([])

  const subscribe = React.useCallback((callback) => {
    const id = callbacksRef.current.push(callback)
    console.log('subscribed id ' + id)
    return id
  }, [])

  const unsubscribe = React.useCallback((id) => {
    callbacksRef.current.splice(id - 1, 1)
    console.log('unsubscribed id ' + id)
  }, [])

  const value = { subscribe, unsubscribe }

  return (
    <GameLoopContext.Provider value={value}>
      {children}
    </GameLoopContext.Provider>
  )
}

function useGameLoop() {
  const context = React.useContext(GameLoopContext)
  if (context === undefined) {
    throw new Error('useGameLoop must be used within a GameLoopProvider')
  }
  return context
}

export { GameLoopProvider, useGameLoop }
