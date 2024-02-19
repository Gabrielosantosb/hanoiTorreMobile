import { Text } from "react-native";
import {
  Button,
  ButtonText,
  ModalContainer,
  ModalContent,
  Title,
  ButtonContainer,
  TextDisk,
} from "../styles";
import { useState } from "react";

export const CustomGameModal = ({ navigation, isVisible, onClose }) => {
  const [numberOfDisks, setNumberOfDisks] = useState(Array.from({ length: 3 }, (_, index) => index + 1).reverse());
  if (!isVisible) {
    return null;
  }

  const addDisk = () => {
    if (numberOfDisks.length >= 10) {
      alert("Não pode ser maior que 10");
    } else {
      console.log(numberOfDisks)
      setNumberOfDisks((prevDisks) => [prevDisks.length + 1, ...prevDisks]);
    }
  };

  const removeDisk = () => {
    if (numberOfDisks.length <= 3) {
      alert("Não pode ser menor que 3");
    } else {
      console.log(numberOfDisks)
      setNumberOfDisks((prevDisks) => prevDisks.slice(1));
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <Title>Selecione o número de discos</Title>
        <TextDisk>
          {numberOfDisks.length}
        </TextDisk>

        <ButtonContainer>
          <Button onPress={removeDisk}>
            <ButtonText>-</ButtonText>
          </Button>
          <Button onPress={addDisk}>
            <ButtonText>+</ButtonText>
          </Button>
        </ButtonContainer>

        <ButtonContainer>
          <Button onPress={onClose}>
            <ButtonText>Fechar</ButtonText>
          </Button>

          <Button
            onPress={() => {
              onClose();
              navigation.navigate("CustomLevel", { numberOfDisks });
            }}
          >
            <ButtonText>Jogar</ButtonText>
          </Button>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};
