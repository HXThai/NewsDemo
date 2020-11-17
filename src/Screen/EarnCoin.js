import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text as RNText,
  Dimensions,
  Animated,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as d3Shape from 'd3-shape';
import {snap} from '@popmotion/popcorn';
import Svg, {Path, G, Text, TSpan, TextPath} from 'react-native-svg';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/EarnCoinStyles';
import Metric from '../Theme/Metric';
import Color from '../Theme/Color';
import Images from '../Theme/Images';
import Modal from 'react-native-modal';

const numberOfSegments = 12;
const wheelSize = Metric.width * 0.7;
const fontSize = 26;
const wheelBorder = Metric.width * 0.7 + 50;
const oneTurn = 360;
const angleBySegment = oneTurn / numberOfSegments;
const knoobSize = 70;
const angleOffset = angleBySegment / 2;

const makeWheel = () => {
  const data = Array.from({length: numberOfSegments}).fill(1);
  const arcs = d3Shape.pie()(data);
  const colors = data.map((item, index) => {
    const cl = index % 2 == 0 ? '#fff' : Color.main;
    return cl;
  });

  return arcs.map((arc, index) => {
    const instance = d3Shape
      .arc()
      .padAngle(0.01)
      .outerRadius(Metric.width / 2)
      .innerRadius(20);

    return {
      path: instance(arc),
      color: colors[index],
      value: Math.round(Math.random() * 10 + 1) * 200, //[200, 2200]
      centroid: instance.centroid(arc),
    };
  });
};

let _wheelPaths = makeWheel();
let _angle = new Animated.Value(0);
let angle = 0;

