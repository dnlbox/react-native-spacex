import R from 'ramda';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { launchesStyles as styles } from './rocket.styles';

const RocketSceneComponent = ({ route, navigation }) => {
  const rocket = route.params;

  const rocketName = R.path(['rocket_name'], rocket);
  const rocketType = R.path(['rocket_type'], rocket);
  const reused = R.pathOr('not applicable', ['fairings', 'reused'], rocket);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <Text>Rocket Name: {rocketName}</Text>
            <Text>Rocket Type: {rocketType}</Text>
            <Text>Reused: {reused.toString()}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RocketSceneComponent;
