import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyCJlIClN69dD2D8sNoR6TdpM-tbnjdJ-WA',
            authDomain: 'manager-68e1e.firebaseapp.com',
            databaseURL: 'https://manager-68e1e.firebaseio.com',
            projectId: 'manager-68e1e',
            storageBucket: '',
            messagingSenderId: '250929070787'
          };
          firebase.initializeApp(config);
    }
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}
export default App;
