import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from './app/components/header';
import ListItem from './app/components/ListItem';
import MainBody from './app/Screens/MainBody';
import ImageFiles from './app/Screens/images';
// import NetflixCard from './app/components/NetflixCard';
import NetflixScreen from './app/Screens/netflixScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Header title="myApp" />
        <MainBody />
        <ListItem />
        <ImageFiles />
        <NetflixScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
