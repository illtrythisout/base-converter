import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calculator from '@/components/Calculator';

export default function Index() {
  return (
    <View style={styles.root}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    // position
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // color
    backgroundColor: 'white',
  },
});
