import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePass = event => {
    setPassword(event.target.value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your username and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="Email"
          handleChange={handleChangeEmail}
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label="Password"
          handleChange={handleChangePass}
        />

        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};
export default SignIn;
