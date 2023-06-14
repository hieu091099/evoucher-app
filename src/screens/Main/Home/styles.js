import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    dashboard: {flexDirection: 'column', height: '100%', paddingHorizontal: 16},
    token: {
      flexDirection: 'column',
      height: 81,
      width: 'auto',
      marginTop: 8,
    },
    tokenText: {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 21,
      textAlign: 'center',
      color: '#bbdefb',
    },
    tokenTotal: {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 32,
      lineHeight: 50,
      textAlign: 'center',
      color: '#FFFFFF',
    },
    avatar: {
      borderColor: '#FFF',
      borderWidth: 2,
      borderRadius: 80,
    },
    header: {
      flexDirection: 'column',
    },
    headerBar: {
      marginTop: 16,
      flexDirection: 'row',
      height: 36,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    body: {
      height: 300,
      flexDirection: 'column',
      background: '#FBFBFB',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    cardButton: {
      paddingVertical: 14,
      paddingHorizontal: 29,
      height: 83,
      backgroundColor: '#FEFEFE',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 39,
      elevation: 5,
    },
  });
  