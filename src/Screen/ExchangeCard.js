import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Images from '../Theme/Images';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ExchangeCardStyles';
import {color} from 'react-native-reanimated';

const ExchangeCard = (props) => {
  const [money, setMoney] = useState('1');
  const [network, setNetwork] = useState('1');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contend} showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <View style={styles.viewImg}>
            <Image
              source={Images.imgProfile}
              style={{width: 50, height: 50, alignSelf: 'center'}}
              resizeMode="contain"
            />
            <Text style={styles.txtNamePro}>ELON MUSK</Text>
          </View>
          <View style={styles.phone}>
            <View style={styles.left}>
              <Text>Điện thoại: {'0123456789'}</Text>
            </View>
            <View style={styles.right}>
              <TouchableOpacity style={styles.btnPro}>
                <Text style={styles.txtSavePro}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.phone}>
            <View style={styles.left}>
              <Text>Ngày tham gia</Text>
            </View>
            <View style={styles.right}>
              <Text>{'11/11/2020'}</Text>
            </View>
          </View>
          <View style={styles.phone}>
            <View style={styles.left}>
              <Text>Xu tích lũy</Text>
            </View>
            <View style={styles.right}>
              <Text style={[styles.txtSavePro, {fontWeight: 'bold'}]}>
                {'500.000 xu'}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.txtAlert}>
          Bạn cần nhập số điện thoại để quy đổi thẻ cào
        </Text>
        <View style={styles.viewDropdown}>
          <Text style={styles.txtDropDown}>Lựa chọn mệnh giá</Text>
          <DropDownPicker
            items={[
              {
                label: '100.000',
                value: '1',
              },
              {
                label: '200.000',
                value: '2',
              },
              {
                label: '500.000',
                value: '3',
              },
            ]}
            defaultValue={money}
            containerStyle={{height: 40, width: '100%', alignSelf: 'center'}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => setMoney(item.value)}
          />
        </View>
        <View style={styles.viewDropdown}>
          <Text style={styles.txtDropDown}>Lựa chọn nhà mạng</Text>
          <DropDownPicker
            items={[
              {
                label: 'Viettel',
                value: '1',
              },
              {
                label: 'Vinaphone',
                value: '2',
              },
              {
                label: 'VietNamMobile',
                value: '3',
              },
            ]}
            defaultValue={money}
            containerStyle={{height: 40, width: '100%', alignSelf: 'center'}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => setNetwork(item.value)}
          />
        </View>
        <TouchableOpacity style={styles.btnTransfer}>
          <Text style={styles.txtTransfer}>Quy đổi</Text>
        </TouchableOpacity>
        <View style={{alignSelf: 'center', width: '90%', marginVertical: 15}}>
          <Text>
            ▪️ Để quy đổi phần thưởng thành thẻ cào bằng số xu tích lũy trong
            tài khoản của bạn.
          </Text>
          <Text>▪️ Lưu ý số xu trong tài khoản phải lớn hơn 20.000 xu.</Text>
          <Text>
            ▪️ Giao dịch đổi thẻ sẽ được xử lý trong vòng 24h đến 48h trừ thứ 7,
            chủ nhật, ngày lễ.
          </Text>
          <Text>
            ▪️ Xin lưu ý tài khoản của bạn sẽ được đội ngũ kĩ thuật chúng tôi
            kiểm tra tính hợp lệ (Các tài khoản nhận giải đều phải cung cấp số
            điện thoại và tài khoản faceook vẫn đang hoạt động).
          </Text>
          <Text>
            ▪️ Lưu ý: Một số điện thoại chỉ được đăng kí ở một tài khoản, hệ
            thống sẽ không tiến hành quy đổi với những tài khoản trùng số điện
            thoaị (chỉ tiến hành quy đổi một tài khoản duy nhất).
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExchangeCard;
