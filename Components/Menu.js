import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import AntIcon from "react-native-vector-icons/AntDesign";

const Menu = ({ navigation }) => {
  const itemList = useSelector((state) => state.itemList);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const renderCarouselItem = ({ item }) => {
    return (
      <Animatable.View animation="fadeIn" style={styles.itemList}>
        <TouchableOpacity onPress={() => handleImage(item.image)}>
          <Image source={item.image} style={styles.itemImage} />
        </TouchableOpacity>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </Animatable.View>
    );
  };

  const handleImage = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const selectedItem = itemList.find((item) => item.image === selectedImage);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntIcon name="arrowleft" color={"black"} size={30} />
      </TouchableOpacity>
      <Text style={styles.menuTitle}>Menu</Text>
      <Carousel
        data={itemList}
        renderItem={renderCarouselItem}
        sliderWidth={300}
        itemWidth={300}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          {selectedImage && (
            <Animatable.View animation="zoomIn" style={styles.modalContainer}>
              <Animatable.View animation="fadeIn">
                <View>
                  <View style={{ alignItems: "center", marginBottom: 10 }}>
                    <Image
                      source={selectedItem.image}
                      style={{ height: 200, resizeMode: "contain" }}
                    />
                  </View>
                  <Animatable.Text style={styles.modalItemName}>
                    {selectedItem.name}
                  </Animatable.Text>
                </View>
              </Animatable.View>

              <Animatable.View animation="fadeIn" delay={500}>
                <Animatable.Text style={styles.modalItemDetails}>
                  Weight: {selectedItem.weight}
                </Animatable.Text>
              </Animatable.View>

              <Animatable.View animation="fadeIn" delay={1000}>
                <Animatable.Text style={styles.modalItemDetails}>
                  Calories: {selectedItem.calories}
                </Animatable.Text>
              </Animatable.View>

              <Animatable.View animation="fadeIn" delay={1500}>
                <Animatable.Text style={styles.modalItemDetails}>
                  Protein: {selectedItem.protein}
                </Animatable.Text>
              </Animatable.View>
              <Animatable.View animation="fadeIn" delay={2000}>
                <Animatable.Text style={styles.modalItemDescription}>
                  {selectedItem.description}
                </Animatable.Text>
              </Animatable.View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </Animatable.View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },
  menuTitle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  itemList: {
    borderWidth: 1,
    marginVertical: 9,
    marginHorizontal: 9,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
  },
  itemImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: "bold",
  },
  price: {
    textAlign: "center",
    color: "green",
  },
  description: {
    textAlign: "justify",
    padding: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e74c3c",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalItemName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalItemDetails: {
    fontSize: 18,
    marginBottom: 5,
  },
  modalItemDescription: {
    textAlign: "justify",
    marginBottom: 5,
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },
});

export default Menu;
