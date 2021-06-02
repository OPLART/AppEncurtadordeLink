import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import StatusBarPage from '../../components/StatusBarPage';


import { Container, Title, ListLinks } from './styles';

export default function MyLinks(){

return(
  <Container>
    <StatusBarPage
        barStyle="light-content"
        backgroundColor="#132742"
    />
    <Menu />

    <Title>Meus links</Title>

    <ListLinks
      data={[ 1,2,5,4,4,8,6,2,3,5,4,7,8,5,9,2,4]}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <ListItem data={item} />}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalIndicator={false}
    />
   </Container>
 );
}
