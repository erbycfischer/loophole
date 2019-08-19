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