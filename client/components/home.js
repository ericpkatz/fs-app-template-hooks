import React from 'react'

export default  ({ auth }) => {
  const {username} = auth 
  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  )
};

