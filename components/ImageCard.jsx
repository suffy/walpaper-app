import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const ImageCard = ({ item, index }) => {
  return (
    <Pressable>
      <Image source={{ uri: item?.webformatURL }} style={styles.images} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  images: {
    width: "100%",
    height: 300,
  },
});

export default ImageCard;
