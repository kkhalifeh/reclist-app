import React, { useState, useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Container, Content, Button, Text } from 'native-base';



const HomeScreen = (props) => {

  const [cityData, setcityData] = useState([])

  const { navigation } = props;

  console.log(cityData)



  useEffect(() => {
    const fetchData = async () => {
      const cities = await (
        fetch("http://localhost:5000/locations_filter")
          .then(res => console.log(res.json()))
      )
    }
    fetchData()
  }, [])

  console.log(cityData)

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
