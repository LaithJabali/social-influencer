import Style from './Signs.module.css';

export const formItems = [
  {
    name: 'email',
    rules: [
      { required: true, message: 'Please input your email!' },
      { type: 'email', message: 'Please enter a valid email!' },
    ],
    placeholder: 'Email Address',
  },
  {
    name: 'password',
    rules: [{ required: true, message: 'Please input your password!' }],
    placeholder: 'Password',
  },
];

export const buttons = [
  {
    url: '/BecomeAnInfluencer',
    content: "Let's Go",
    buttonType: 'primary',
    buttonShape: 'round',
  },
];

export const ForgotLink = [
  {
    LinkClass: Style.forgotPass,
    LinkTitle: 'Forgot password?',
    To: './ForgotPassword',
  },
];

export const SignUp = [
  {
    LinkClass: Style.myLink,
    LinkTitle: 'Sign Up',
    To: './signup',
  },
];
