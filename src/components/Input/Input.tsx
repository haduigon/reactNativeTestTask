import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './InputStyles';
import { checkIfEmail } from '../../helpers/utils';
import { Text } from 'react-native';

type Props = {
  text?: string;
  onChangeText?: () => {};
  isPassword?: boolean
};

function Input({text = 'Type your email', isPassword = false}: Props) {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState(false);
  // const [showKeyboard, setShowKeyboard] = useState<boolean>(true);
  const inputRef = useRef<TextInput>(null);

  

  // const isPassword = text.includes('password') ? true : false;

  const handleBlur = () => {
    if (inputRef.current) {
      // setShowKeyboard(false);
      inputRef.current.blur();
    }
  };


  function handleChangeText(inputText: string) {
    console.log(inputText, checkIfEmail(value), 'inputText');

    setValue(inputText);

    if (text.includes('email')) {
      if (!checkIfEmail(value)) {
        setError(true);
      } else {
        setError(false);
      }
  }
    // onChangeText();
  }

  console.log(error, 'erroooorrr');
  

  return (
    <View style={styles.container}>
      {error && <Text>email is incorrect</Text>}
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
