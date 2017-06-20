import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView 
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class react_native_navigation_bootstrap extends Component {
  static navigatorStyle = {
    statusBarTextColorSchemeSingleScreen: 'dark',
    screenBackgroundColor: 'green',
  };

  push = () => {
    this.props.navigator.push({
      screen: 'pushedScreen',
      passProps: {},
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.push}>
            <Text style={styles.button}>
              {'PUSH >'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView} horizontal>
         {
            Array(5000).fill(0).map((x,i) => {
              return (
                <View style={{height: 100, width: 100, backgroundColor: `rgba(0,255,0,.3)`}} key={i}>
                  <Text style={styles.text}>{i}</Text>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    );
  }
}

class pushedScreen extends Component {
  static navigatorStyle = {
    statusBarTextColorSchemeSingleScreen: 'light',
    screenBackgroundColor: 'green',
    tabBarHidden: true,
    navBarHidden: true,
  };

  pop = () => {
    this.props.navigator.pop({animated: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pop}>
          <Text style={styles.button}>
            {'< GO BACK'}
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
    backgroundColor: 'lightblue'
  },
  scrollView: {
    height: 140,
    backgroundColor: 'tomato',
    flexDirection: 'row',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textShadowColor: 'black',
    textShadowRadius: 20,
  }
});

// Register screens
Navigation.registerComponent('react-native-navigation-bootstrap', () => react_native_navigation_bootstrap);
Navigation.registerComponent('pushedScreen', () => pushedScreen);

// Bootstrap
const navigatorStyle = { navBarHidden: true };

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'react-native-navigation-bootstrap',
      navigatorStyle: navigatorStyle,
      label: 'A'
    },
    {
      screen: 'react-native-navigation-bootstrap',
      navigatorStyle: navigatorStyle,
      label: 'B'
    },
  ],
  tabsStyle: {
    tabBarButtonColor: 'grey',
    tabBarSelectedButtonColor: 'black',
    tabBarBackgroundColor: 'blue',
    tabBarHideShadow: true,
  },
  animationType: 'fade',
});


