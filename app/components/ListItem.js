import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const data = [
  {
    product: 'coco powder',
    price: 'Rs.85',
  },
  {
    product: 'Milk',
    price: 'Rs.25',
  },
  {
    product: 'Parle-G',
    price: 'Rs.10',
  },
  {
    product: 'Chocolate',
    price: 'Rs.65',
  },
];
const ListItem = () => {
  const [items, setitems] = useState(data);
  return (
    <View>
      <Text style={styles.heading}>ListItem</Text>
      <FlatList
        data={items}
        renderItem={({item, index}) => {
          return (
            <View style={styles.listItem}>
              <Text style={styles.item}>{item.product}</Text>
              <Text style={styles.item}>{item.price}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'grey',
    color: '#fff',
    padding: 20,
  },
  listItem: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 4,
    paddingTop: 10,
    paddingLeft: 10,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    fontSize: 18,
  },
});
export default ListItem;
