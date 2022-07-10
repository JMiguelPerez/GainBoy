import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, SafeAreaView, 
    Image, 
    TouchableOpacity,
    TextInput,
} from 'react-native';

const gameBoyPrimaryTxtClr = "#E2E5DE";

function LoginPage(props) {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#F2F3F5'}}>
            <View style={styles.imgContainer}>
                <Image style={styles.logo} source={require('./../assets/favicon.png')} />
            </View>

            <View style={styles.singleFactorContainer}>
                <TextInput style={styles.txtSingleFactorInfo} placeholder="username" placeholderTextColor={gameBoyPrimaryTxtClr}/>
                <View style={styles.spaceContainer}/>
                <TextInput style={styles.txtSingleFactorInfo} placeholder="password" placeholderTextColor={gameBoyPrimaryTxtClr} secureTextEntry={true}/>
                <View style={{height: 30}}/>
            </View>

            <View style={{paddingLeft: 125}}>
                {/*The Start/Login button.
                   The OnPress takes in the props parameter, which has a property called 'navigation' given
                   from the Stack.Screen component in App.js. Inside this 'navigation' component is a function called 
                   navigate() that takes the name of another screen, in this case 'Landing', again defined in App.js
                */}
                <TouchableOpacity style={styles.btnStart} onPress={() => props.navigation.navigate('Landing')}>
                    <Text style={styles.txtBtnStart}>Start</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.spaceContainer}/>

            <View style={{paddingLeft: 125}}>
                {/*The Create Account button.
                   The 'CreateAccount' Stack.Screen is defined in App.js
                */}
                <TouchableOpacity style={styles.btnCreate} onPress={() => props.navigation.navigate('SignUp')}>
                    <Text style={styles.txtBtnCreate}>New User</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imgContainer: {        
        justifyContent: 'center',
        alignItems: 'center',
        height: '55%'
    },
    singleFactorContainer: {
        paddingTop: 10, 
        paddingLeft: 80,
    },
    spaceContainer: {
        height: 20
    },
    txtSingleFactorInfo:{
        height: 70,
        width: 250,
        paddingLeft: 25,
        paddingBottom: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 50,
        fontSize: 25,
        backgroundColor: '#A482FF',
        color: '#E2E5DE'
    },
    btnStart: {
        height: 40,
        width: 150,
        paddingTop: 3,
        paddingLeft: 45,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#d3d3d3',
    },
    btnCreate: {
        height: 40,
        width: 150,
        paddingTop: 5,
        paddingLeft: 35,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#d3d3d3',
    },
    txtBtnStart:{
        fontSize: 25, 
        color: '#5D3FD3'
    },
    txtBtnCreate:{
        fontSize: 20, 
        color: '#5D3FD3'
    },
    logo: {
        width:100,
        height:100,
    }
});

export default LoginPage;