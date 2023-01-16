import React from 'react';
import { SignupFormProps } from '../types/drawer/signupForm';
import Button from '../Ui/Button';

const SignUp = ({ SignUp }: SignupFormProps) => {
  function signupHandler() {
    SignUp('signup');
  }
  return (
    <div className="signup">
      <h5 className="signup-heading">SIGN UP</h5>
      <p>Enjoy the benefits of registering:</p>
      <ul className="signup__signup-list">
        <li className="signup__signup-list__item">
          Order: view Order History, track and manage purchases and returns
        </li>
        <li className="signup__signup-list__item">
          Address Book and Card Wallet: safely store delivery and payment
          details for faster checkout
        </li>
        <li className="signup__signup-list__item">
          Saved for later: wish list your preferred items and track their
          availability
        </li>
      </ul>
      <Button type="button" handlesignIn={signupHandler}>
        SIGN UP NOW
      </Button>
    </div>
  );
};

export default SignUp;
