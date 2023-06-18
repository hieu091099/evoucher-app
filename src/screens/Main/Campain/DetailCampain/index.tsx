import {
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import API from '../../../../utils/api';
import TextCT from '../../../../components/TextCT';
import colors from '../../../../utils/color';
import moment from 'moment';
import ItemVoucher from '../../Voucher/ItemVoucher';
import {useNavigation} from '@react-navigation/native';
import {navigate} from '../../../../navigations/services';

const DetailCampaign = () => {
  const route = useRoute();
  const [selectedIdVoucher, setSelectedIdVoucher] = useState('');
  const {itemCampaign = {}} = route.params;
  console.log(itemCampaign);
  const colorStatus = () => {
    switch (itemCampaign.status) {
      case 'Running':
        return colors.green400;
      case 'Pending':
        return colors.yellow600;
      case 'Rejected':
        return colors.red400;
      case 'Ended':
        return colors.grey400;
      default:
        return colors.grey400;
    }
  };
  const startDate = itemCampaign.startDate.replace(' ', '');
  const start = moment(startDate).format('DD/MM/YYYY');
  const endDate = itemCampaign.endDate.replace(' ', '');
  const end = moment(endDate).format('DD/MM/YYYY');
  const endDateCT = moment(endDate).format('DD MMMM YYYY');

  const handleOnPressVoucher = item => {
    navigate('DetailVoucher', {
      itemVoucher: item,
    });
  };

  const renderItemDiscount = ({item}) => {
    return (
      <ItemVoucher
        title={item.discountPercent}
        amount={item.amount}
        isDetail
        endDate={endDateCT}
        onPress={() => handleOnPressVoucher(item)}
      />
    );
  };
  const renderItemGame = ({item}) => {
    return (
      <TouchableOpacity style={{width: 150, height: 150, flexDirection: 'row'}}>
        <Image
          source={require('../../../../assets/bird.png')}
          style={{width: '100%', height: '100%', borderRadius: 12}}
        />
      </TouchableOpacity>
    );

    // return <ItemVoucher title={item.discountPercent} amount={item.amount} isDetail endDate={endDateCT}/>
  };
  const ItemSeparator = () => {
    return <View style={{width: 20}} />;
  };
  return (
    <ScrollView style={{flex: 1, padding: 16}}>
      <View style={{width: '100%', height: 200}}>
        <Image
          source={{uri: API.GET_IMAGES(itemCampaign?.campaignImage)}}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 39,
          }}
        />
      </View>

      <TextCT style={{marginTop: 16, textAlign: 'left'}} type="H2" bold>
        {itemCampaign?.name}
      </TextCT>
      <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
        <TextCT type="H4">Mô tả:</TextCT>
        <TextCT style={{marginLeft: 8}} type="H4">
          {itemCampaign?.description}
        </TextCT>
      </View>
      <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
        <TextCT type="H4">Số lượng: </TextCT>
        <TextCT style={{marginLeft: 8}} type="H4" bold>
          {itemCampaign?.numberVoucher}{' '}
        </TextCT>
      </View>
      <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
        <TextCT type="H4">Trạng thái: </TextCT>
        <TextCT
          style={{marginLeft: 8}}
          type="H4"
          bold
          color={colorStatus(itemCampaign?.status)}>
          {itemCampaign?.status}{' '}
        </TextCT>
      </View>
      <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
        <TextCT type="H4">Loại chiến dịch: </TextCT>
        <TextCT style={{marginLeft: 8}} type="H4" bold>
          {itemCampaign?.type}{' '}
        </TextCT>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 8,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextCT type="H4" color={colors.green600} bold>
          {start}{' '}
        </TextCT>
        <TextCT type="H4"> ----------------------</TextCT>
        <TextCT bold color={colors.red700} style={{marginLeft: 8}} type="H4">
          {end}
        </TextCT>
      </View>
      <TextCT style={{marginTop: 16}} type="H2" bold>
        Voucher{' '}
      </TextCT>
      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <FlatList
          data={itemCampaign?.discountDefined}
          renderItem={renderItemDiscount}
          keyExtractor={item => item.id}
          extraData={selectedIdVoucher}
          horizontal
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginTop: 8,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <TextCT type="H2" bold>
          Game{' '}
        </TextCT>
        <FlatList
          data={itemCampaign?.discountDefined}
          renderItem={renderItemGame}
          keyExtractor={item => item.id}
          extraData={selectedIdVoucher}
          horizontal
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
    </ScrollView>
  );
};

export default DetailCampaign;
