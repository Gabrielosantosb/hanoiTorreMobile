import styled from "styled-components/native";

export const LeftButtonContainer = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 40px;
  width: 100px;
  border-radius: 8px;
  background-color: #333;
  
  bottom: 10%;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
`;
