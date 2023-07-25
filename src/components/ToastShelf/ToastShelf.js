import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'
import { ToastContext } from '../ToastProvider/ToastProvider'

function ToastShelf() {
  const { messages, dismissMessage } = React.useContext(ToastContext)

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {messages.map((toastMessage) => (
        <li key={toastMessage.id} className={styles.toastWrapper}>
          <Toast
            variant={toastMessage.variant}
            handleDismiss={() => dismissMessage(toastMessage.id)}
          >
            {toastMessage.message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
