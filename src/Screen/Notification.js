import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import Images from '../Theme/Images';
import ToggleSwitch from 'toggle-switch-react-native';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NotificationStyles';
import Color from '../Theme/Color';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Swipeout from 'react-native-swipeout';

const Notification = (props) => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([
    {
      url: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      cate: 'Xã hội',
    },
    {
      url: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      cate: 'Xã hội',
    },
    {
      url: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      cate: 'Xã hội',
    },
    {
      url: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      cate: 'Xã hội',
    },
  ]);
  const [dataNew, setDataNew] = useState([
    {
      url: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      cate: 'Xã hội',
    },
    {
      url: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      cate: 'Xã hội',
    },
  ]);

  const btnRight = [
    {
      text: 'Xóa',
      backgroundColor: Color.main,
      style: {justifyContend: 'center', alignItem: 'center'},
      onPress: () => alert('aaa'),
    },
  ];

  const renderItem = (item, index) => {
    return (
      <Swipeout
        style={[styles.item, {marginBottom: 15}]}
        right={btnRight}
        buttonWidth={60}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 60, height: 60}}
            resizeMode="contain"
            source={item.url}
          />
          <View style={styles.contendNotifi}>
            <Text>{item.title}</Text>
            <Text style={{color: 'gray'}}>{item.cate}</Text>
          </View>
          <TouchableOpacity style={styles.btnSee}>
            <Text style={styles.txtBtnSee}>Xem</Text>
          </TouchableOpacity>
        </View>
      </Swipeout>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contend}>
        <ScrollView
          style={[styles.contend, {marginBottom: 60}]}
          showsVerticalScrollIndicator={false}>
          <View style={styles.viewToggle}>
            <Text style={{fontSize: 15}}>Bật thông báo</Text>
            <ToggleSwitch
              isOn={toggle}
              autoClose={true}
              onColor={Color.main}
              offColor="#fff"
              size="medium"
              animationSpeed={100}
              thumbOnStyle={{backgroundColor: '#fff'}}
              thumbOffStyle={{backgroundColor: Color.main}}
              trackOnStyle={{borderWidth: 1, borderColor: Color.main}}
              trackOffStyle={{borderWidth: 1, borderColor: Color.main}}
              onToggle={(isOn) => setToggle(isOn)}
            />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.leftTitle}>MỚI</Text>
            <Text style={styles.rightTitle}>Vuốt ngang để xóa</Text>
          </View>
          {dataNew.map((item, index) => {
            return renderItem(item, index);
          })}
          <View style={[styles.viewTitle, {marginTop: 15}]}>
            <Text style={styles.leftTitle}>HÔM QUA</Text>
            <View />
          </View>
          {data.map((item, index) => {
            return renderItem(item, index);
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Notification;
