import { Text } from "react-native";
import { Button, ButtonText, ModalContainer, ModalContent, Title } from "../styles";

export const HowToPlayModal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalContent>
        <Title>Como Jogar</Title>
        <Text>
          1. Mova os discos de uma torre para outra, seguindo a regra de que um disco maior não pode ficar em cima de um disco menor.
        </Text>
        <Text>
          2. Toque em um disco para selecioná-lo e, em seguida, toque em outra torre para mover o disco selecionado.
        </Text>
        <Button onPress={onClose}>
          <ButtonText>Fechar</ButtonText>
        </Button>
      </ModalContent>
    </ModalContainer>
  );
};