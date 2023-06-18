import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const DetailCampaign = () => {
  const route = useRoute();
  const {itemCampaign} = route.params;
  console.log(itemCampaign);
  return <View>{/* <Image /> */}</View>;
};

export default DetailCampaign;
