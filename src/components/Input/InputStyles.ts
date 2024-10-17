import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 180,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  inputError: {
    position: 'absolute',
    top: 40,
    color: 'purple',
  },
});

export default styles;
