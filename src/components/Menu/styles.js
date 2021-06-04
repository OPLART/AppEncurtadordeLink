import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const ButtonMenu = styled.TouchableOpacity`
  top: ${Platform.OS === 'ios' ? StatusBar.currentHeight + 60 + 'px' : 12 + 'px' };
  position: absolute;
  margin: 0 10px;
  justify-content: space-around;
`;