'use strict';

import React , {Component} from 'react';
import
{
  View,
  Navigator
} from 'react-native';


const FirstPage = require('./FirstPage');
const SecondPage = require('./SecondPage');
class DARNNavigator extends React.Component{
  constructor(props) {
  super(props);
  }

  render() {
    var initialRouteID = 'first';
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{id: initialRouteID}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'first':
        return (<FirstPage navigator={navigator} route={route} title="first"/>);
      case 'second':
        return (<SecondPage navigator={navigator} route={route} title="second"/>);
    }
  }
}


module.exports = DARNNavigator;
