import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Share
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./CartAction";

export default function ItemDetails({ route, navigation }) {
  const { itemId = 1 } = route.params || {};
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.itemList);

  const selectedItem = itemList.find((item) => item.id === itemId) || 1;

  const handleAddToCart = () => {
    dispatch(addToCart(selectedItem));
  };
  const handleShare = () => {
    const shareOptions = {
      title: 'Share this item',
      message: `${selectedItem.name} :- ${selectedItem.description}`,
      url: `${'https://oblador.github.io/react-native-vector-icons/'}`,
    };
  
    Share.share(shareOptions)
      .then((result) => {
        if (result.action === Share.sharedAction) {
        } else if (result.action === Share.dismissedAction) {
        }
      })
      .catch((error) => {
        console.error('Error sharing:', error);
      });
  };
  

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image style={styles.itemImage} source={selectedItem.image} />
        <View style={{ top: 30, left: 20, position: "absolute", zIndex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntIcon name="arrowleft" color={"white"} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 2, justifyContent: "space-around" }}>
        <View style={{flexDirection:"row",justifyContent:"space-between", paddingHorizontal: 20,alignItems:"center"}}>
          <Text style={{ fontSize: 35, fontWeight: 700 }}>
            {selectedItem.name}
          </Text>
          <TouchableOpacity onPress={handleShare}>
          <Fontisto name="share" size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "column",
            borderWidth: 1,
            padding: 15,
            borderRadius: 20,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text>Weight</Text>
            <Text>Calories</Text>
            <Text>Protein</Text>
          </View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={{ fontSize: 20, color: "green" }}>
              {selectedItem.weight}
            </Text>
            <Text style={{ fontSize: 20, color: "green" }}>
              {selectedItem.calories}
            </Text>
            <Text style={{ fontSize: 20, color: "green" }}>
              {selectedItem.protein}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              fontSize: 15,
              textAlign: "justify",
            }}
          >
            {selectedItem.description}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 25, fontWeight: 500, marginLeft: 20 }}>
            It tastes better together!
          </Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            horizontal
            data={itemList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.imageData}
                onPress={() =>
                  navigation.navigate("ItemImagePage", { itemId: item.id })
                }
              >
                <Image
                  style={{ height: 200, width: 250, borderRadius: 30 }}
                  source={item.image}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <TouchableOpacity style={styles.addToCart} onPress={handleAddToCart}>
          <Text style={{ fontSize: 20, color: "white" }}>Add To Cart</Text>
          <Text style={{ fontSize: 20, color: "white" }}>
            Rs. {selectedItem.price}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    // resizeMode:'contain',
  },
  addToCart: {
    borderColor: "black",
    borderRadius: 10,
    width: "100%",
    backgroundColor: "orange",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
  },
  imageData: {
    paddingHorizontal: 15,
  },
});
