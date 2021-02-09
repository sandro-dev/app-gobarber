import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import { Container, Text } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logoImg} />
    <Text>SignIn page</Text>
  </Container>
);

export default SignIn;
