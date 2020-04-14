// import "../_mockLocation";

import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

// Hooks
import useLocation from "../hooks/useLocation";

// Components
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";

// Context
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [errorMessage] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {errorMessage ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

TrackCreateScreen.navigationOptions = {
  title: "Add track",
  tabBarIcon: <FontAwesome name="plus" size={16} />,
};

export default withNavigationFocus(TrackCreateScreen);
