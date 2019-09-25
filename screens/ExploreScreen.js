import React from 'react'
import { Container, Content, Button, Text } from 'native-base';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const ExploreScreen = (props) => {
  return (
    <Container>
      <Content>
        <Button block dark
          onPress={() => {
            props.navigation.navigate({
              routeName: 'UserList',
              params: {
                userId: '55',
                listId: '0101',
                cityName: 'Beirut',
                userName: 'Tareq'
              }
            })
          }}
        >
          <Text>List</Text>
        </Button>
      </Content>
    </Container>
  )
}

ExploreScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Explore',
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

export default ExploreScreen
