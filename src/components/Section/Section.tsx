import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  // Button,
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  // TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <View
        style={[
          styles.sectionDescription,
          {
            // color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    // paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    // marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center'
  },
  highlight: {
    fontWeight: '700',
  },
});