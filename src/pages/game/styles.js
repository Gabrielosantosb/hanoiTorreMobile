import React, { useState } from "react";
import styled from "styled-components/native";

export const HanoiContainer = styled.View`
  width: 250px;
  height: 800px;
  margin-left: 20%;
  gap: 0;
  margin-top: 10%;
  flex-direction: column;
  background-color: aqua;
`;

export const GameContainer = styled.View`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #636e47;
  border: 4px solid black;
  border-radius: 8px;
`;

export const TowerContainer = styled.View `
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TowerText = styled.Text `
  color: #000; 
  font-size: 24px;
  font-weight: bold; 
  text-align: center; 
  margin-top: 12px; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
`

export const TorreContainer = styled.View`
  width: 300px;
  height: 800px;
  margin-top: 10%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #636e47;
  border: 4px solid black;
  border-radius: 8px;
`;

export const MovementsContainer = styled.View`
  margin-bottom: 20px;
`;

export const MovementsText = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Tower = styled.TouchableOpacity`
  height: 200px;
  width: 20px;
  border-radius: 20px 0 10px;
  
  margin: 50px;
  background-color: black;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const Disk = styled.View`
  height: 30px;
  width: ${(props) => props.size * 30}px;
  background-color: ${(props) => (props.selected ? "#00ff00" : "#e74c3c")};
  margin-bottom: ${(props) => (props.selected ? "50px" : "5px")};
  border: 3px solid black;
  border-radius: 10px;
`;
export const Disk1 = styled.View`
  border: 3px solid black;
  border-radius: 10px;
  width: 60px;
  height: 25px;
  background-color: red;
`;
export const Disk2 = styled.View`
  border: 3px solid black;
  border-radius: 10px;
  width: 90px;
  height: 25px;
  background-color: blue;
`;
export const Disk3 = styled.View`
  border: 3px solid black;
  border-radius: 10px;
  width: 120px;
  height: 25px;
  background-color: yellow;
`;
export const Disk4 = styled.View`
  border: 3px solid black;
  border-radius: 10px;
  width: 150px;
  height: 25px;
  background-color: green;
`;

export const Disk5 = styled.View`
  border: 3px solid black;
  border-radius: 10px;
  width: 60px;
  height: 25px;
  background-color: red;
`;

export const EndGameContainer = styled.View`
  display: ${(props) => (props.display ? "flex" : "none")};
  margin-top: 20px;
`;

export const EndGameText = styled.Text`
  font-size: 18px;
  color: green;
`;

export const ResetButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const ResetButtonText = styled.Text`
  font-size: 16px;
  color: blue;
`;
