import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import reducers from './reducers'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCCO-IQcHcngaafs-uGUHcB5sL6iG8O0uQ',
      authDomain: 'manager-87762.firebaseapp.com',
      databaseURL: 'https://manager-87762.firebaseio.com',
      storageBucket: 'manager-87762.appspot.com',
      messagingSenderId: '874830657874'
    }

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App
