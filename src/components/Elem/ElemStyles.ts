import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  signOutContainer: {
    marginBottom: 10,
  },
  signOutButton: {
    backgroundColor: '#7b96bc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  signOutText: {
    color: 'white',
    textAlign: 'center',
  },
  articleContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
  flatListContent: {
    paddingBottom: 20,
    marginBottom: 40,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#7b96bc',
    padding: '2%',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
