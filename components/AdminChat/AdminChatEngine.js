import React from 'react'
import AdminMessages from './AdminMessages'

function AdminChatEngine({talk}) {
  return (
    <div className='h-full  flex flex-col-reverse overflow-y-scroll overflow-hidden bg-white'>
        <AdminMessages talk={talk} />
    </div>
  )
}

export default AdminChatEngine