import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { login } from '../../redux/actions/authAction';
import { authActions } from '../../redux/slices/authSlice';
import { LoginProps } from '../types/drawer/login';
import Button from '../Ui/Button';

const Login = ({ onToogle }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const { isError, token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      alert(isError.message);
      dispatch(authActions.clearError());
    }
  }, [isError, alert, token]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  };
  return (
    <>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="login"
        autoComplete="off"
      >
        <div className="login__textfield">
          <label htmlFor="email">Email*</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login__textfield">
          <label htmlFor="password">Password*</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit">Login</Button>
      </form>

      <section className="forgot-password">
        <span onClick={onToogle}>RETURN TO STORE</span>
        <p>Forgot Password?</p>
      </section>
    </>
  );
};

export default Login;
