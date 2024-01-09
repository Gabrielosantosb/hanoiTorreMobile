import React, { useState } from "react";
import styled from "styled-components/native";

export const GameContainer = styled.View`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #636e47;
  /* border: 4px solid black;
  border-radius: 8px; */
`;

export const TowerContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTowerText = styled.Text`
  position: absolute;
  font-size: 30px;
  color: #333; 
  font-weight: bold; 
  letter-spacing: 1px; 
  text-align: center;
  top: 0;
  margin-top: 30%;
`;

export const TowerText = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
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
