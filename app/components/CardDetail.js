import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CardDetail = ({title, img}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Image style={styles.img} source={img} />
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
    // color: '#fff',
    padding: 10,
  },
  img: {
    height: 200,
    width: 300,
    marginBottom: 5,
  },
});
export default CardDetail;
