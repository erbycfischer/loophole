import React,{ Component,Fragment } from 'react'
import { Dimensions, Image, StyleSheet,ScrollView,View,TouchableOpacity,} from 'react-native'
import { Button } from 'react-native-elements';
import { Text } from '../components';

const { width } = Dimensions.get('window');



class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PickerValue: '',
      location: null
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
      { enableHighAccuracy: true,timeout: 24,maximumAge: 14 }
    );
  }

  render() {      
  
    const { navigation } = this.props
    return (
      <View style={styles.container} >
        <Text style={styles.text} >Getting Started</Text>
        
        
          <Text style={{fontSize:18, textAlign:'center'}}>Select a Language</Text> 
          
         
          <Button style={{marginTop:14,}} title='English' value='English' onPress={()=>navigation.navigate('English')} />
          <Button style={{marginTop:14,}} title='Español' value='Spanish' onPress={()=>navigation.navigate('Spanish')}/>
          <Button style={{marginTop:14,}} title='Français' value='French' onPress={()=>navigation.navigate('French')}/>
          <Button style={{marginTop:14,}} title='Português' value='Portugese' onPress={()=>navigation.navigate('Spanish')}/>
          <Button style={{marginTop:14,}} title='عربى' value='Arabic' onPress={()=>navigation.navigate('Spanish')}/>
          <Button style={{marginTop:14,}} title='русский' value='Russian' onPress={()=>navigation.navigate('Spanish')}/>
          <Button style={{marginTop:14,}} title='हिंदी' value='Hindi' onPress={()=>navigation.navigate('Spanish')} />
          <Button style={{marginTop:14,}} title='普通话' value='Mandarin' onPress={()=>navigation.navigate('Spanish')}/>
        
        </View>

      
    )
  }
}




const styles = StyleSheet.create({

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 34
  },
  container:{
    width:'100%',
    height:'100%',
    flex:1,
    backgroundColor:'#afeeee',
    textAlign:'center',
    fontSize:24,
    flexDirection:"column",
    justifyContent:'space-between',
    position : 'absolute',
    top : 4,
    left : 1, 
    right : 1,
    bottom : 2,
  },
  button:{
    backgroundColor:'#663399'
  }
})
export default Browse