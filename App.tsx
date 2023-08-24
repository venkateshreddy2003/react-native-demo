import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(prev => prev + 1);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{count * 5}</Text>
      <Text style={styles.text}>You Clicked {count} times</Text>
      <Button title="click" onPress={onClickHandler} />
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
