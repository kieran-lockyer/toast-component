import React from 'react'
import { useEscapeKey } from '../../hooks/useEscapeKey'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [messages, setMessages] = React.useState([])

  const addMessage = (message, variant) => {
    const nextMessages = [...messages]
    const newMessage = {
      id: crypto.randomUUID(),
      message,
      variant,
    }
    nextMessages.push(newMessage)
    setMessages(nextMessages)
  }

  const dismissMessage = (id) => {
    const nextMessages = [...messages.filter((message) => message.id !== id)]
    setMessages(nextMessages)
  }

  const dismissAllMessages = () => {
    setMessages([])
  }

  useEscapeKey(dismissAllMessages)

  return (
    <ToastContext.Provider
      value={{
        messages,
        addMessage,
        dismissMessage,
        dismissAllMessages,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
