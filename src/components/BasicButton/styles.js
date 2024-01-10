import styled from "styled-components/native";



export const ButtonContainer = styled.TouchableOpacity`
    padding: 10px;
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


export const LeftButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  position: absolute;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 40px;
  width: 100px;
  border-radius: 8px;
  background-color: #333;
  bottom: 10%;
  left: 0;
  margin: 10px;
`;

export const RightButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  position: absolute;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 40px;
  width: 100px;
  border-radius: 8px;
  background-color: #333;
  bottom: 10%;
  right: 0;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
`;
