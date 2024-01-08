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

  const disks = [3, 2, 1];
  const [tower1, setTower1] = useState(disks);
  const [tower2, setTower2] = useState([]);
  const [tower3, setTower3] = useState([]);

  const selectDisk = (selectedDisk) => {
    console.log("Disco selecionado", selectedDisk);
    // Implemente a lógica para manipular os discos conforme necessário.
  };

  const handleReset = () => {
    // Implemente a lógica para reiniciar o jogo.
  };

  const handleTowerPress = (tower) => {
    console.log("Torre selecionada", tower);
    // Implemente a lógica para lidar com o pressionar da torre.
  };

  return (
    <TorreContainer>
      <TowerComponent tower={tower1} onSelectDisk={selectDisk} onPress={() => handleTowerPress(1)} />
      <TowerComponent tower={tower2} onSelectDisk={selectDisk} onPress={() => handleTowerPress(2)} />
      <TowerComponent tower={tower3} onSelectDisk={selectDisk} onPress={() => handleTowerPress(3)} />
    </TorreContainer>
  );
};