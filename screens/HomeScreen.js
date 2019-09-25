import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Container, Header, Content, Button, Text } from 'native-base';

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <Container>
      <Content>
        <Button block dark
          onPress={() => {
            navigation.navigate({
              routeName: 'CitySelect',
              params: {
                cityId: '55',
                cityName: 'London'
              }
            })
          }}>
          <Text>Click Me!</Text>
        </Button>
      </Content>
    </Container>
  )
}

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Reclist',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            console.log('here')
          }}
        />
      </HeaderButtons>
    )
  };
}

export default HomeScreen
