import React, { Component, Fragment } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { Card, Badge, Block, Text } from '../components';
import { theme, mocks } from '../constants';
import SearchableDropdown from 'react-native-searchable-dropdown';

const { width } = Dimensions.get('window');


export default class Brows extends Component {
  state = {
    location: null,
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
              
            Acerca de Ti Mismo
      </Text>
  
            <Input placeholder="Primer Nombre" />
            <Input placeholder="Apellido" />
            <Input placeholder="Años" />
            <Input placeholder="Ciudad" />
            <Input placeholder="Estado" />
            <Input placeholder="Pasatiempo favorito" />


          </ScrollView>

          <Button
            onPress={() => navigation.navigate('Browse')}
            title='Enviar'
            color="#663399"
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
