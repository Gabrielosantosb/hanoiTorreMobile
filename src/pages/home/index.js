import React from "react";
import { ButtonContainer, ButtonText, Container, LevelButton, Title } from "./styles";


export const Home = ({ navigation }) => {
  const handleLevelPress = (level) => {
    if(level = "Facil") {
        console.log(`Botão ${level} pressionado`);
        navigation.navigate("EasyLevel")

      }
      
    };
  
    return (
      <Container>
        {/* <ButtonText>Como jogar</ButtonText> */}
        <Title>Torre de Hanoi</Title>
        <ButtonContainer>
          <LevelButton onPress={() => handleLevelPress('Fácil')}>
            <ButtonText>Fácil</ButtonText>
          </LevelButton>
        </ButtonContainer>
        
        <ButtonContainer>
          <LevelButton onPress={() => handleLevelPress('Médio')}>
            <ButtonText>Médio</ButtonText>
          </LevelButton>
        </ButtonContainer>

        <ButtonContainer>
          <LevelButton onPress={() => handleLevelPress('Difícil')}>
            <ButtonText>Difícil</ButtonText>
          </LevelButton>
        </ButtonContainer>
      </Container>
    );
  };
