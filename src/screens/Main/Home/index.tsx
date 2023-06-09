import {
  TouchableOpacity,
  FlatList,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {Searchbar} from 'react-native-paper';
import routes from '../../../utils/routes';
import {navigate} from '../../../navigations/services';
import NotificationIcon from '../../../assets/images/notification.svg';
import Header from '../../../components/Header';
import Card from '../../../components/Card';
import {axiosGet} from '../../../utils/axios';
import styles from './styles';
import API from '../../../utils/api';

const ItemSeparator = () => {
  return <View style={{width: 20}} />;
};

const ItemSeparator1 = () => {
  return <View style={{width: 23}} />;
};

const ItemCard = ({IconCT, text, nameIcon, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconCT name={nameIcon} size={26} color="#000" />
        <Text numberOfLines={1}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [menuIcon, setMenuIcon] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [selectedId1, setSelectedId1] = useState();
  const [campaigns, setCampaigns] = useState([]);

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
  const user = useSelector(state => state.auth.account.user);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const handleClickCampaign = item => {
    setSelectedId(item?._id);
    navigate('DetailCampaign', {
      itemCampaign: item,
    });
  };

  const handleClickGroup = item => {
    setSelectedId1(item.id);
    navigate('Campaign', {
      typeCampaign: item.text,
      campaigns: campaigns,
    });
  };

  const handleClickSeeAll = item => {
    navigate('Campaign', {
      campaigns: campaigns,
      isSeeAll: true,
    });
  };

  const renderItem = ({item}: any) => {
    return <Card {...item} onPress={() => handleClickCampaign(item)} />;
  };

  const renderItem1 = ({item}: any) => {
    return (
      <ItemCard
        onPress={() => handleClickGroup(item)}
        text={item.text}
        nameIcon={item.nameIcon}
        IconCT={item.icon}
      />
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
      <View style={styles.dashboard}>
        <View style={styles.header}>
          <View style={styles.headerBar}>
            <TouchableOpacity style={styles.avatar} onPress={openDrawer}>
              <Icon
                name={menuIcon ? 'menu-fold' : 'menu-unfold'}
                size={22}
                color="#fff"
              />
            </TouchableOpacity>
            <Text
              style={{color: 'white', fontStyle: 'normal', fontWeight: '600'}}>
              {'Hello, ' + user.name}
            </Text>
            <NotificationIcon />
          </View>
          <View style={styles.token}>
            <View style={{marginTop: 8}}>
              <Searchbar />
            </View>
          </View>
        </View>
        <View style={styles.body}>
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.campaigns}>
              <View style={styles.titleCampaigns}>
                <Text style={styles.textCampaigns}>Newest Campaigns</Text>
                <TouchableOpacity onPress={handleClickSeeAll}>
                  <Text style={styles.buttonCampaigns}>See all</Text>
                </TouchableOpacity>
              </View>
              {campaigns.length === 0 ? (
                <View style={{marginTop: 30}}>
                  <ActivityIndicator size="large" />
                </View>
              ) : (
                <FlatList
                  style={styles.listCampaigns}
                  data={campaigns}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  extraData={selectedId}
                  horizontal
                  ItemSeparatorComponent={ItemSeparator}
                />
              )}
            </View>
            {/* <View style={styles.vouchers}>
              <View style={styles.titleVouchers}>
                <Text style={styles.textVouchers}>Newest Vouchers</Text>
                <TouchableOpacity>
                  <Text style={styles.buttonVouchers}>See all</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                style={styles.listVouchers}
                data={campaigns}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                horizontal
                ItemSeparatorComponent={ItemSeparator}
              />
            </View> */}
          </ScrollView>
        </View>
      </View>
    </Header>
  );
}
