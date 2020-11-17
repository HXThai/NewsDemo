import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../Theme/Color';
import Images from '../Theme/Images';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeStyles';

const Home = (props) => {
  const [tab, setTab] = useState(0);
  const [dataTab, setDataTab] = useState([
    {
      name: '',
      id: 0,
    },
    {
      name: 'TIN MỚI',
      id: 1,
    },
    {
      name: 'ĐỌC NHIỀU 24H',
      id: 2,
    },
    {
      name: 'COVID 19',
      id: 3,
    },
    {
      name: 'CHUYÊN MỤC',
      id: 4,
    },
  ]);
  const [dataTag, setDataTag] = useState([
    {
      title: 'covid 19',
    },
    {
      title: 'bao so 13',
    },
    {
      title: 'Quân sự',
    },
    {
      title: 'Quân sự',
    },
    {
      title: 'bao so 13',
    },
    {
      title: 'Quân sự',
    },
    {
      title: 'Quân sự',
    },
  ]);

  const [dataPost, setDataPost] = useState([
    {
      image: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      time: '4 giờ',
      like: '60',
    },
    {
      image: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      time: '5 giờ',
      like: '60',
    },
    {
      image: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      time: '5 giờ',
      like: '60',
    },
    {
      image: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      time: '5 giờ',
      like: '60',
    },
    {
      image: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      time: '5 giờ',
      like: '60',
    },
    {
      image: Images.imgNotifi,
      title: 'WHO: Thế giới trải qua ngày tăng ca Covid-19 cao chưa từng thấy',
      time: '5 giờ',
      like: '60',
    },
  ]);

  const [categories, setCategories] = useState('XÃ HỘI');

  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);

  const onClickChangeTab = (value) => {
    setTab(value);
  };

  const renderTag = (item, index) => {
    return (
      <View style={styles.tag}>
        <Text style={styles.txtTag}>{item.title}</Text>
        <TouchableOpacity onPress={() => alert('Xóa')}>
          <MaterialIcons name="close" size={15} color={color.main} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = (item, index) => {
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            // height: 200,
            width: '94%',
            backgroundColor: 'white',
            borderRadius: 5,
            marginBottom: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 0,
            elevation: 2,
          }}>
          <Image
            source={item.image}
            // resizeMode="contain"
            style={{width: 110, height: 110}}
          />
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 5,
              justifyContent: 'space-between',
            }}>
            <View style={{width: '84%', marginTop: 5}}>
              <Text
                style={{
                  fontWeight: 'normal',
                  fontFamily: 'Roboto',
                  fontSize: 13,
                }}>
                {item.title}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <MaterialIcons name={'watch-later'} size={26} color="#000000" />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Roboto',
                  fontWeight: 'normal',
                  marginLeft: 5,
                  marginRight: 15,
                }}>
                {item.time} trước
              </Text>
              <MaterialIcons name={'favorite'} size={26} color={color.main} />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Roboto',
                  fontWeight: 'normal',
                  marginLeft: 5,
                  marginRight: 15,
                }}>
                {item.like} lượt thích
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contend}>
        <View
          style={[
            styles.contend,
            {
              marginBottom: 60,
            },
          ]}>
          <View style={styles.itemList}>
            {dataTab.map((item) =>
              item.id === 0 ? (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => onClickChangeTab(item.id)}
                  style={{
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: color.main,
                    borderBottomWidth: item.id === tab ? 1 : 0,
                  }}>
                  {item.id === tab ? (
                    <MaterialIcons name={'home'} size={24} color={color.main} />
                  ) : (
                    <MaterialIcons name={'home'} size={24} color="#000000" />
                  )}
                </TouchableOpacity>
              ) : item.id === 4 ? (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => onClickChangeTab(item.id)}
                  style={{
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: color.main,
                    borderBottomWidth: item.id === tab ? 1 : 0,
                  }}>
                  {item.id === tab ? (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                          color: color.main,
                        }}>
                        {item.name}
                      </Text>
                      <MaterialIcons
                        name={'reorder'}
                        size={20}
                        color={color.main}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                          color: 'black',
                        }}>
                        {item.name}
                      </Text>
                      <MaterialIcons
                        name={'reorder'}
                        size={20}
                        color="#000000"
                      />
                    </View>
                  )}
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => onClickChangeTab(item.id)}
                  style={{
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: color.main,
                    borderBottomWidth: item.id === tab ? 1 : 0,
                  }}>
                  {item.id === tab ? (
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: color.main,
                      }}>
                      {item.name}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {item.name}
                    </Text>
                  )}
                </TouchableOpacity>
              ),
            )}
          </View>
          <ScrollView>
            <View style={styles.viewTag}>
              <View style={styles.Vtag}>
                {dataTag.map((item, index) => {
                  return renderTag(item, index);
                })}
              </View>
              <View
                style={{
                  width: 26,
                  height: 26,
                  backgroundColor: color.main,
                  margin: 5,
                  borderRadius: 50,
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name="edit" size={18} color={'white'} />
              </View>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <View
                style={{
                  // height: 200,
                  width: '94%',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginBottom: 10,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 0,
                  elevation: 2,
                }}>
                <Image
                  source={Images.imageTest}
                  // resizeMode="contain"
                  style={{width: '100%', height: 200}}
                />
                <View
                  style={{
                    marginLeft: 5,
                    marginRight: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      fontFamily: 'Roboto',
                    }}>
                    12 người bị xử hình sự vì để xảy ra tham nhũng
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: 11,
                      fontWeight: 'normal',
                    }}>
                    Trong kỳ báo cáo phòng chống tham nhũng năm 2020, có 81
                    người đứng đầu bị kết luận "thiếu trách nhiệm để xảy ra tham
                    nhũng", 12 trường hợp...
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    <MaterialIcons
                      name={'watch-later'}
                      size={26}
                      color="#000000"
                    />
                    <Text
                      style={{
                        fontSize: 11,
                        fontFamily: 'Roboto',
                        fontWeight: 'normal',
                        marginLeft: 5,
                        marginRight: 15,
                      }}>
                      5 giờ trước
                    </Text>
                    <MaterialIcons
                      name={'favorite'}
                      size={26}
                      color={color.main}
                    />
                    <Text
                      style={{
                        fontSize: 11,
                        fontFamily: 'Roboto',
                        fontWeight: 'normal',
                        marginLeft: 5,
                        marginRight: 15,
                      }}>
                      60 lượt thích
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                }}>
                {dataPost.map((item, index) => {
                  return renderItem(item, index);
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;
