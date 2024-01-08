import React, { useState } from "react";
import {
  ButtonContainer,
  ButtonText,
  Container,
  HowtoPlayButton,
  LevelButton,
  Title,
} from "./styles";
import { HowToPlayModal } from "../../modal/howToPlay";

export const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleLevelPress = (level) => {
    switch (level) {
      case "Fácil":      
        navigation.navigate("EasyLevel");
        break;
      case "Médio":      
        navigation.navigate("MediumLevel");
        break;
      case "Difícil":      
        navigation.navigate("HardLevel");
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Title>Torre de Hanoi</Title>

      <ButtonContainer>
        <LevelButton onPress={() => handleLevelPress("Fácil")}>
          <ButtonText>Fácil</ButtonText>
        </LevelButton>
      </ButtonContainer>

      <ButtonContainer>
        <LevelButton onPress={() => handleLevelPress("Médio")}>
          <ButtonText>Médio</ButtonText>
        </LevelButton>
      </ButtonContainer>

      <ButtonContainer>
        <LevelButton onPress={() => handleLevelPress("Difícil")}>
          <ButtonText>Difícil</ButtonText>
        </LevelButton>
      </ButtonContainer>

      <ButtonContainer>
        <HowtoPlayButton onPress={() => setModalVisible(true)}>
          <ButtonText>Como jogar?</ButtonText>
        </HowtoPlayButton>
      </ButtonContainer>

      <HowToPlayModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </Container>
  );
};
