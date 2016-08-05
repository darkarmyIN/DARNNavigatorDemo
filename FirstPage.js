'use strict';

import React , {Component} from 'react';
import
{
  View,
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';

class FirstPage extends Component {

  constructor(props) {
    super(props);
    this.state={
      id:'first'
    }
  }

  onPressButton() {
    this.props.navigator.push({
      id:'second',
      passProps: {
        name:'darkarmy'
      }
    });
  }

  render() {
    return (
      <View>
      <TouchableHighlight onPress={this.onPressButton.bind(this)} style={{position:'absolute',top:200,left:120}}>
        <Text>PUSH</Text>
      </TouchableHighlight>
      </View>
    );
  }
}

module.exports = FirstPage;
