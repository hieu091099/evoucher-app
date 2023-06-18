import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../utils/color';

export default StyleSheet.create({
  cardButton: {
    marginTop: 16,
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
    paddingTop: 16,
    marginBottom: 280,
  },
});
