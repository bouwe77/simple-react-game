import * as React from 'react'

const useAnimationFrame = (callback: (deltaTime: number) => void) => {
  const requestRef = React.useRef<number>()
  const previousTimeRef = React.useRef<number>()

  const animate = React.useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current
        callback(deltaTime)
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    },
    [callback],
  )

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (!requestRef.current) return
      cancelAnimationFrame(requestRef.current)
    }
  }, [animate])
}

export default useAnimationFrame
