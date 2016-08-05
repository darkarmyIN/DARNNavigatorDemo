'use strict';

import React , {Component} from 'react';
import
{
  View,
  Navigator,
  StyleSheet,
  ScrollView
} from 'react-native';

class SecondPage extends Component {

  constructor(props) {
    super(props);
    this.state={
      id:'second'
    }
  }

  render() {
    var dataFromLastPage = this.props.route.passProps.name;
    return (
      <ScrollView style={styles.viewStyle}>
      </ScrollView>
    );
  }
}


var styles = StyleSheet.create({
  viewStyle: {
     backgroundColor:'rgba(52,52,52,1)'
  }
});
module.exports = SecondPage;
