import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [name, setName] = useState('Mash');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName('Programming with Venkatesh');
    setSession({number: 7, title: 'Style'});
    setCurrent(false);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>
        This is session number {session.number} and about {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'current session' : 'next session'}
      </Text>
      <Button title="Update State" onPress={onClickHandler} />
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
