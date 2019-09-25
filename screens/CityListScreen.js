import React from 'react'
import { Container, Content, Button, Text } from 'native-base';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CityListScreen = (props) => {
  const { navigation } = props;
  return (
    <Container>
      <Content>
        <Button block dark
          onPress={() => {
            navigation.navigate({
              routeName: 'UserList',
              params: {
                userId: '55',
                listId: '0101',
                cityName: 'London',
                userName: 'Khaled'
              }
            })
          }}
        >
          <Text>{props.navigation.getParam('cityName')} List</Text>
        </Button>
      </Content>
    </Container>
  )
}

CityListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('cityName'),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Search"
          iconName="ios-search"
          onPress={() => {
            console.log('here')
          }}
        />
      </HeaderButtons>
    )
  };
}

export default CityListScreen
