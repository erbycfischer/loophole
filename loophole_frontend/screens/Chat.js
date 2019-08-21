// import React from "react";
// import { StyleSheet, Text, TextInput,View } from "react-native";
// window.navigator.userAgent = 'react-native';
// import io from 'socket.io-client';
// import { GiftedChat } from 'react-native-gifted-chat';



// export default class Chat extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       message:'',
//       messages:[],
//     }
//   }
//   componentDidMount(){
//     this.socket = io("http://127.0.0.1:3000/%22");
//     this.socket.on('chat message', msg => {
//       this.setState({ messages: [this.state.messages, msg] });
//     })
//   }
//   submitMessage(){
//     this.socket.emit('chat message', this.state.message);
//     this.setState({messages:''})
//   }

// render() {
//   const messages = this.state.messages.map(message=> <Text key={message}>{message}</Text>)
//     return (
//       <View style={styles.container}>
//         <TextInput
//           value={this.state.message}
//           message={this.state.message}
//           onSubmitEditing={() => this.SubmitMessage(message)}
//           onChangeText={message => {
//             this.setState({message});
//           }}
//           user={{
//             _id: 1,
//           }}
//         />
//           {message}
//           </View>
//       )
//     }

// }

// const styles = StyleSheet.create({
//     conatiner: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",

//     },
// })

import React from "react";
import { StyleSheet, Text, View } from "react-native";
window.navigator.userAgent = 'react-native';
import io from 'socket.io-client/dist/socket.io';
import { GiftedChat } from 'react-native-gifted-chat';



export default class Chat extends React.Component {
    state = {
        messages: [],
      }
    

    constructor(){
        super();
    this.socket = io('localhost:8080', {jsonp: false});
}

render() {
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      )
    }
    
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
})