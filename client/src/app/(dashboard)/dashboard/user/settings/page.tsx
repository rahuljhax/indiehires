import React from 'react'
import NotificationPreferences from './components/NotificationPreferences/NotificationPreferences'

const page = () => {
  return (
    <section>
      <div className="title">Notification Preferences</div>
      <div className="subTitle">Control how and when you receive notifications</div>
      <NotificationPreferences />
    </section>
  )
}

export default page