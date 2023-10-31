import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import Lottie from 'lottie-react-native';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from './CartAction';
import * as Animatable from 'react-native-animatable';

export default function MyCart({ navigation }) {
  const handleSwipeout = (item, index) => {
    dispatch(removeFromCart(item.id));
  };

  const cartItem = useSelector((state) => state.cartItem);
  const grandTotal = useSelector((state) => state.grandTotal);
  const dispatch = useDispatch();
  const [animateRemoveIndex, setAnimateRemoveIndex] = useState(null);
  const animateBack = useRef(null);

  const handleRemoveFromCart = (itemId, index) => {
    setAnimateRemoveIndex(index);
    setTimeout(() => {
      dispatch(removeFromCart(itemId));
      setAnimateRemoveIndex('');
    }, 700);
  };
  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };
  const handleIncrementQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  return (
    <Animatable.View
      animation={'fadeIn'}
      ref={animateBack}
      style={styles.container}>
      <Text style={{ fontSize: 22, textAlign: 'center', marginTop: 28 }}>
        My Cart
      </Text>
      {cartItem.length > 0 ? (
        <FlatList
          contentContainerStyle={{ paddingVertical: 10 }}
          showsVerticalScrollIndicator={false}
          data={cartItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Swipeout
              autoClose={true}
              right={[
                {
                  onPress: () => handleSwipeout(item, index),
                  text: 'Delete',
                  backgroundColor: 'red',
                },
              ]}
              left={[
                {
                  onPress: () => handleSwipeout(item, index),
                  text: 'Delete',
                  backgroundColor: 'red',
                },
              ]}>
              <Animatable.View
                animation={index === animateRemoveIndex ? 'zoomOut' : null}
                style={styles.itemContainer}>
                <Animatable.Image
                  style={{
                    height: 140,
                    width: '40%',
                    resizeMode: 'contain',
                    borderRadius: 8,
                  }}
                  source={item.image}
                />
                <View style={styles.itemDetails}>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 16 }}>Price: Rs. {item.price}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16 }}>Quantity:</Text>
                    <TouchableOpacity
                      style={{ paddingHorizontal: 3 }}
                      onPress={() => handleDecreaseQuantity(item)}>
                      <AntIcon name="minussquareo" color={'grey'} size={23} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16 }}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={{ paddingHorizontal: 3 }}
                      onPress={() => handleIncrementQuantity(item)}>
                      <AntIcon name="plussquareo" color={'grey'} size={23} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingHorizontal: 3 }}
                      onPress={() => handleRemoveFromCart(item.id, index)}>
                      <AntIcon name="delete" color={'red'} size={23} />
                    </TouchableOpacity>
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>
                    Total Price: Rs.{item.totalPrice}
                  </Text>
                </View>
              </Animatable.View>
            </Swipeout>
          )}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Lottie source={require('./noItemFound.json')} autoPlay loop />
        </View>
      )}
      <Text
        style={{
          fontSize: 20,
          fontWeight: 700,
          textAlign: 'center',
          backgroundColor: 'orange',
          paddingVertical: 10,
        }}>
        Grand Total: Rs.{grandTotal}
      </Text>
      <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
        <AntIcon name="arrowleft" color={'black'} size={30} />
      </TouchableOpacity>
    </Animatable.View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 8,
    backgroundColor: 'lightyellow',
    shadowColor: 'orange',
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 5,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },
});
