import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import { requestPermissionsAsync } from "expo-location";

// Components
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
    } catch (e) {
      setErrorMessage(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {errorMessage ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
