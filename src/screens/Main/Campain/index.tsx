import React, {useState, useEffect, useMemo} from 'react';
import {View, FlatList, TouchableOpacity, Text, ScrollView} from 'react-native';
import {Searchbar} from 'react-native-paper';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useRoute} from '@react-navigation/native';
import Card from '../../../components/Card';

import {goBack} from '../../../navigations/services';
import Header from '../../../components/Header';
import colors from '../../../utils/color';
import styles from './styles';
import {axiosGet} from '../../../utils/axios';
import API from '../../../utils/api';

const ItemSeparator1 = () => {
  return <View style={{width: 23}} />;
};

const ItemSeparator = () => {
  return <View style={{height: 23}} />;
};

const ItemCard = ({IconCT, text, nameIcon, onPress, activeTab}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconCT
          name={nameIcon}
          size={26}
          style={{color: activeTab === text ? colors.blue400 : '#000'}}
        />
        <Text
          numberOfLines={1}
          style={{color: activeTab === text ? colors.blue400 : '#000'}}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Campain() {
  const route = useRoute();
  const {typeCampaign, campaigns: campaignsProps} = route.params;
  const [searchData, setSearchData] = useState('');
  const [selectedId1, setSelectedId1] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [campaigns, setCampaigns] = useState([...campaignsProps]);
  const [activeTab, setActiveTab] = useState(typeCampaign || '');

  const [groups, setGroups] = useState([
    {
      id: 1,
      icon: IconIon,
      nameIcon: 'fast-food-outline',
      text: 'Food',
    },
    {
      id: 2,
      icon: IconEntypo,
      nameIcon: 'drink',
      text: 'Drink',
    },
    {
      id: 3,
      icon: IconIon,
      nameIcon: 'ios-flower-outline',
      text: 'Beauti',
    },
    {
      id: 4,
      icon: IconIon,
      nameIcon: 'desktop-outline',
      text: 'Cinema',
    },
    {
      id: 5,
      icon: IconOcticons,
      nameIcon: 'beaker',
      text: 'Pharma',
    },
  ]);

  const onChangeText = value => {
    setSearchData(value);
  };

  const handleOnPressItem = item => {
    setSelectedId1(item.id);
    setActiveTab(prev => (prev !== item.text ? item.text : (prev = '')));
  };

  const filterGroupCampaign = useMemo(() => {
    if (activeTab === 'Food') {
      return campaigns.filter(item => item.type === activeTab);
    }
    if (activeTab === 'Drink') {
      return campaigns.filter(item => item.type === activeTab);
    }
    if (activeTab === 'Beauti') {
      return campaigns.filter(item => item.type === activeTab);
    }
    if (activeTab === 'Cinema') {
      return campaigns.filter(item => item.type === activeTab);
    }
    if (activeTab === 'Pharma') {
      return campaigns.filter(item => item.type === activeTab);
    }
    return campaigns;
  }, [activeTab, campaigns]);

  const finalDataGroupCampaign = useMemo(() => {
    if ([null, '', undefined].includes(activeTab)) {
      if (!searchData.length) {
        return campaigns;
      }
      return campaigns.filter(campaign =>
        campaign.name.toLowerCase().includes(searchData.toLowerCase()),
      );
    }
    return filterGroupCampaign.filter(campaign =>
      campaign.name.toLowerCase().includes(searchData.toLowerCase()),
    );
  }, [activeTab, campaigns, filterGroupCampaign, searchData]);

  const renderItem1 = ({item}: any) => {
    return (
      <ItemCard
        onPress={() => handleOnPressItem(item)}
        text={item.text}
        nameIcon={item.nameIcon}
        IconCT={item.icon}
        activeTab={activeTab}
      />
    );
  };

  const handleClickCampaign = () => {};

  const renderItem = ({item}: any) => {
    return (
      <Card {...item} onPress={() => handleClickCampaign(item)} isFullWidth />
    );
  };

  const getListCampaigns = async () => {
    const {data} = await axiosGet(API.CAMPAIGN);
    if (data.length) {
      setCampaigns(data);
    }
  };

  useEffect(() => {
    getListCampaigns();
  }, []);

  return (
    <Header isGradientBar>
      <View style={{paddingHorizontal: 16}}>
        <Searchbar value={searchData} onChangeText={onChangeText} />
        <View style={styles.cardButton}>
          <FlatList
            data={groups}
            contentContainerStyle={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
            extraData={selectedId1}
            horizontal
            ItemSeparatorComponent={ItemSeparator1}
          />
        </View>
        <FlatList
          style={styles.listCampaigns}
          data={finalDataGroupCampaign}
          renderItem={renderItem}
          keyExtractor={item => item?._id}
          extraData={selectedId}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Header>
  );
}
