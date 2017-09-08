import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


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
    };
    
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}
export default App;
