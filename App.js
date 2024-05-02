import React from "react";
import {StyleSheet, View} from 'react-native'
import Button from '.src/components/Button'
import Display from "./src/components/Display";

export default function App(){
  state = {
    DisplayValue: '0'
  }
  function addDigit (n) {
    this.setState = ({displayValue : n})
  }
  function clearMemory(){
    this.setState = ({displayValue : '0'})
  }

  setOperation = operation => {

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
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1
    },
     button: {
      flexDirection: 'row',
      flexWrap:'wrap'
      }
   
  });
