import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.root}>
      <Text>Base Converter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
