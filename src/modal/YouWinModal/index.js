import React from 'react';
import { ModalContainer, ModalContent, Title,Button, ButtonText } from '../styles';


// import { Container } from './styles';

export const YouWinModal = ({ isVisible, onClose, movements }) => {
    if (!isVisible) {
      return null;
    }
  
    return (
      <ModalContainer>
        <ModalContent>
          <Title>Você ganhou!</Title>
          <Title>Movimentos: {movements}</Title>
          <Button onPress={onClose}>
            <ButtonText>Fechar</ButtonText>
          </Button>
        </ModalContent>
      </ModalContainer>
    );
  };
  