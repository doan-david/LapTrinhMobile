/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class StockButton extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  weight: 0 };
  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.stockName}>SET</Text>
          <Text style={styles.stockIndex}>9.999.99</Text>
          <text style={styles.stockChange}>+115.23 (0.56%)</text>
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text>SET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>S&P</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>NASDAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Dow Jones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Shanghai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Nikkei</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Hang Seng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>TSEC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>EURO</Text>
          </TouchableOpacity>
        </View>
      </View>
      // // sdfasd
      // <TouchableOpacity
      //   style={styles.button}
      //   onPress={() => {
      //     this.props.onPress(this.props.name, this.props.code);
      //   }}>
      //   <Text>{this.props.name}</Text>
      // </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  stockname: {
    fontSize: 30,
  },
  stockIndex: {
    fontSize: 80,
  },
  buttonText: {
    fontSize: 20,
  },
  button: {
    margin: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    borderColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});
export default StockButton;
