import React from 'react';
import { Text } from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from './CustomButtonStyles';

type Props = {
  name: string,
  onPress?: () => {}
}

const CustomButton: React.FC<Props> = ({ name = 'def button', onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}
    >
      <Text
        style={styles.text}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
