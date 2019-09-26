import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import UserListItem from './UserListItem'

const CityList = (props) => {


  const renderItem = (itemData) => {
    return (
      <UserListItem
        onSelectCity={() => {
          props.navigation.navigate({
            routeName: 'CitySelect',
            params: {
              cityName: itemData.item.city
            }
          })
        }}
        city={itemData.item.city}
        country={itemData.item.country}
        id={itemData.item.id}
        image={itemData.item.image} />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        style={{ width: '100%' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})


export default CityList
