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
import { CustomGameModal } from "../../modal/customGame";

export const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [customModalVisible, setCustomModalVisible] = useState(false);
  const handleLevelPress = (level) => {
    switch (level) {
      case "Custom":
        navigation.navigate("CustomLevel");
        break;
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
        <HomeButton onPress={() => setCustomModalVisible(true)}>
          <HomeButtonText>Customizar</HomeButtonText>
        </HomeButton>
      </HomeButtonContainer>

      <HomeButtonContainer>
        <HowtoPlayButton onPress={() => setModalVisible(true)}>
          <HowtoPlayButtonText>Como jogar?</HowtoPlayButtonText>
        </HowtoPlayButton>
      </HomeButtonContainer>

    <CustomGameModal    
      isVisible = {customModalVisible}
      navigation={navigation}
      onClose={() => setCustomModalVisible(false)}
    />

      <HowToPlayModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </HomeContainer>
  );
};
