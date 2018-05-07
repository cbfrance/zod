import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components'; 

const StyledView = styled.View`
  background-color: yellow;
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledView style={styles.container}>
        <Text>Hello!</Text>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
