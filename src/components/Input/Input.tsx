import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  // TouchableOpacity,
  // Text,
  // Keyboard,
  // TouchableWithoutFeedback,
  // ScrollView,
} from 'react-native';
import styles from './InputStyles';

type Props = {
  text?: string;
  onChangeText?: () => {};
};

function Input({ text = 'Type your email' }: Props) {
  const [value, setValue] = useState<string>(text);
  // const [showKeyboard, setShowKeyboard] = useState<boolean>(true);
  const inputRef = useRef<TextInput>(null);

  const handleBlur = () => {
    if (inputRef.current) {
      // setShowKeyboard(false);
      inputRef.current.blur();
    }
  };

  // const hideKeyboard = () => {
  //   Keyboard.dismiss();
  //   handleBlur();
  // };

  function handleChangeText(inputText: string) {
    console.log(inputText, 'inputText');

    setValue(inputText);
    // onChangeText();
  }

  return (
      // <ScrollView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder={text}
          value={value}
          onChangeText={handleChangeText}
          onBlur={handleBlur}
          // showSoftInputOnFocus={showKeyboard}
        />
      </View>
    // </ScrollView>
  );
}

export default Input;
