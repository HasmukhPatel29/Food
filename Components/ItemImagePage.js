import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';

const ItemImagePage = ({ route, navigation }) => {
  const { itemId = 1 } = route.params || {};

  const itemList = useSelector((state) => state.itemList);
  const [currentItemIndex, setCurrentItemIndex] = useState(
    itemId ? itemId - 1 : 0
  );
  

  const selectedItem = itemList[currentItemIndex];
  const next = () => {
    setCurrentItemIndex((prevIndex) => prevIndex + 1);
  };

  const previous = () => {
    setCurrentItemIndex((prevIndex) => prevIndex - 1);
  };
  const animateImage = useRef('bounce');

  return (
    <Animatable.View animation={'fadeIn'} style={styles.container}>
      <View>
        <Animatable.Image
          ref={animateImage}
          style={styles.itemImage}
          source={selectedItem.image}
        />
      </View>
      <View style={{ top: 30, left: 20, position: 'absolute', zIndex: 1 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntIcon name="arrowleft" color={'white'} size={30} />
        </TouchableOpacity>
      </View>
      {currentItemIndex > 0 ? (
        <TouchableOpacity
          onPress={() => {
            previous();
            animateImage?.current?.slideInLeft(1000);
          }}
          style={{ top: '47%', left: '3%', position: 'absolute', zIndex: 1 }}>
          <AntIcon name="left" color={'white'} size={30} />
        </TouchableOpacity>
      ) : (
        ''
      )}
      {currentItemIndex < itemList.length - 1 ? (
        <TouchableOpacity
          onPress={() => {
            next();
            animateImage?.current?.slideInRight(1000);
          }}
          style={{ top: '47%', right: '3%', position: 'absolute', zIndex: 1 }}>
          <AntIcon name="right" color={'white'} size={30} />
        </TouchableOpacity>
      ) : (
        ''
      )}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default ItemImagePage;
