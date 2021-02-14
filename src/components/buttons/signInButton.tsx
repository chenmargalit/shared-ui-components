import { FC } from 'react';
import IButton from '../../interfaces/iButton';

const SignInButton: FC<IButton> = ({ text }) => {
  return <button>{text}</button>;
};

export default SignInButton;
