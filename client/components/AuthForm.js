import React, { useState} from 'react'

export default  ({ displayName, handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const _handleSubmit = async(ev)=> {
    ev.preventDefault();
    try {
      await handleSubmit({ username, password });
    }
    catch(ex){
      console.log(ex.response.data);
      setError(ex.response.data);
    }
  };

  return (
    <div>
      <div>
        { error }
      </div>
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
