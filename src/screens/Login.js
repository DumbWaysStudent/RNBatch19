import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';

const Login = (props) => {
  return (
    <Container style={styles.container}>
      <Content>
        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
          <Button onPress={() => props.navigation.navigate("HomeTabs")} full primary style={styles.button}>
            <Text> Login </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  button: {
    marginTop: 20
  }
})