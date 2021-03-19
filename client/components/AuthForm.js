import React, { useState} from 'react'

/**
 * COMPONENT
 */
export default  ({ displayName, handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const _handleSubmit = (ev)=> {
    ev.preventDefault();
    handleSubmit({ username, password });
  };

  return (
    <div>
      <form onSubmit={ _handleSubmit }>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" onChange={ (ev)=> setUsername(ev.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={ ev => setPassword(ev.target.value )}/>
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
      </form>
    </div>
  );
}
