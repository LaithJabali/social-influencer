import Style from './Signs.module.css';

export const formItems = [
  {
    name: 'email',
    rules: [
      { required: true, message: 'Please input your email!' },
      { type: 'email', message: 'Please enter a valid email!' },
    ],
    placeholder: 'Email Address',
    type: 'email'
  },
  {
    name: 'password',
    rules: [{ required: true, message: 'Please input your password!' }],
    placeholder: 'Password',
    type: 'password',
  },
];

export const formItemsSignUp = [
  {
    name: 'username',
    rules: [{ required: true, message: 'Please input your Name!' }],
    placeholder: 'User Name',
    type: 'text',
  },
  {
    name: 'email',
    rules: [
      { required: true, message: 'Please input your email!' },
      { type: 'email', message: 'Please enter a valid email!' },
    ],
    placeholder: 'Email Address',
    type: 'email'
  },
  {
    name: 'password',
    rules: [{ required: true, message: 'Please input your password!' }],
    placeholder: 'Password',
    type: 'password',
  },
  {
    name: 'phoneNumber',
    rules: [
      { required: true, message: 'Please input your phone number!' },
      { type: 'number', message: 'Please enter a valid phone number!' },
    ],
    placeholder: 'Phone Number',
    type: 'tel',
  },
  {
    name: 'dateOfBirth',
    rules: [{ required: true, message: 'Please input your date of birth!' }],
    placeholder: 'Date of Birth',
    type: 'date',
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

export const Rules = [
  {
    LinkClass: Style.forgotPass,
    LinkTitle: 'Usage rules',
    To: './Rules',
  },
];

export const SignUp = [
  {
    LinkClass: Style.myLink,
    LinkTitle: 'Sign Up',
    To: '../SignUp',
  },
];

export const SignIn = [
  {
    LinkClass: Style.myLink,
    LinkTitle: 'Sign In',
    To: '../SignIn',
  },
];
