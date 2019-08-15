import React, { Component } from 'react'
import { Animated, Dimensions, List, Image, StyleSheet, ListView, ScrollView, TouchableOpacity } from 'react-native'

import { LinearGradient } from 'expo';

import { Button, Input, Block } from '../components';
import { theme, mocks } from '../constants';

// const { width, height } = Dimensions.get('window');


import { View, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Language Here"
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default Explore;


// class Explore extends Component {
//     constructor() {
//       super();
//       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//       this.state = {
//         dataSource: ds.cloneWithRows(['User image', 'row 2', 'row 3', 'row 4']),
//       };
//     }
  
//     render() {
//       return (
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text>{rowData}</Text>}
//         />
//       );
//     }
//   }
// this.state = {
//   loading: false,      
//   data: [],      
//   error: null,    
// };

// this.arrayholder = [];

// makeRemoteRequest = () => {    
//   const socket = io('http://localhost:8080');
//   this.setState({ loading: true });
  
//   fetch(url)      
//     .then(res => res.json())      
//     .then(res => {        
//       this.setState({          
//         data: res.results,          
//         error: res.error || null,          
//         loading: false,        
//       });        
      
//      this.arrayholder = res.results;      
//    })      
//    .catch(error => {        
//      this.setState({ error, loading: false });      
//    });  
// };

// renderHeader = () => {    
//   return (      
//     <SearchBar        
//       placeholder="Type Here..."        
//       lightTheme        
//       round        
//       onChangeText={text => this.searchFilterFunction(text)}
//       autoCorrect={false}             
//     />    
//   );  
// };

// searchFilterFunction = text => {    
//   const newData = this.arrayholder.filter(item => {      
//     const itemData = `${item.name.title.toUpperCase()}   
//     ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
    
//      const textData = text.toUpperCase();
      
//      return itemData.indexOf(textData) > -1;    
//   });
  
//   this.setState({ data: newData });  
// };

// <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
//   <FlatList          
//     data={this.state.data}          
//     renderItem={({ item }) => ( 
//       <ListItem              
//         roundAvatar              
//         title={`${item.name.first} ${item.name.last}`}  
//         subtitle={item.email}                           
//         avatar={{ uri: item.picture.thumbnail }}   
//         containerStyle={{ borderBottomWidth: 0 }} 
//        />          
//      )}          
//      keyExtractor={item => item.email}  
//      ItemSeparatorComponent={this.renderSeparator} 
//      ListHeaderComponent={this.renderHeader}                             
//   />            
// </List>

// export default Explore;



// const styles = StyleSheet.create({
//   header: {
//     paddingHorizontal: theme.sizes.base * 2,
//     paddingBottom: theme.sizes.base * 2
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     left: 0,
//     overflow: 'visible',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: height * 0.1,
//     width,
//     paddingBottom: theme.sizes.base * 4,
//   }
// })
