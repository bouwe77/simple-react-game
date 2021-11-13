import * as React from 'react'

const milliSeconds = 1000

const useAnimationFrame = (callback: (deltaTime: number) => void) => {
  const requestRef = React.useRef<number>()
  const previousTimeRef = React.useRef<number>()

  const animate = React.useCallback(
    (now: number) => {
      if (
        !previousTimeRef.current ||
        now - previousTimeRef.current >= milliSeconds
      ) {
        previousTimeRef.current = now
        callback(previousTimeRef.current)
      }
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
