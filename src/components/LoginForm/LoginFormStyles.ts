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
  emailError: {
    position: 'absolute',
    top: 40,
    color: 'purple',
  },
  passwordError: {
    position: 'absolute',
    top: 110,
    color: 'purple',
  },
  button: {
    backgroundColor: '#7b96bc',
    padding: '2%',
    borderRadius: 5,
    marginTop: 20,
    width: 180,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  smallButton: {
    backgroundColor: '#7b96bc',
    padding: '2%',
    borderRadius: 5,
    width: 75,
    height: 40,
    marginLeft: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  showPassBox: {
    width: 180,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
  },
});

export default styles;
