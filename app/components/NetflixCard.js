import React from 'react';
import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const NetflixCard = ({title, summary, img}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Netflix Card</Text>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={img} />
        <View style={styles.cardDetails}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.summary}>{summary}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.netflix.com/in/')}>
            <Text style={styles.btnText}>Watch Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NetflixCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    // flexDirection: 'row',
    margin: 10,
  },
  heading: {
    fontSize: 30,
    padding: 10,
    color: '#fff',
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    width: 300,
  },
  img: {
    height: 300,
    width: 296,
  },
  cardDetails: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    // width: '50%',
  },
  titleText: {
    color: '#fff',
    fontSize: 25,
    padding: 8,
  },
  summary: {
    color: '#fff',
    textAlign: 'left',
    letterSpacing: 0.5,
    lineHeight: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginVertical: 15,
    borderColor: 'red',
  },
  btnText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: 'red',
    textAlign: 'center',
    width: 100,
    height: 20,
  },
});
