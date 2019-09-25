import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const UserListScreen = (props) => {

  const title = `${props.navigation.getParam('userName')}'s ${props.navigation.getParam('cityName')} List`

  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

UserListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('userName'),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Pin"
          iconName="ios-add-circle"
          onPress={() => {
            console.log('here')
          }}
        />
      </HeaderButtons>
    )
  };
}

export default UserListScreen
