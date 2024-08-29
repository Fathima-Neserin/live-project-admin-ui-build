import React from 'react'
import NotificationsList from '../../components/notification/NotificationsList'
import NotificationForm from '../../components/notification/NotificationForm'

function NotificationScreen() {
  return (
    <div className="relative w-[90%] h-full mx-auto">
        <NotificationsList />
        <NotificationForm />
    </div>
  )
}

export default NotificationScreen