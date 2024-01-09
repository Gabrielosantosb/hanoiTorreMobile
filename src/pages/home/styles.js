import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #636e47;
`;

export const HomeTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
`;

export const HomeButtonContainer = styled.View`
  margin-top: 20px;
`;

export const HomeButton = styled.TouchableOpacity`
  background-color: #333;
  padding: 12px 24px;
  margin-bottom: 15px;
  border-radius: 8px;
`;

export const HomeButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const HowtoPlayButton = styled.TouchableOpacity`
  background-color: #a346ff;
  padding: 12px 24px;
  border-radius: 8px;
`;

export const HowtoPlayButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
