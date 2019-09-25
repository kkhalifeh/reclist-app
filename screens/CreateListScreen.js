import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CreateListScreen = (props) => {
  return (
    <View>
      <Text>Create List</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

CreateListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Create List',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Search"
          iconName="ios-save"
          onPress={() => {
            console.log('here')
          }}
        />
      </HeaderButtons>
    )
  };
}

export default CreateListScreen
