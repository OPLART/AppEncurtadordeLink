import React from 'react';
import { View } from 'react-native';

import { ContainerButton, Item } from './styles';

import { Feather } from '@expo/vector-icons';

export default function ListItem() {
  return (
    <View>
      <ContainerButton
      activeOpacity={0.9}
      >
        <Feather
          name="link"
          color="#FFF"
          size={24}
        />
        <Item numberOfLines={1} >https://youtube.com</Item>
      </ContainerButton>
    </View>
  )
}