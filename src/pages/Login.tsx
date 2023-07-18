import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail } from '../redux/actions';

function Login() {
  const initialState = {
    email: '',
    password: '',
  };
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const valid = () => {
    const { email, password } = form;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return !(emailRegex.test(email) && password.length >= 6);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setEmail(form.email));
    navigate('/carteira');
  };

  return (
    <div>
      <form onSubmit={ (event) => handleSubmit(event) }>
        <div>
          <label htmlFor="email-input"> Insira o seu e-mail </label>
          <input
            data-testid="email-input"
            type="email"
            id="email-input"
            name="email"
            onChange={ (event) => handleChange(event) }
          />
        </div>
        <div>
          <label htmlFor="password-input"> Insira a sua senha</label>
          <input
            data-testid="password-input"
            type="password"
            id="password-input"
            name="password"
            onChange={ (event) => handleChange(event) }
          />
        </div>
        <button disabled={ valid() } type="submit"> Entrar </button>
      </form>
    </div>

  );
}

export default Login;
