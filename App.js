import React, { useState } from "react";
import {StyleSheet, View} from 'react-native'
import Button from '.src/components/Button'
import Display from "./src/components/Display";

const inicialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}


export default function App(){
  const [state, setState] = useState(inicialState);

  const addDigit = n => {
    const clearDisplay = state.displayValue === '0' ||
    state.clearDisplay;
    if (n === '.' && ! clearDisplay && state.displayValue.includes ('.')){
      return;
    }

    const currentValue = clearDisplay ? '' : state.displayValue;
    const displayValue = currentValue + n;
    setState({...state, displayValue, clearDisplay: false});

    if( n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...state, Values];
      values [state.current] = newValue;
      setState({...state, values});
    }
  }

const clearMemory = () =>{
  
}
  }
  return (
    <View style={ StyleSheet.container}>
      <Display value={this.state.DisplayValue} />
      <View style={StyleSheet.Button}>
      <button label='AC' triple onClick={clearMemory}/>
      <button label='/'  operation onClick={this.setOperation}/>
      <button label='7'  onClick={addDigit}/>
      <button label='8'  onClick={addDigit}/>
      <button label='9'  onClick={addDigit}/>
      <button label='*'  operation onClick={this.setOperation}/>
      <button label='4'  onClick={addDigit}/>
      <button label='5'  onClick={addDigit}/>
      <button label='6'  onClick={addDigit}/>
      <button label='-'  operation onClick={this.setOperation}/>
      <button label='1'  onClick={addDigit}/>
      <button label='2'  onClick={addDigit}/>
      <button label='3'  onClick={addDigit}/>
      <button label='+'  operation onClickk={this.setOperation}/>
      <button label='0'  double onClick={addDigit}/>
      <button label='.'  operation onClick={this.setOperation}/>
      <button label='='  operation onClick={this.setOperation}/>

      </View>
      </View>
  );
  
  const styles = StyleSheet.create({
    container:{
      flex: 1
    },
     button: {
      flexDirection: 'row',
      flexWrap:'wrap'
      }
   
  });
