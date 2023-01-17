import React, { Fragment, useState } from 'react';
import Login from './Login';
import { DrawerProps } from '../types/drawer/drayer';
import Modal from '../Ui/Modal';
import SignUp from './SignUp';
import SignupForm from './SignupForm';

const Drawer = ({ onToogle }: DrawerProps) => {
  const [isSignup, setIsSignup] = useState('login');
  const hideSignup = () => {
    setIsSignup('login');
  };
  return (
    <Modal onToogle={onToogle}>
      <h5 className="modal__child__heading">
        {' '}
        {isSignup === 'signup' ? 'SIGN UP' : 'MY ACCOUNT'}{' '}
      </h5>
      {isSignup === 'login' && (
        <Fragment>
          <Login onToogle={onToogle} />
          <hr />
          <SignUp SignUp={setIsSignup} />
        </Fragment>
      )}
      {isSignup === 'signup' && <SignupForm hideSignup={hideSignup} />}
    </Modal>
  );
};

export default Drawer;
/*<Login onClose={onClose} />
      <hr />
      <SignUp />*/
