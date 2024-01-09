import styled from "styled-components";

export const ModalContainer = styled.View`
  flex: 1;
  position: absolute;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  margin-bottom: 50%;
`;

export const ModalContent = styled.View`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
`;

export const Title = styled.Text`
  
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;