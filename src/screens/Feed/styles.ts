import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  itemContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  author: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    fontSize: 16,
    width: '100%',
    opacity: 0.9,
  },
  loader: {
    marginVertical: 10,
  },
});
