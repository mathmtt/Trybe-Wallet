import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserAction } from '../redux/actions';

const initialStateLogin = {
  email: '',
  password: '',
};

function Login() {
  const [inputLogin, setInputLogin] = useState(initialStateLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLogin({ ...inputLogin, [e.target.name]: e.target.value });
  };
  const handleIsValid = () => {
    const REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return REGEX.test(inputLogin.email) && inputLogin.password.length >= 6;
  };

  const handleSubmitLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(UserAction(inputLogin));
    navigate('/carteira');
  };

  return (
    <div>
      <form onSubmit={ handleSubmitLogin }>
        <input
          type="text"
          placeholder="E-mail"
          value={ inputLogin.email }
          name="email"
          onChange={ handleLogin }
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          value={ inputLogin.password }
          placeholder="Password"
          onChange={ handleLogin }
          data-testid="password-input"
        />
        <button type="submit" disabled={ !handleIsValid() }>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
