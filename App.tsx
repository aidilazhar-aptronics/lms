import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = (btn) => {
    Alert.alert(`You pressed Button ${btn}`);
  };

  return (
    <View style={styles.container}>
      
      <Button title="Student" onPress={() => handlePress(1)} />
      <Button title="Instructor" onPress={() => handlePress(2)} />
      <Button title="Administrator" onPress={() => handlePress(3)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20, // spacing between buttons (React Native 0.71+)
    backgroundColor: '#fff',
  },
});
