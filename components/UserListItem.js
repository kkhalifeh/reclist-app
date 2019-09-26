import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Spinner } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler'

const UserListItem = (props) => {

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectCity} >
        <View>
          <View>
            <ImageBackground source={{ uri: props.image }} style={styles.bImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1} >
                  {props.city}, {props.country}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row'
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    // overflow: 'hidden'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'

  },
  bImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 20,
    color: 'white'
  }

})

export default UserListItem
