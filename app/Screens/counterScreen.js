import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CounterScreen = () => {
  const [data, setdata] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CounterScreen</Text>
      <View style={[styles.inputBox]}>
        <Text style={styles.textCommonStyle}>{data}</Text>
      </View>
      <View style={[styles.commonStyle]}>
        <TouchableOpacity onPress={() => setdata(data + 10)}>
          <Text style={styles.textCommonStyle}>+10</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.commonStyle]}>
        <TouchableOpacity>
          <Text style={styles.textCommonStyle} onPress={() => setdata(0)}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.commonStyle]}>
        <TouchableOpacity onPress={() => setdata(data - 10)}>
          <Text style={styles.textCommonStyle}>-10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB2A6',
  },
  heading: {
    fontSize: 40,
    marginVertical: 10,
  },
  inputBox: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  commonStyle: {
    backgroundColor: '#DFF6FF',
    width: 100,
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCommonStyle: {
    alignItems: 'center',
    fontSize: 20,
  },
});
