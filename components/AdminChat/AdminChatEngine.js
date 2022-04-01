import React from 'react'
import AdminMessages from './AdminMessages'

function AdminChatEngine({talk, end}) {
  return (
    <div className='h-full  flex flex-col-reverse overflow-y-scroll overflow-hidden bg-white'>
        <AdminMessages end={end} talk={talk} />
    </div>
  )
}

export default AdminChatEngine