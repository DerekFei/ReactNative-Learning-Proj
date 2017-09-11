import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCGScER_nEdXSzSWSQjqe9PhGqe37TL_Rs",
            authDomain: "reactlearningauth.firebaseapp.com",
            databaseURL: "https://reactlearningauth.firebaseio.com",
            projectId: "reactlearningauth",
            storageBucket: "reactlearningauth.appspot.com",
            messagingSenderId: "649349121425"
        });


        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }

        });

    };

    renderContent() {

        switch(this.state.loggedIn){
            case true:
                return (
                    <CardSection>
                        <Button onPress={()=>firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                )
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }    
        
    }
    
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}
export default App;
