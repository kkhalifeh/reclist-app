import React, { useState, useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Container, Content, Spinner, Text } from 'native-base';
import axios from 'axios';
import CityList from '../components/CityList';


const HomeScreen = (props) => {

  const [cityData, setcityData] = useState([])

  const { navigation } = props;

  useEffect(() => {
    const fetchData = async () => {
      axios.get('https://9e2f7bfe.ngrok.io/locations',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
          },
        })
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

  // console.log(cityData)

  return (
    <Container>
      <Content>
        {cityData.length > 0 ? <CityList listData={cityData} navigation={props.navigation} /> : <Spinner color='black' />}
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
