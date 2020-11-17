import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import Images from '../Theme/Images';
import CheckBox from 'react-native-check-box';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChooseCityStyles';
import Color from '../Theme/Color';

const ChooseCity = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.contend}>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <View style={styles.item} key={index.toString()}>
              <CheckBox
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
                isChecked={isChecked}
                rightText={'CheckBox'}
                checkBoxColor={Color.main}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ChooseCity;
