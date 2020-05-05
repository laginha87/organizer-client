import { useEffect } from 'react'

export const useKeyDown = (targetKey, callback) => {
  // Add event listeners
  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === targetKey) {
        callback()
      }
    }
    window.addEventListener('keydown', downHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
}
