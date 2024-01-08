import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import {
  Disk,
  HanoiContainer,
  ModalContainer,
  MovementsText,
  TorreContainer,
  Tower,
  TowerContainer,
} from "./styles";
import { TowerComponent } from "../../components/tower";

export const EasyLevel = ({ navigation }) => {
  const [movements, setMovements] = useState(0);
  const [endGame, setEndGame] = useState(false);

  const [tower1, setTower1] = useState([3, 2, 1]);
  const [tower2, setTower2] = useState([]);
  const [tower3, setTower3] = useState([]);



  const handleReset = () => {};

  const handleTowerPress = (tower) => {};
  return (
    <TorreContainer>        
      <TowerComponent disks={tower1}/>
      <TowerComponent  disks={tower2}/>
      <TowerComponent  disks={tower3}/>
          
    </TorreContainer>
  );
};
