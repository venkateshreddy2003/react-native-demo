/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Linking, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Venkatesh reddy</Text>
      <Button
        title="Link"
        onPress={() => {
          Linking.openURL('https://www.google.com');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
