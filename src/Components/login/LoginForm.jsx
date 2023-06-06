import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Foms/Button';
import Input from '../Foms/Input';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usúario" id="username" />
        <Input label="Senha" id="password" type="password" />
        <Button text="Enviar" />
      </form>
      <Link to="criar">Cadastros</Link>
    </div>
  );
};

export default LoginForm;
