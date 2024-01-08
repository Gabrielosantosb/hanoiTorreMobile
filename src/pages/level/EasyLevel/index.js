import React from 'react';
import { View } from 'react-native';
import { Game } from '../../game';

export const EasyLevel = ({navigation}) => {
  return <Game navigation={navigation} numberOfDisks={[3,2,1]}/>
}

