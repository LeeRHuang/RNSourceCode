/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,NativeModules,NativeEventEmitter,Linking} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {


  constructor(props) {
    super(props)
	  this.state = {
		  nativeMessage: '',
	  };
    this._sendRNMessage = this._sendRNMessage.bind(this);
  }

  componentDidMount() {
		const RNEmitter = new NativeEventEmitter(NativeModules.NativeToJSEventEmitter);
		RNEmitter.addListener('Hello', this._recieveMessFromNative.bind(this));
    }

  _sendRNMessage(){
	  var messageManager = NativeModules.RNMessageManager;
	  messageManager.receiveMessage('from JS message!')
	  // Linking.openURL('itms-services://?action=download-manifest&url=https%3A%2F%2F7w2.cn%2Fapp%2Fplist%2F8157%3Fauth_key%3D1571016373-0-0-2d124dc615a31caa930e8ae5fba59bb0&tcwvcexurl');
	  // Linking.openURL('itms-services://?action=download-manifest&url=https%3A%2F%2F7w2.cn%2Fapp%2Fplist%2F8157%3Fauth_key%3D1571016373-0-0-2d124dc615a31caa930e8ae5fba59bb0&tcwvcexurl');
  }

  _recieveMessFromNative(object){
    console.log(object);
    this.setState({
	    nativeMessage: object
    })
  }


  render() {
    return (
      <View style={styles.container}>
        {/*<Text style={styles.welcome}>Welcome to React Native11!</Text>*/}
        {/*<Text style={styles.instructions}>To get started, edit App.js</Text>*/}
        {/*<Text style={styles.instructions}>{instructions}</Text>*/}
        <TouchableOpacity style={styles.testBtnStyle} onPress={this._sendRNMessage}>
            <Text>
                {this.state.nativeMessage ? this.state.nativeMessage: 'Test'}
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  testBtnStyle: {
    width: 150,
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  }
});
