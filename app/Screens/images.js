import React from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import CardDetail from '../components/CardDetail';

const ImageFiles = () => {
  return (
    <View style={styles.container}>
      <CardDetail title="Image 1" img={require('../../assets/img1.jpeg')} />
      <CardDetail title="Image 2" img={require('../../assets/img2.jpeg')} />
      <TouchableOpacity onPress={() => Alert.alert('You clicked')}>
        <Text>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFBE9',
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
  img: {
    height: 200,
    width: 300,
    marginBottom: 5,
  },
});

export default ImageFiles;
