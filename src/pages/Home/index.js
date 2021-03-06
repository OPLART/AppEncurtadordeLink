import React, {useState} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator
} from 'react-native';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';

import { LinearGradient } from 'expo-linear-gradient';

import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText
} from './styles';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';
import { saveLink } from '../../utils/storeLinks';

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    setLoading(true);

    try {
      const response = await api.post('/shorten',
        {
        long_url: input
        })

      setData(response.data); //pega a resposta do data e armazena no setData
      setModalVisible(true); //abre o modal

      //DEU TUDO CERTO PRECISO SALVAR ESSE LINK EM UMA LISTA NESSE STORAGE
      saveLink('sujeitolinks', response.data);


      Keyboard.dismiss(); //fecha o teclado
      setLoading(false); //tira o loading
      setInput(''); //limpa input

    }catch{
      alert('Ops parece que algo deu errado! :(')
      Keyboard.dismiss();
      setInput('');
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={ ()=> Keyboard.dismiss()}>
      <LinearGradient
        colors={['#2e6f95', '#892b64']}
        style={{flex: 1, justifyContent: 'center'}}
      >
        <StatusBarPage
          barStyle="light-content"
          backgroundColor="#2e6f95"
        />

        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >
        <ContainerLogo>
          <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
        </ContainerLogo>

          <ContainerContent>
          <Title>Shortener</Title>
          <SubTitle>Cole seu link para encurtar</SubTitle>

          <ContainerInput>
            <BoxIcon>
              <Feather name="link" size={22} color="#FFF" />
            </BoxIcon>
              <Input
              placeholder="Cole seu link aqui..."
              placeholderTextColor="white"
              selectionColor="#FFF"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="url"
              value={input}
              onChangeText={ (text) => setInput(text)}
            />
          </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
              {
                loading ? (
                  <ActivityIndicator color="#121212" size={24} />
                ) : (
                  <ButtonLinkText>ENCURTAR</ButtonLinkText>
                )
              }
          </ButtonLink>

          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={ () => setModalVisible(false)} data={data} />
        </Modal>

      </LinearGradient>
    </TouchableWithoutFeedback>
 );
}
