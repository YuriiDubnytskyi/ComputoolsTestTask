import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
  },
  buttonsWrapper: {
    width: '100%',
  },
});
