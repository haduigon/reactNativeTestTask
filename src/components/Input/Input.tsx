import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './InputStyles';

type Props = {
  text?: string;
  onChangeText?: () => {};
};

function Input({text = 'Type your email'}: Props) {
  const [value, setValue] = useState<string>('');
  // const [showKeyboard, setShowKeyboard] = useState<boolean>(true);
  const inputRef = useRef<TextInput>(null);

  const isPassword = text.includes('password') ? true : false;

  const handleBlur = () => {
    if (inputRef.current) {
      // setShowKeyboard(false);
      inputRef.current.blur();
    }
  };


  function handleChangeText(inputText: string) {
    console.log(inputText, 'inputText');

    setValue(inputText);
    // onChangeText();
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder={text}
        value={value}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        secureTextEntry={isPassword}
        // showSoftInputOnFocus={showKeyboard}
      />
    </View>
  );
}

export default Input;
