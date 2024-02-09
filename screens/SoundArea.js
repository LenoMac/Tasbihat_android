import { View, Image, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { gStyle } from "../Style/Style";
import Play from "../img/Play.png";
import Stop from "../img/Stop.png";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import Linear from "../img/Linear.png";

export default function SoundArea({ audioTrack }) {
  const sound = useRef(new Audio.Sound());
  const [isPlaying, setPlaying] = useState(false);
  const [positionMillis, setPositionMillis] = useState(0);
  const [durationMillis, setDurationMillis] = useState(0);

  useEffect(() => {
    loadAudio();
  }, []);

  const playSound = async () => {
    try {
      const result = await sound.current.getStatusAsync();

      if (result.isLoaded) {
        if (!result.isPlaying) {
          await sound.current.playAsync();
          setPlaying(true);
        }
      }
    } catch (error) {
      console.error("Error playing sound", error);
    }
  };

  const stopSound = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying) {
          await sound.current.pauseAsync();
          setPlaying(false);
        }
      }
    } catch (error) {
      console.error("Error stopping sound", error);
    }
  };

  const loadAudio = async () => {
    try {
      const result = await sound.current.loadAsync(audioTrack, {}, false);
      if (result.isLoaded) {
        setDurationMillis(result.durationMillis);
      }
    } catch (e) {
      console.log("Error loading audio", e);
    }
  };

  const handleSlidingComplete = async (value) => {
    try {
      await sound.current.setPositionAsync(value);
      // Если звук не воспроизводится, воспроизведите его
      if (!isPlaying) {
        await sound.current.playAsync();
        setPlaying(true);
      }
    } catch (e) {
      console.error("Error during sliding complete:", e);
    }
  };

  const updatePosition = async () => {
    try {
      const status = await sound.current.getStatusAsync();
      setPositionMillis(status.positionMillis);
    } catch (error) {
      console.error("Ошибка при получении позиции", error);
    }
  };

  const updateStatus = async (status) => {
    if (status.didJustFinish) {
      setPositionMillis(0);
      setPlaying(false);
    }
  };

  useEffect(() => {
    const animationFrame = requestAnimationFrame(updatePosition);
    const statusInterval = setInterval(async () => {
      try {
        const status = await sound.current.getStatusAsync();
        setPositionMillis(status.positionMillis);
      } catch (error) {
        console.error("Ошибка при получении статуса", error);
      }
    }, 1000);

    sound.current.setOnPlaybackStatusUpdate(updateStatus);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(statusInterval);
      sound.current.unloadAsync();
    };
  }, []);

  return (
    <View style={gStyle.soundArea}>
      <View style={{ width: "100%", height: "100%", position: "relative" }}>
        <Image
          source={Linear}
          style={{ width: "100%", position: "absolute" }}
        />
        <View style={gStyle.playArea}>
          <Pressable onPress={isPlaying ? stopSound : playSound}>
            <Image
              source={isPlaying ? Stop : Play}
              style={{ width: 60, height: 60 }}
            />
          </Pressable>
          <View style={gStyle.sliderMinutes}>
            <Slider
              style={{ width: "100%", height: 40, flexGrow: 1 }}
              minimumValue={0}
              value={positionMillis}
              maximumValue={durationMillis}
              thumbTintColor="#fff"
              minimumTrackTintColor="#fff"
              onSlidingComplete={(value) => handleSlidingComplete(value)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
