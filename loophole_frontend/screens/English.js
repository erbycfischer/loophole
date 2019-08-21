import React, { Component, Fragment } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { Card, Badge, Block, Text } from '../components';
import { theme, mocks } from '../constants';
import SearchableDropdown from 'react-native-searchable-dropdown';

const { width } = Dimensions.get('window');


export default class Brows extends Component {
  constructor(props){
    super(props);
    state = {
      location: null,
    }
  }

  componentDidMount() {
    this.setState({ categories: this.props.categories });
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  render(){
    const { navigation } = this.props
  return (
    
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingVertical: theme.sizes.base * 2 }}
    >
      <Block>

        <View>

          <ScrollView style={styles.container}>
            <Text style={{ fontSize: 40, fontWeight: "bold" , textAlign:'center'}}>
              
            About Yourself
      </Text>
  
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Age" />
            <Input placeholder="City" />
            <Input placeholder="State" />
            <Input placeholder="Profession/Field" />


          </ScrollView>
       
    

          <Button
  onPress={() => this.props.navigation.navigate('Chat')}
  title='Submit'

/>

        </View>
      </Block>
    </ScrollView>
  )
}


}
const styles = StyleSheet.create({

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  }
})