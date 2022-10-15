/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {weight: '0', height: '0', bmi: 0};
    this.compute = this.compute.bind(this);
  }
  compute() {
    console.log('On pressed!');
    let weight = parseFloat(this.state.weight);
    let height = parseFloat(this.state.height);
    //Always do!
    this.setState({bmi: weight / Math.pow(height / 100, 2)});
    //Never do!
    // this.state.bmi = weight/Math.pow(height/100, 2);
  }
  render() {
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.title}>Weight (KG)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={this.state.weight}
            onChangeText={weight => this.setState({weight})}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.title}>Height (CM)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={this.state.height}
            onChangeText={height => this.setState({height})}
          />
        </View>
        <View style={styles.center}>
          <View style={styles.group}>
            <Text style={styles.center}>BMI: {this.state.bmi.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.group}>
          <TouchableOpacity style={styles.button} onPress={this.computer}>
            <Text style={styles.buttonText}>Computer</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    flexDirection: 'column',
    padding: 20,
  },
  group: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 30,
  },
  input: {
    padding: 30,
    flex: 1,
    height: 40,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
  },
  center: {
    alignItems: 'center',
  },
});

export default BMI;
