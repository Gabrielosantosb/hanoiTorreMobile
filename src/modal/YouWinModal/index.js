import React from 'react';
import { ModalContainer, ModalContent, Title,Button, ButtonText } from '../styles';
import { Text } from 'react-native';


// import { Container } from './styles';

export const YouWinModal = ({ isVisible, onClose, movements, minMoviments }) => {
    if (!isVisible) {
      return null;
    }
  
    return (
      <ModalContainer>
        <ModalContent>
          <Title>Você ganhou!</Title>
                    
          <Text>Minimo de movimentos: {minMoviments}</Text>          
          <Button onPress={onClose}>
            <ButtonText>Fechar</ButtonText>
          </Button>
        </ModalContent>
      </ModalContainer>
    );
  };
  