const EarnCoin = (props) => {
  const [enabled, setEnable] = useState(true);
  const [finished, setFinished] = useState(false);
  const [winner, setWinner] = useState(null);
  const [modalComp, setModalComp] = useState(false);

  useEffect(() => {
    _angle.addListener((event) => {
      if (enabled) {
        setEnable(false);
        setFinished(false);
        setModalComp(true);
      }
      angle = event.value;
    });
  }, []);

  const _getWinnerIndex = () => {
    const deg = Math.abs(Math.round(angle % oneTurn));
    if (angle < 0) {
      return Math.floor(deg / angleBySegment);
    }
    return (
      (numberOfSegments - Math.floor(deg / angleBySegment)) % numberOfSegments
    );
  };

  const _onPan = () => {
    const velocityY = 60 + Math.random() * 10;
    Animated.decay(_angle, {
      velocity: velocityY,
      deceleration: 0.999,
      useNativeDriver: true,
    }).start(() => {
      _angle.setValue(angle % oneTurn);
      const snapTo = snap(oneTurn / numberOfSegments);
      Animated.timing(_angle, {
        toValue: snapTo(angle),
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        const winnerIndex = _getWinnerIndex();
        setEnable(true);
        setFinished(true);
        setWinner(_wheelPaths[winnerIndex].value);
      });
      // do something here;
    });
  };

  const _renderKnob = () => {
    return (
      <Image
        source={Images.knoob}
        style={{
          width: knoobSize,
          height: knoobSize - 30,
          zIndex: 1,
          position: 'absolute',
          left: Metric.width / 2 - knoobSize / 2,
        }}
        resizeMode="contain"
      />
    );
  };

  const _renderSvgWheel = () => {
    return (
      <View style={{height: wheelBorder}}>
        {_renderKnob()}
        <ImageBackground
          source={Images.borderWheel}
          resizeMode="contain"
          style={{
            position: 'absolute',
            left: Metric.width / 2 - wheelBorder / 2,
            width: wheelBorder,
            height: wheelBorder,
          }}>
          <Animated.View
            style={{
              position: 'absolute',
              top: 29,
              left: wheelBorder / 2 - wheelSize / 2,
              width: wheelSize,
              height: wheelSize,
              borderRadius: wheelSize / 2,
              alignItems: 'center',
              justifyContent: 'center',
              transform: [
                {
                  rotate: _angle.interpolate({
                    inputRange: [-oneTurn, 0, oneTurn],
                    outputRange: [`-${oneTurn}deg`, `0deg`, `${oneTurn}deg`],
                  }),
                },
              ],
            }}>
            <Svg
              width={wheelSize}
              height={wheelSize}
              viewBox={`0 0 ${Metric.width} ${Metric.width}`}
              style={{
                borderRadius: Metric.width / 2,
                transform: [{rotate: `-${angleOffset}deg`}],
              }}>
              <G y={Metric.width / 2} x={Metric.width / 2}>
                {_wheelPaths.map((arc, i) => {
                  const [x, y] = arc.centroid;
                  const number = arc.value.toString();
                  return (
                    <G key={`arc-${i}`}>
                      <Path d={arc.path} fill={arc.color} />
                      <G
                        rotation={
                          (i * oneTurn) / numberOfSegments + angleOffset
                        }
                        origin={`${x}, ${y}`}>
                        <Text
                          x={x}
                          y={y - 70}
                          fill={'#000'}
                          textAnchor="middle"
                          fontSize={fontSize}>
                          <TSpan>{_wheelPaths[i].value}</TSpan>
                        </Text>
                      </G>
                    </G>
                  );
                })}
              </G>
            </Svg>
          </Animated.View>
        </ImageBackground>
      </View>
    );
  };

  const modalComplete = () => {
    return (
      <Modal
        animationInTiming={150}
        animationOutTiming={150}
        isVisible={modalComp}
        style={styles.modalComplete}
        onBackdropPress={() => setModalComp(false)}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.contentModal}>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RNText style={styles.titleModal}>CHÚC MỪNG BẠN</RNText>
          </View>
          <View style={{height: 60}}>
            <RNText style={styles.txtContent}>
              Chúc mừng bạn đã quay được{' '}
              <RNText style={{fontWeight: 'bold', color: Color.main}}>
                {winner}
              </RNText>
              , hãy tiếp tục quay thưởng cùng chúng tôi nào!
            </RNText>
          </View>
        </View>
        <View style={styles.foooter}>
          <TouchableOpacity
            style={[styles.ok, {borderBottomLeftRadius: 20}]}
            onPress={() => setModalComp(false)}>
            <RNText style={styles.txtBtnModal}>Từ chối</RNText>
          </TouchableOpacity>
          <View style={{width: 1, height: '100%', backgroundColor: '#fff'}} />
          <TouchableOpacity
            style={[styles.ok, {borderBottomRightRadius: 20}]}
            onPress={() => {
              setModalComp(false),
                setTimeout(() => {
                  _onPan();
                }, 160);
            }}>
            <RNText style={styles.txtBtnModal}>Đồng ý</RNText>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {finished && enabled && modalComplete()}
      <View style={styles.contend}>
        <ScrollView
          style={[styles.contend, {marginBottom: 60}]}
          showsVerticalScrollIndicator={false}>
          <RNText
            style={styles.txtTitle}
            numberOfLines={2}
            adjustsFontSizeToFit>
            Hãy tham gia vòng xoay may mắn và xem video để nhận xu. Khi bạn nhận
            được tối thiểu 20.000 xu bạn sẽ quy đổi thẻ cào
          </RNText>
          <TouchableOpacity style={styles.btnMoney}>
            <View style={styles.leftBtn}>
              <Image
                source={Images.money}
                resizeMode="contain"
                style={styles.imgMoney}
              />
            </View>
            <View style={styles.rightBtn}>
              <RNText>Xu tích lũy</RNText>
              <RNText style={styles.txtMoneyBtnMoney}>500.000 xu</RNText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCard}
            onPress={() => props.navigation.navigate('ExchangeCard')}>
            <View style={styles.leftBtn}>
              <Image
                source={Images.card}
                resizeMode="contain"
                style={styles.imgMoney}
              />
            </View>
            <View style={styles.rightBtn}>
              <RNText style={styles.txtCard}>Quy đổi thẻ cào</RNText>
            </View>
          </TouchableOpacity>
          <View style={styles.viewTitleWheel}>
            <View style={[styles.underTitle, {marginRight: 10}]} />
            <RNText style={styles.titleWheel}>VÒNG QUAY MAY MẮN</RNText>
            <View style={[styles.underTitle, {marginLeft: 10}]} />
          </View>
          {_renderSvgWheel()}
          <TouchableOpacity
            style={[
              styles.btnTurn,
              !enabled
                ? {backgroundColor: 'gray'}
                : {backgroundColor: Color.main},
            ]}
            disabled={!enabled}
            onPress={() => _onPan()}>
            <RNText style={styles.txtBtnTurn}>Quay</RNText>
          </TouchableOpacity>
          <RNText style={styles.txtTurnNumber}>
            Bạn còn <RNText style={{color: Color.main}}>{'03:00'}</RNText> để
            tới lần quay tiếp theo
          </RNText>
          <TouchableOpacity style={styles.btnWatchVideo}>
            <View style={styles.btnLeftWatch}>
              <Image
                source={Images.camera}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            </View>
            <View style={[styles.rightBtn, {alignItems: 'center'}]}>
              <RNText style={styles.txtCard}>
                Xem video nhận xu {'10/20'}
              </RNText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnWatchVideo, {marginBottom: 15}]}
            onPress={() => props.navigation.navigate('HistoryTurn')}>
            <View style={styles.btnLeftWatch}>
              <Image
                source={Images.history}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            </View>
            <View style={[styles.rightBtn, {alignItems: 'center'}]}>
              <RNText style={styles.txtCard}>Lịch sử vòng quay</RNText>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default EarnCoin;
