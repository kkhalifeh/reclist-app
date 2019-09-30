import React from 'react'
import { Container, Button, Content, Form, Item, Input, Label, Text } from 'native-base';

const AuthScreen = (props) => {
  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              id="email"
              keyboardType='email-address'
              autoCapitalize="none"
              onChangeText={() => {
                console.log('value changed')
              }}
              initialValue="" />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Content style={{ paddingTop: 20 }}>
            <Button block>
              <Text>Login</Text>
            </Button>
          </Content>
        </Form>
      </Content>
    </Container>
  )
}


export default AuthScreen
