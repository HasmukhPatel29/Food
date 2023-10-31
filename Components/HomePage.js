import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Modal,
} from 'react-native';
import item1 from "./Item1.jpg";
import item2 from "./Item2.jpg";
import item3 from "./Item3.jpg";
import item4 from "./Item4.jpg";
import item5 from "./Item5.jpg";
import item6 from "./Item6.jpg";
import Lottie from 'lottie-react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateItemList } from './CartAction';
import Carousel, { PaginationLight } from 'react-native-x-carousel';
const { width } = Dimensions.get('window');

export default function HomePage({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const category = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Frankie' },
    { id: 3, name: 'Idli' },
    { id: 4, name: 'Burger' },
    { id: 5, name: 'Rice' },
    { id: 6, name: 'Thali' },
    { id: 7, name: 'Paneer_Tikka' },
  ];
  

  const itemLists = useSelector((state) => state.itemList);
  const [itemList, setItemList] = useState(itemLists);
  const cartItem = useSelector((state) => state.cartItem);
  const handleAddToCart = (itemId) => {
    const selectedItem = itemList.find((item) => item.id === itemId);
    dispatch(addToCart(selectedItem));
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const animateBell = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const applyFilters = () => {
    let filteredList = itemLists.filter((item) => {
      const itemPrice = item.price;
      if (minPrice && maxPrice) {
        return (
          itemPrice >= parseInt(minPrice) && itemPrice <= parseInt(maxPrice)
        );
      }
      return true;
    });
    if (selectedSort === 'lowToHigh') {
      filteredList.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'highToLow') {
      filteredList.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'discountLowToHigh') {
      filteredList.sort((a, b) => a.percentage - b.percentage);
    } else if (selectedSort === 'discountHighToLow') {
      filteredList.sort((a, b) => b.percentage - a.percentage);
    } else if (selectedSort === 'nameAToZ') {
      filteredList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === 'nameZToA') {
      filteredList.sort((a, b) => b.name.localeCompare(a.name));
    }
    setItemList(filteredList);
    setModalVisible(!modalVisible);
  };

  const reset = () => {
    setItemList(itemLists);
    setModalVisible(!modalVisible);
    setMinPrice('');
    setMaxPrice('');
    setSelectedSort('');
  };

  const handleupdate = () => {
    dispatch(updateItemList(itemListWithChanges));
    animateBell.current.shake(1000);
    setItemList(itemListWithChanges);
    setMinPrice('');
    setMaxPrice('');
    setSelectedSort('');
  };
  const itemListWithChanges = itemList.map((item) => {
    const percentage = Math.floor(Math.random() * 80) + 1;
    return { ...item, percentage };
  });
  
  const maxPriceRef = useRef(null);
  const handlemaxPriceSubmit = () => {
    maxPriceRef.current.focus();
  };
  const calculate = (price, percentage) => {
    const discount = (price * percentage) / 100;
    const actualPrice = price + discount;
    return actualPrice.toFixed(2);
  };
  return (
    <Animatable.View
      animation={'fadeIn'}
      style={{ flex: 1, justifyContent: 'space-between' }}>
      <Animatable.View style={styles.header}>
        <AntIcon
          name="menuunfold"
          size={30}
          color={'orange'}
          onPress={() => {
            setIsDrawerOpen(!isDrawerOpen);
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
          <AntIcon name="shoppingcart" size={30} color={'orange'} />
          <Text style={{ textAlign: 'center', marginTop: -25, fontSize: 10 }}>
            {cartItem.length}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={handleupdate}>
          <Animatable.View ref={animateBell}>
            <Fontisto name="bell" size={30} color={'orange'} />
          </Animatable.View>
        </TouchableOpacity>
      </Animatable.View>
      <View>
        <Text style={{ fontSize: 25, paddingHorizontal: 15 }}>Hi, Marina</Text>
        <Text style={{ fontSize: 25, paddingHorizontal: 15 }}>
          Try our new dishes today!
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 15,
          marginVertical: 15,
        }}>
        <View
          style={{
            display: 'flex',
            flex: 4,
            borderWidth: 1,
            backgroundColor: '#ecf0f1',
            flexDirection: 'row',
            borderRadius: 10,
            padding: 4,
            marginRight: 10,
          }}>
          <AntIcon name="search1" size={30} color={'orange'} />
          <TextInput
            style={{ width: '90%' }}
            placeholder="Search Here"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AntIcon name="filter" size={40} color="orange" />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          onRequestClose={() => setModalVisible(!modalVisible)}
          visible={modalVisible}>
          <View style={{ flex: 1, padding: 30 }}>
            <TouchableOpacity
              style={{ position: 'absolute', top: 10, right: 20 }}
              onPress={() => setModalVisible(!modalVisible)}>
              <AntIcon name="close" size={30} />
            </TouchableOpacity>
            <View>
              <Text style={{ fontSize: 28 }}>Price Range:</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 5,
                  fontSize: 18,
                }}
                placeholder="Min Price"
                keyboardType="numeric"
                returnKeyType="next"
                value={minPrice}
                onChangeText={(text) => setMinPrice(text)}
                onSubmitEditing={handlemaxPriceSubmit}
              />
              <TextInput
                style={{ borderWidth: 1, padding: 5, fontSize: 18 }}
                placeholder="Max Price"
                keyboardType="numeric"
                ref={maxPriceRef}
                value={maxPrice}
                onChangeText={(text) => setMaxPrice(text)}
              />
            </View>
            <Text style={{ fontSize: 20, paddingVertical: 5 }}>
              Sort Price By :
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                onPress={() => setSelectedSort('highToLow')}
                style={{
                  backgroundColor:
                    selectedSort === 'highToLow' ? 'lightgreen' : 'lightgrey',
                  padding: 5,
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
                  High To Low
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedSort('lowToHigh')}
                style={{
                  backgroundColor:
                    selectedSort === 'lowToHigh' ? 'lightgreen' : 'lightgrey',
                  padding: 5,
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
                  Low To High
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, paddingVertical: 5 }}>
              Sort Name By :
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                onPress={() => setSelectedSort('nameAToZ')}
                style={{
                  backgroundColor:
                    selectedSort === 'nameAToZ' ? 'lightgreen' : 'lightgrey',
                  padding: 5,
                }}>
                <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
                  Name A - Z
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedSort('nameZToA')}
                style={{
                  backgroundColor:
                    selectedSort === 'nameZToA' ? 'lightgreen' : 'lightgrey',
                  padding: 5,
                }}>
                <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
                  Name Z - A
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, paddingVertical: 5 }}>
              Sort Discount % By :
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                onPress={() => setSelectedSort('discountHighToLow')}
                style={{
                  backgroundColor:
                    selectedSort === 'discountHighToLow'
                      ? 'lightgreen'
                      : 'lightgrey',
                  padding: 5,
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
                  High To Low
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedSort('discountLowToHigh')}
                style={{
                  backgroundColor:
                    selectedSort === 'discountLowToHigh'
                      ? 'lightgreen'
                      : 'lightgrey',
                  padding: 5,
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
                  Low To High
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={applyFilters}
              style={{
                backgroundColor: 'orange',
                padding: 5,
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
                Apply Price Range
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={reset}
              style={{
                padding: 5,
                backgroundColor: 'orange',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Text style={{ fontSize: 20 }}>Reset All</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <Carousel
        loop
        autoplay
        data={itemLists}
        pagination={PaginationLight}
        renderItem={(item,index) => (
          <View key={index}
            style={{ alignItems: 'center', justifyContent: 'center', width }}>
            <View style={{ borderRadius: 8, overflow: 'hidden' }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate('ItemDetail', { itemId: item.id })
                }>
                <Image style={styles.card} source={item.image} />
              </TouchableOpacity>
              <View style={{ position: 'absolute' }}>
                <Text style={{ fontSize: 16, padding: 8, color: 'white' }}>
                  {item.name}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 2 }}
          horizontal
          data={category}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Animatable.View animation={'slideInRight'}>
              <TouchableOpacity
                onPress={() => setSelectedCategory(item.id)}
                style={styles.categoryData}>
                <Text
                  style={{
                    marginTop: 5,
                    textAlign: 'center',
                    fontSize: 17,
                    color: selectedCategory === item.id ? 'orange' : 'black',
                    paddingHorizontal: 10,
                  }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    borderTopWidth: selectedCategory === item.id ? 2 : 0,
                    borderColor: 'orange',
                    width: 20,
                    marginHorizontal: 10,
                  }}></View>
              </TouchableOpacity>
            </Animatable.View>
          )}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={
          selectedCategory === 1
            ? itemList.filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
              )
            : itemList
                .filter(
                  (item) =>
                    item.category === category[selectedCategory - 1].name
                )
                .filter((item) =>
                  item.name.toLowerCase().includes(searchText.toLowerCase())
                )
        }
        contentContainerStyle={{
          paddingHorizontal: 9,
          paddingVertical: 9,
          flexGrow: 1,
        }}
        numColumns={2}
        renderItem={({ item, index }) => {
          if (searchText !== '' && selectedCategory === 1) {
            return (
              <View style={styles.itemList}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ItemDetail', {
                      itemId: item.id,
                    })
                  }>
                  <View>
                    <View>
                      <Image style={styles.itemImage} source={item.image} />
                      <Text style={styles.percentage}>
                        {item.percentage}% off
                      </Text>
                    </View>
                    <View style={{ padding: 13 }}>
                      <View>
                        <Text style={{ fontSize: 17 }}>{item.name}</Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 17,
                            color: 'orange',
                            paddingVertical: 5,
                          }}>
                          Rs. {item.price}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            fontSize: 17,
                            textDecorationLine: 'line-through',
                          }}>
                          Rs. {calculate(item.price, item.percentage)}
                        </Text>
                        <TouchableOpacity
                          style={styles.submit}
                          onPress={() => handleAddToCart(item.id)}>
                          <Text>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          } else {
            return (
              <Animatable.View
                animation={index % 2 ? 'slideInRight' : 'fadeInLeft'}
                style={styles.itemList}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ItemDetail', {
                      itemId: item.id,
                      itemList,
                    })
                  }>
                  <View>
                    <View>
                      <Image style={styles.itemImage} source={item.image} />
                      <Text style={styles.percentage}>
                        {item.percentage}% off
                      </Text>
                    </View>
                    <View style={{ padding: 13 }}>
                      <View>
                        <Text style={{ fontSize: 17 }}>{item.name}</Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 17,
                            color: 'orange',
                            paddingVertical: 5,
                          }}>
                          Rs. {item.price}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            fontSize: 17,
                            textDecorationLine: 'line-through',
                          }}>
                          Rs. {calculate(item.price, item.percentage)}
                        </Text>
                        <TouchableOpacity
                          style={styles.submit}
                          onPress={() => handleAddToCart(item.id)}>
                          <Text>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </Animatable.View>
            );
          }
        }}
        ListEmptyComponent={ 
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Lottie source={require('./noDataFound.json')} autoPlay loop />
          </View>
        }
      />
      {isDrawerOpen && (
        <FlatList
          style={styles.drawerCategoryList}
          data={category}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animatable.View
              animation={index % 2 ? 'slideInRight' : 'fadeInLeft'}
              easing={'ease-in-out'}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedCategory(item.id);
                  setIsDrawerOpen(false);
                }}
                style={styles.drawerCategoryItem}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 17,
                    color: selectedCategory === item.id ? 'orange' : 'black',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          )}
        />
      )}
      {isDrawerOpen && (
        <View style={{ top: 30, left: '40%', position: 'absolute', zIndex: 1 }}>
          <AntIcon
            name="menufold"
            size={30}
            color={'orange'}
            onPress={() => setIsDrawerOpen(false)}
          />
        </View>
      )}
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  categoryData: {
    paddingHorizontal: 8,
  },
  itemList: {
    borderWidth: 1,
    marginVertical: 9,
    marginHorizontal: 9,
    borderRadius: 15,
    flex: 0.5,
  },
  itemImage: {
    height: 100,
    width: '100%',
    borderRadius: 15,
    borderBottomLeftRadius: 40,
  },
  submit: {
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    backgroundColor: 'orange',
  },
  drawerCategoryList: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 45,
  },
  drawerCategoryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  card: {
    width: width * 0.9,
    height: width * 0.4,
  },
  percentage: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});
