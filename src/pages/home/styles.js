import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
`;

export const LevelButton = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;