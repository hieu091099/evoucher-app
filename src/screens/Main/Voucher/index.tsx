import {Button, FlatList, View, Text} from 'react-native';
import React, {useState, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../utils/routes';
import {navigate} from '../../../navigations/services';
import Header from '../../../components/Header';
import colors from '../../../utils/color';
import ItemVoucher from './ItemVoucher';
import DetailVoucher from './DetailVoucher';

export default function Voucher({}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [vouchers, setVouchers] = useState([
    {id: 1, branch: 'mc'},
    {id: 2, branch: 'kfc'},
  ]);
  const [selectedId, setSelectedId] = useState('');
  const [searchVoucher, setSearchVoucher] = useState('');

  const handleOnChange = value => {
    setSearchVoucher(value);
  };

  const searchData = useMemo(() => {
    if (!searchVoucher.length) {
      return vouchers;
    }
    return vouchers.filter(voucher =>
      voucher.branch.toLowerCase().includes(searchVoucher.toLowerCase()),
    );
  }, [searchVoucher, vouchers]);

  const handleOnPressItem = item => {
    setSelectedId(item.id);
    navigate('DetailVoucher');
  };

  const renderItem = ({item}: any) => {
    return (
      <ItemVoucher
        title={item.title}
        branch={item.branch}
        onPress={() => handleOnPressItem(item)}
      />
    );
  };

  const ItemSeparator = () => {
    return <View style={{height: 20}} />;
  };

  return (
    <Header isGradientBar colorStart={colors.blue800} colorEnd={colors.blue800}>
      <View style={{paddingHorizontal: 16}}>
        <Searchbar value={searchVoucher} onChangeText={handleOnChange} />
        <FlatList
          style={{paddingTop: 8, height: '100%'}}
          data={searchData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
    </Header>
  );
}
