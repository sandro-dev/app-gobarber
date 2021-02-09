import React from 'react';
import { View, Text, StatusBar } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor="#312e38" />
      <View style={
        {
          flex: 1,
          alignItems: 'center',
          backgroundColor:"#312e38",
          justifyContent: 'center'}
        }>
        <Text style={{color: '#fff'}}>App Gobarber</Text>
      </View>
    </>
  );
};

export default App;
