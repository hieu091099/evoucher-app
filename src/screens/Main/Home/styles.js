import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../utils/color';

export default StyleSheet.create({
  dashboard: {flexDirection: 'column', height: '100%'},
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
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 80,
    padding: 3,
    width: 35,
    height: 36,
  },
  header: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    flex: 1,
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
    flex: 2.7,
    backgroundColor: '#FBFBFB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    position: 'relative',
    zIndex: 1,

  },
  cardButton: {
    position: 'absolute',
    top: -40,
    left: 15,
    width: Dimensions.get('window').width - 32,
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
    zIndex: 2,
  },
  campaigns: {
    marginTop: 46,
    flexDirection: 'column',
    paddingVertical: 16,
  },
  titleCampaigns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 38,
  },
  textCampaigns: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: colors.blue600,
  },
  buttonCampaigns: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: colors.blue400,
  },
  listCampaigns: {
    height: 'auto',
    paddingTop: 8,
  },
  vouchers: {
    flexDirection: 'column',
    paddingVertical: 16,
  },
  titleVouchers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 38,
  },
  textVouchers: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: colors.blue600,
  },
  buttonVouchers: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: colors.blue400,
  },
  listVouchers: {
    height: 'auto',
    paddingTop: 8,
    paddingBottom: 20,
  }
});
