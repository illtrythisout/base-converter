import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import convertBase from '@/utils/convertBase';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [inputBase, setInputBase] = useState(10);
  const [outputBase, setOutputBase] = useState(16);

  return (
    <View style={styles.root}>
      {/* Input */}
      <Text style={[styles.text, styles.header]}>Input</Text>
      <View style={styles.displayWrapper}>
        <TextInput
          keyboardType="numeric"
          style={[styles.text, styles.numberPad]}
          defaultValue="10"
          onChangeText={(text) => setInputBase(Number(text))}
        />
        <TextInput
          style={[styles.text, styles.display]}
          onChangeText={(text) => setInput(text)}
        />
      </View>
      {/* Output */}
      <Text style={[styles.text, styles.header]}>Result</Text>
      <View style={styles.displayWrapper}>
        <TextInput
          keyboardType="numeric"
          style={[styles.text, styles.numberPad]}
          defaultValue="16"
          onChangeText={(text) => setOutputBase(Number(text))}
        />
        <Text style={[styles.text, styles.display]}>
          {convertBase(input, inputBase, outputBase)}
        </Text>
      </View>
      {/* Disclaimer */}
      <Text style={[styles.text, styles.footnote]}>
        *Only works until base 36
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 16,
    gap: 8,
    height: 'auto',
    width: '80%',

    backgroundColor: 'white',

    borderRadius: 8,

    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  header: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  footnote: {
    alignSelf: 'flex-end',
    fontSize: 16,
    color: 'grey',
  },
  text: {
    fontSize: 24,
  },
  displayWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 12,
  },
  numberPad: {
    padding: 8,
    width: 50,
    borderRadius: 8,

    backgroundColor: '#d05c65',

    color: 'white',
    textAlign: 'center',
  },
  display: {
    flex: 1,
    padding: 8,
    borderRadius: 8,

    backgroundColor: '#d05c65',

    color: 'white',
  },
});

export default Calculator;
