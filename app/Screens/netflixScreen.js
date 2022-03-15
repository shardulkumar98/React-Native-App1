import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NetflixCard from '../components/NetflixCard';

const netflixData = [
  <NetflixCard
    title={'Money Hiest'}
    summary={
      'Premise. Set in Madrid, a mysterious man known as the Professor recruits a group of eight people, who choose city names as their aliases, to carry out an ambitious plan that involves entering the Royal Mint of Spain, and escaping with €984 million.'
    }
    img={require('../../assets/moneyhiest.webp')}
  />,
  <NetflixCard
    title={'Stanger Things'}
    summary={
      "After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters. The boy's mother (Joyce) desperately tries to find him, convinced he is in grave danger, "
    }
    img={require('../../assets/st.jpeg')}
  />,
  <NetflixCard
    title={'Lucifer'}
    summary={
      'The series focuses on Lucifer Morningstar, a handsome and powerful angel who was cast out of Heaven for his rebellion. As the Devil, Lucifer tires of the millennia he spent being the Lord of Hell, punishing people.'
    }
    img={require('../../assets/luci.jpg')}
  />,
  <NetflixCard
    title={'Extraction'}
    summary={
      'A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible.'
    }
    img={require('../../assets/ext.jpeg')}
  />,
];
// console.log(data);
const NetflixScreen = () => {
  return (
    <View>
      <FlatList
        horizontal
        data={netflixData}
        renderItem={({item, index}) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default NetflixScreen;

const styles = StyleSheet.create({});
