import R from "ramda";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { useSelector } from "react-redux";
import { allLaunchesSelector } from "src/common/launches/launches.selectors";

function Item({ launch, navigation }) {
  const patch = R.pathOr(
    "https://reactjs.org/logo-og.png",
    ["links", "mission_patch_small"],
    launch
  );

  const launchSuccess = true;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Rocket", launch.rocket)}
    >
      <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
        <Image source={{ uri: patch }} style={{ width: 56, height: 56 }} />
        <View style={{ margin: 10 }}>
          <Text>{launch.mission_name}</Text>
          <Text>{launch.launch_date_utc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const LaunchesSceneComponent = ({ navigation }) => {
  const launches = useSelector(allLaunchesSelector);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={launches}
          renderItem={({ item }) => (
            <Item launch={item} navigation={navigation} />
          )}
          keyExtractor={item => R.path(["mission_name"], item)}
        />
      </SafeAreaView>
    </>
  );
};

export default LaunchesSceneComponent;
