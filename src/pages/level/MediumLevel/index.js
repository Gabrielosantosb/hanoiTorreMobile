import React from 'react';
import { View } from 'react-native';
import { Game } from '../../game';

export const MediumLevel = ({navigation}) => {
  return <Game navigation={navigation} numberOfDisks={[4,3,2,1]}/>
}

