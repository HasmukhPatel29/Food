import React, { useEffect, useState } from "react";
import { Animated, Easing } from "react-native";
import * as Animatable from "react-native-animatable";
import imageLogo from "./Solana.jpg";
import { LinearGradient } from "expo-linear-gradient";

export default function Animation() {
  const slideInUp = {
    0: {
      translateX: 150,
      translateY: 300,
      scale: 0.4,
    },
    1: {
      translateX: 150,
      translateY: 40,
      scale: 1,
    },
  };
  const slideInRight = {
    0: {
      translateX: 100,
      translateY: 0,
      scale: 0.4,
      opacity: 0,
    },
    0.01: {
      translateX: 100,
      translateY: -70,
      scale: 0.3,
      opacity: 1,
    },
    0.99: {
      translateX: 260,
      translateY: -70,
      scale: 0.3,
      opacity: 1,
    },
    1: {
      translateX: 260,
      translateY: -70,
      scale: 0.3,
      opacity: 0,
    },
  };

  const characters = ["S", "O", "L", "A", "N", "A"];
  const animatedValues = characters.map(() => new Animated.Value(0));

  const [imageAnimationComplete, setImageAnimationComplete] = useState(false);

  const ImageAnimationEnd = () => {
    setImageAnimationComplete(true);
  };

  useEffect(() => {
    const animateCharacters = () => {
      characters.forEach((char, index) => {
        Animated.timing(animatedValues[index], {
          toValue: 1,
          duration: 1000,
          easing: Easing.bounce,
          delay: index * 300,
          useNativeDriver: true,
        }).start();
      });
    };

    if (imageAnimationComplete) {
      animateCharacters();
    }
  }, [characters, animatedValues, imageAnimationComplete]);

  return (
    <LinearGradient colors={["#E56717", "#FFc594"]} style={{ flex: 1 }}>
      <Animatable.Image
        source={imageLogo}
        style={{
          width: 100,
          height: 100,
          zIndex: 1,
        }}
        animation={slideInUp}
        duration={3000}
        delay={500}
        onAnimationEnd={ImageAnimationEnd}
      />
      <Animatable.View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        {characters.map((char, index) => (
          <Animated.Text
            style={{
              fontSize: 30,
              marginHorizontal: 5,
              transform: [{ scale: animatedValues[index] }],
            }}
          >
            {char}
          </Animated.Text>
        ))}
      </Animatable.View>
      <Animatable.Image
        source={imageLogo}
        style={{
          width: 100,
          height: 100,
          zIndex: 1,
        }}
        animation={slideInRight}
        duration={3000}
        delay={3700}
      />
    </LinearGradient>
  );
}
