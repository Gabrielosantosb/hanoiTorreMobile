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
export const TorreContainer = styled.View`
  width: 300px;
  height: 800px;
  margin-top: 10%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
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

export const Tower = styled.View`
  height: 200px;
  width: 10px;
  border-radius: 20px 0 10px;
  margin-bottom: 20px; /* Add margin to create space between towers */
  background-color: black;
`;

export const TowerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Disk = styled.View`
  height: 30px;
  width: ${(props) => props.size * 30}px;
  background-color: #e74c3c;
  margin-bottom: 5px;
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
