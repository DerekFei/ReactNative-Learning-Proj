import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCGScER_nEdXSzSWSQjqe9PhGqe37TL_Rs",
            authDomain: "reactlearningauth.firebaseapp.com",
            databaseURL: "https://reactlearningauth.firebaseio.com",
            projectId: "reactlearningauth",
            storageBucket: "reactlearningauth.appspot.com",
            messagingSenderId: "649349121425"
        });
    }
    
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An App!</Text>
            </View>
        );
    }
}
export default App;
