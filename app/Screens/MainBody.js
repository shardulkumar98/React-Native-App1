import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MainBody = () => {
  return (
    <View>
      <View style={styles.container1}>
        <Text> Section 1</Text>
      </View>
      <View style={styles.container2}>
        <Text> Section 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#EBD671',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#E8FFC2',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainBody;
