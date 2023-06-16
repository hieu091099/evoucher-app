import {TouchableOpacity, FlatList, View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';

import routes from '../../../utils/routes';
import {navigate} from '../../../navigations/services';
import NotificationIcon from '../../../assets/images/notification.svg';
import Header from '../../../components/Header';
import Card from '../../../components/Card';

import styles from './styles';

const ItemSeparator = () => {
  return <View style={{width: 20}} />;
};

const ItemSeparator1 = () => {
  return <View style={{width: 23}} />;
};

const ItemCard = ({IconCT, text, nameIcon, onPress}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'column',
        width: 49,
        height: 54,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <IconCT style={{paddingLeft: 6}} name={nameIcon} size={26} color="#000" />
      <Text numberOfLines={1}>{text}</Text>
    </TouchableOpacity>
  );
};

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [menuIcon, setMenuIcon] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [selectedId1, setSelectedId1] = useState();
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: 'chien dich 1',
      content: 'seco nhieu khuyen mai voucher123123123123123123123123123123',
      location: 'quan 1',
    },
    {
      id: 2,
      title: 'chien dich 1',
      content: 'seco nhieu khuyen mai voucher',
      location: 'quan 1',
    },
    {
      id: 3,
      title: 'chien dich 1',
      content: 'seco nhieu khuyen mai voucher',
      location: 'quan 1',
    },
    {
      id: 4,
      title: 'chien dich 1',
      content: 'seco nhieu khuyen mai voucher',
      location: 'quan 1',
    },
  ]);

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
      text: 'Drinks',
    },
    {
      id: 3,
      icon: IconIon,
      nameIcon: 'musical-notes-outline',
      text: 'Music',
    },
    {
      id: 4,
      icon: IconIon,
      nameIcon: 'restaurant-outline',
      text: 'Restaurant',
    },
    {
      id: 5,
      icon: Icon,
      nameIcon: 'car',
      text: 'Car',
    },
    {
      id: 6,
      icon: Icon,
      nameIcon: 'shoppingcart',
      text: 'Shopping',
    },
  ]);

  const user = {
    name: 'Admin',
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const renderItem = ({item}: any) => {
    return (
      <Card
        title={item.title}
        onPress={() => setSelectedId(item.id)}
        content={item.content}
        location={item.location}
      />
    );
  };

  const renderItem1 = ({item}: any) => {
    return (
      <ItemCard
        onPress={() => setSelectedId1(item.id)}
        text={item.text}
        nameIcon={item.nameIcon}
        IconCT={item.icon}
      />
    );
  };

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
            <Text style={styles.tokenText}>Available Tokens</Text>
            <Text style={styles.tokenTotal}>$121321.321321</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.cardButton}>
            <FlatList
              data={groups}
              contentContainerStyle={{
                flexDirection: 'row',
                padding: 0,
                alignItems: 'center',
                justifyContent: 'center',
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
                <TouchableOpacity>
                  <Text style={styles.buttonCampaigns}>See all</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                style={styles.listCampaigns}
                data={campaigns}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                horizontal
                ItemSeparatorComponent={ItemSeparator}
              />
            </View>
            <View style={styles.vouchers}>
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
            </View>
          </ScrollView>
        </View>
      </View>
    </Header>
  );
}
