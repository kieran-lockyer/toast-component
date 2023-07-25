import React from 'react'

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        callback()
      }
    }
    window.addEventListener('keydown', handleKeydown)

    return () => window.removeEventListener('keydown', handleKeydown)
  }, [callback])
}
