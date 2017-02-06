import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
