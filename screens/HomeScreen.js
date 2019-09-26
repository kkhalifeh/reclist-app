import React, { useState, useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Container, Content, Button, Text } from 'native-base';
import axios from 'axios';
import CityList from '../components/CityList';


const HomeScreen = (props) => {

  const [cityData, setcityData] = useState([])

  const { navigation } = props;

  useEffect(() => {
    const fetchData = async () => {
      axios.get('http://localhost:4000/locations')
        .then(response => {
          console.log('useEffect data loaded')
          setcityData(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    }
    fetchData()
  }, [])
  // This needs to run once the home page loads, and only get the cities that have lists on them

  console.log(cityData)

  return (
    <Container>
      <Content>
        {cityData.length > 0 ? <CityList listData={cityData} navigation={props.navigation} /> : <Text>Loading</Text>}
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
            console.log('drawer')
          }}
        />
      </HeaderButtons>
    )
  };
}

export default HomeScreen
