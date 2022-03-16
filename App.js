import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from './app/components/Header';
import ListItem from './app/components/ListItem';
import MainBody from './app/Screens/mainBody';
import ImageFiles from './app/Screens/images';
// import NetflixCard from './app/components/NetflixCard';
import NetflixScreen from './app/Screens/netflixScreen';
import CounterScreen from './app/Screens/counterScreen';
import Form from './app/Screens/form';

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
        <CounterScreen />
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
