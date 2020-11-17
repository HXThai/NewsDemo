import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CheckNotification from '../Screen/CheckNotification';
import SplashScreen from '../Screen/SplashScreen';
import Home from '../Screen/Home';
import Notification from '../Screen/Notification';
import EarnCoin from '../Screen/EarnCoin';
import Personal from '../Screen/Personal';
import Utilities from '../Screen/Utilities';

import Images from '../Theme/Images';
import {Image, View} from 'react-native';
import Color from '../Theme/Color';
import TestScreen from '../Screen/TestScreen';
import HistoryTurn from '../Screen/HistoryTurn';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import ChooseCity from '../Screen/ChooseCity';
import ExchangeCard from '../Screen/ExchangeCard';
import ListNewSave from '../Screen/ListNewSave';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routename = getFocusedRouteNameFromRoute(route) ?? 'Home';
  if (routename == 'HistoryTurn') {
    return false;
  }
  return true;
};

function TabNav(props) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarVisible: getTabBarVisibility(route),
        tabBarIcon: ({focused, color}) => {
          const routeName = route.name;
          let url;
          let size = 20;
          if (routeName === 'Home') {
            url = focused ? Images.homeC : Images.home;
          } else if (routeName === 'Utilities') {
            url = focused ? Images.ultitiC : Images.ultiti;
          } else if (routeName === 'Earn Coin') {
            url = focused ? Images.earncoinC : Images.earncoin;
            size = 28;
          } else if (routeName === 'Notification') {
            url = focused ? Images.notificationC : Images.notification;
          } else if (routeName === 'Personal') {
            url = focused ? Images.personalC : Images.personal;
          }
          return <Image source={url} style={{width: size, height: size}} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.main,
        inactiveTintColor: 'gray',
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          height: 60,
          backgroundColor: '#fff',
        },
        tabStyle: {
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        navigationOptions={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name="Utilities"
        component={Utilities}
        navigationOptions={{tabBarLabel: 'Tiện ích'}}
      />
      <Tab.Screen
        name="Earn Coin"
        component={EarnCoinStack}
        navigationOptions={{tabBarLabel: 'Kiếm xu'}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        navigationOptions={{tabBarLabel: 'Thông báo'}}
      />
      <Tab.Screen
        name="Personal"
        component={Personal}
        navigationOptions={{tabBarLabel: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator initialRouteName="TabNav">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckNotification"
        component={CheckNotification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Test"
        component={ListNewSave}
        options={{
          headerTitle: (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={Images.imgHeader}
                style={{width: 150, height: 40}}
                resizeMode="contain"
              />
            </View>
          ),
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function EarnCoinStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EarnCoin"
        component={EarnCoin}
        options={{
          headerTitle: 'Kiếm xu',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="HistoryTurn"
        component={HistoryTurn}
        options={{
          headerTitle: 'Lịch sử vòng quay',
          headerTitleStyle: {
            alignSelf: 'center',
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerRight: () => <></>,
          headerBackImage: () => (
            <Image
              source={Images.back}
              style={{width: 25, height: 25}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Stack.Screen
        name="ExchangeCard"
        component={ExchangeCard}
        options={{
          headerTitle: 'Quy đổi thẻ cào',
          headerTitleStyle: {
            alignSelf: 'center',
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerRight: () => <></>,
          headerBackImage: () => (
            <Image
              source={Images.back}
              style={{width: 25, height: 25}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={Images.logoNews}
                style={{width: 150, height: 40}}
                resizeMode="contain"
              />
            </View>
          ),
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function NotificationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: 'Thông báo',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
