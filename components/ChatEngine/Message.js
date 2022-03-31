import React from 'react'
import { useUser } from '../../utils/useUser';

function Message({item}) {
    const { signUp, user, signIn } = useUser();
    console.log(item.text)
  return (
    <div>{item.text}</div>
  )
}

export default Message