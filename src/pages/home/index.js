import React, { useState } from "react";
import {
  HomeButton,
  HomeButtonContainer,
  HomeButtonText,
  HomeContainer,
  HomeTitle,
  HowtoPlayButton,
  HowtoPlayButtonText,
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
    <HomeContainer>
      <HomeTitle>Torre de Hanoi</HomeTitle>

      <HomeButtonContainer>
        <HomeButton onPress={() => handleLevelPress("Fácil")}>
          <HomeButtonText>Fácil</HomeButtonText>
        </HomeButton>
      </HomeButtonContainer>

      <HomeButtonContainer>
        <HomeButton onPress={() => handleLevelPress("Médio")}>
          <HomeButtonText>Médio</HomeButtonText>
        </HomeButton>
      </HomeButtonContainer>

      <HomeButtonContainer>
        <HomeButton onPress={() => handleLevelPress("Difícil")}>
          <HomeButtonText>Díficil</HomeButtonText>
        </HomeButton>
      </HomeButtonContainer>

      <HomeButtonContainer>
        <HowtoPlayButton onPress={() => setModalVisible(true)}>
          <HowtoPlayButtonText>Como jogar?</HowtoPlayButtonText>
        </HowtoPlayButton>
      </HomeButtonContainer>

      <HowToPlayModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </HomeContainer>
  );
};
