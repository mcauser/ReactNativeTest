// IMPORT
import React from 'react';
import {
  AppRegistry,
  AlertIOS,
  NavigatorIOS,
  StatusBarIOS,
} from 'react-native';

import styles from './Styles/styles';
import SearchController from './Controllers/SearchController';

// COMPONENTS
StatusBarIOS.setStyle('light-content');

// VIEWS
function TestReactNative() {
  return (
    <NavigatorIOS
      style={styles.global.mainContainer}
      barTintColor="#2a3744"
      tintColor="#efefef"
      titleTextColor="#efefef"
      initialRoute={{
        component: SearchController,
        title: 'React Native Test',
        rightButtonTitle: 'Search',
        onRightButtonPress: () => AlertIOS.alert(
          'Search Alert', 'This is an alert'
        ),
      }}
    />
  );
}

AppRegistry.registerComponent('TestReactNative', () => TestReactNative);
