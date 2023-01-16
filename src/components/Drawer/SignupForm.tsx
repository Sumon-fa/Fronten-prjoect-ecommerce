import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { createUser } from '../../redux/actions/userActions';
import { userActions } from '../../redux/slices/userSlice';
import Button from '../Ui/Button';

const SignupForm = ({ hideSignup }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);
  const { isError, isLoading, isSuccess } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (isError) {
      alert(isError.error.map((err: any) => err + '\n'));
      dispatch(userActions.clearError());
    }
    if (isSuccess) {
      alert('User Created Successfully.');
      dispatch(userActions.clearSuccess());
    }
  }, [isError, isSuccess]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };

    dispatch(createUser({ user, avatar }));
    /* if (isError && isError.error) {
      return alert(isError.error + ', ' + isError.statusCode);
    } else*/
  };
  return (
    <>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="signup-form"
        autoComplete="off"
      >
        <div className="signup-form__textfield">
          <label htmlFor="name">NAME*</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="signup-form__textfield">
          <label htmlFor="email">EMAIL*</label>
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
        <div className="signup-form__textfield">
          <label htmlFor="password">PASSWORD*</label>
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
        <div className="signup-form__textfield">
          <label htmlFor="password">AVATAR*</label>
          <br />
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="iamges/*"
            onChange={(e) => onChange(e)}
          />
        </div>

        <Button type="submit">SIGN UP NOW</Button>
      </form>
      <div className="return-login">
        <span onClick={hideSignup}>RETURN TO LOGIN</span>
      </div>
    </>
  );
};

export default SignupForm;
