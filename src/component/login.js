import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, TextInput, View, Text, Image, ImageBackground, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window');
export default  class LoginInterface extends Component {
    render() {
        return(
            <ImageBackground source={require('./../assets/images/background.png')} style={ styles.backgroundContainer }>
                <View style={ styles.logoContainer }>
                    {/* <Image source={require('./../assets/images/photizzo.png') } style={ styles.logo } /> */}
                    <Text style={ styles.logoText }>Photizzo Technologies</Text>
                </View>
                
                <View>
                <Icon
                    name={Platform.OS === "ios" ? "ios-person-outline" : "md-person"}
                    color="#ccc"
                    size={25}
                    color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.inputIcons}
                />
                    <TextInput 
                    style={ styles.input }
                    placeholder={'Username'} placeholderTextColor={'rgba(255, 255, 255, 0.7)'} underlineColorAndroid='transparent'
                     />
                </View>

                <View>
                <Icon
                    name={Platform.OS === "ios" ? "ios-lock-outline" : "md-lock"}
                    color="#ccc"
                    size={25}
                    color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.inputIcons}
                />
                    <TextInput 
                    style={ styles.input }
                    placeholder={'Password'} secureTextEntry={true} placeholderTextColor={'rgba(255, 255, 255, 0.7)'} underlineColorAndroid='transparent'
                     />
                     <TouchableOpacity style={styles.btnEye}>
                        <Icon                           
                            name={Platform.OS === "ios" ? "ios-eye-outline" : "md-eye"}
                            color="#ccc"
                            size={25}
                            color={'rgba(255, 255, 255, 0.7)'}                           
                         />
                     </TouchableOpacity>
                </View>

                <TouchableOpacity style={ styles.btnLogin } >
                    <Text style={styles.text}> Login </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = { 
    backgroundContainer:{
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItem: 'center',
        backgroundColor: '#F5FCFF',
    }, 
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
    },
    logoText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 5,
        opacity: 0.5
    },
    input: {
        width: WIDTH - 55,
        height: 60,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        marginBottom: 5,
        borderLeftColor: '#1aaff3'
    },
    inputIcons: {
        position: 'absolute',
        top: 15,
        left: 37
    },
    btnEye: {
        position: 'absolute',
        top: 15,
        right: 37
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 60,
        borderRadius: 25,
        backgroundColor: '#004d00',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 25,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center'
    }
}